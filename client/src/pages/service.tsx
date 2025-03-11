import { useParams } from "wouter";
import { GlareCard } from "@/components/ui/glare-card";
import ContactForm from "@/components/contact-form";
import { Bot, Target, Sparkles } from "lucide-react";

const services = {
  chatbots: {
    title: "AI Chatbots",
    icon: Bot,
    content: [
      "Our AI chatbots help businesses automate customer support, offering personalized interactions and 24/7 availability. They integrate seamlessly with CRM tools to enhance customer experience and increase efficiency.",
      "With both LLM-based and rule-based AI capabilities, these chatbots can be customized to suit your specific needs. Our advanced natural language processing ensures your customers receive accurate and contextually relevant responses.",
      "Key features include multi-language support, sentiment analysis, conversation history tracking, and seamless handoff to human agents when needed. This combination of features ensures that your customers always receive the highest level of service."
    ]
  },
  "lead-generation": {
    title: "Lead Generation",
    icon: Target,
    content: [
      "Our lead generation tool automates the process of scraping emails from LinkedIn, verifying them, and automating outreach. This saves time and boosts efficiency, allowing you to reach out to potential clients with ease.",
      "We ensure that the emails are verified before being used in outreach campaigns, maintaining a high deliverability rate and protecting your sender reputation. Our system uses advanced algorithms to personalize each message, increasing response rates.",
      "The platform includes campaign analytics, A/B testing capabilities, and integration with popular CRM systems, helping you track and optimize your outreach efforts for maximum ROI."
    ]
  },
  "custom-solutions": {
    title: "Custom AI Solutions",
    icon: Sparkles,
    content: [
      "Our custom AI solutions are designed to meet the specific needs of your business. Whether it's creating a tailored chatbot or setting up a personalized email outreach campaign, we provide comprehensive solutions to help you succeed in the digital space.",
      "We work closely with your team to understand your unique challenges and develop AI-powered solutions that address them effectively. Our expertise spans natural language processing, computer vision, and predictive analytics.",
      "Each solution is built with scalability in mind, ensuring it can grow with your business. We provide ongoing support and maintenance to keep your AI systems performing at their best."
    ]
  }
};

export default function Service() {
  const { id } = useParams();
  const service = services[id as keyof typeof services];
  const Icon = service?.icon;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          {Icon && <Icon className="w-10 h-10 text-primary" />}
          <h1 className="text-4xl font-bold text-neutral-50">{service.title}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {service.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-neutral-300">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <GlareCard className="flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-semibold text-neutral-50 mb-3">Quick Setup</h3>
                <p className="text-neutral-400 text-center">Get started in minutes with our streamlined onboarding process</p>
              </GlareCard>
              <GlareCard className="flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-semibold text-neutral-50 mb-3">24/7 Support</h3>
                <p className="text-neutral-400 text-center">Our team is always available to help you succeed</p>
              </GlareCard>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-neutral-50">Get in Touch</h2>
            <ContactForm service={id} />
          </div>
        </div>
      </div>
    </div>
  );
}