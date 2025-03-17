
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";

const chatFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  issue: z.string().min(10, "Please describe your issue in more detail")
});

type ChatFormValues = z.infer<typeof chatFormSchema>;

export function ChatDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      name: "",
      email: "",
      issue: ""
    }
  });

  const onSubmit = (data: ChatFormValues) => {
    console.log("Chat support request:", data);
    setIsSubmitted(true);
  };

  return (
    <>
      <Button 
        size="lg" 
        className="fixed bottom-4 right-4 z-50 bg-primary hover:bg-primary/90 shadow-lg md:px-6 px-4 md:py-3 py-2 text-sm md:text-base rounded-full"
        onClick={() => setOpen(true)}
      >
        Chat with Us
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] w-[95%] mx-auto p-4 sm:p-6 rounded-xl">
          <DialogHeader>
            <DialogTitle>Chat Support</DialogTitle>
          </DialogHeader>
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="h-10 md:h-11 text-base" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" className="h-10 md:h-11 text-base" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="issue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your issue..."
                          className="resize-none min-h-[100px] text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Start Chat</Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-4">
              <p className="text-center text-muted-foreground">
                Thank you! A support agent will be with you shortly.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
              >
                Start New Chat
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
