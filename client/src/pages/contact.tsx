import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions about our services? Get in touch with us and we'll help you find the right solution for your business.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
