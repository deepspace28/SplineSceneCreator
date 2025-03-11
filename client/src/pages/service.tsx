import { useParams } from "wouter";
import ContactForm from "@/components/contact-form";

const services = {
  chatbots: {
    title: "AI Chatbots",
    content: "Our AI chatbots help businesses automate customer support, offering personalized interactions and 24/7 availability. They integrate seamlessly with CRM tools to enhance customer experience and increase efficiency. With both LLM-based and rule-based AI capabilities, these chatbots can be customized to suit your specific needs."
  },
  "lead-generation": {
    title: "Lead Generation",
    content: "Our lead generation tool automates the process of scraping emails from LinkedIn, verifying them, and automating outreach. This saves time and boosts efficiency, allowing you to reach out to potential clients with ease. We ensure that the emails are verified before being used in outreach campaigns."
  },
  "custom-solutions": {
    title: "Custom AI Solutions",
    content: "Our custom AI solutions are designed to meet the specific needs of your business. Whether it's creating a tailored chatbot or setting up a personalized email outreach campaign, we provide comprehensive solutions to help you succeed in the digital space."
  }
};

export default function Service() {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground">{service.content}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <ContactForm service={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
