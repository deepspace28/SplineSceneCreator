
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatDialog() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle chat message submission here
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <>
      <Button 
        size="lg" 
        className="fixed bottom-4 right-4 z-50 bg-primary hover:bg-primary/90 shadow-lg"
        onClick={() => setOpen(true)}
      >
        Chat with Us
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chat Support</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
