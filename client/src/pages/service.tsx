import { useParams } from "wouter";
import { GlareCard } from "@/components/ui/glare-card";
import { ServiceDemo } from "@/components/ui/service-demo";
import ContactForm from "@/components/contact-form";
import { Bot, Target, Sparkles } from "lucide-react";

const services = {
  "customer-engagement": {
    title: "Enterprise Customer Engagement Suite",
    icon: Bot,
    demoTitle: "AI-Powered Customer Support",
    demoDescription: "Watch our AI system handle complex customer inquiries in real-time, demonstrating natural language understanding and seamless CRM integration.",
    demoScene: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
    content: [
      "Are you struggling with overwhelming customer service demands and rising operational costs? Our Enterprise Customer Engagement Suite leverages advanced AI to handle unlimited customer inquiries 24/7, reducing response times by 85% and cutting operational costs by up to 60%.",
      "Traditional customer service solutions can't scale without massive hiring sprees. Our AI-powered platform adapts to your growing needs instantly, handling everything from simple FAQs to complex support tickets with human-like understanding and precision.",
      "Unlike basic chatbots that frustrate customers with rigid responses, our solution uses advanced natural language processing to understand context, sentiment, and intent. Features include seamless CRM integration, multi-language support, and intelligent human handoff, ensuring your customers always receive exceptional service."
    ]
  },
  "revenue-acceleration": {
    title: "Revenue Acceleration Platform",
    icon: Target,
    demoTitle: "Intelligent Lead Generation",
    demoDescription: "Experience how our AI identifies and qualifies high-value leads in real-time, automating personalized outreach at scale.",
    demoScene: "https://prod.spline.design/6YHGjG8Kd9XnM2Ws/scene.splinecode",
    content: [
      "Is your sales team wasting precious time on manual lead research and outreach? Our Revenue Acceleration Platform automates the entire lead generation process, from identification to qualification, helping businesses achieve 300% more qualified leads while reducing prospecting time by 70%.",
      "Stop losing deals to competitors due to slow follow-ups. Our AI-powered system ensures instant lead engagement with personalized messages, maintaining a 98% email deliverability rate and increasing response rates by 40% compared to traditional methods.",
      "Unlike generic marketing tools, our platform uses advanced algorithms to identify high-intent prospects, qualify leads in real-time, and automate personalized follow-ups. With built-in A/B testing and analytics, you can continuously optimize your outreach for maximum ROI."
    ]
  },
  "enterprise-ai": {
    title: "Enterprise AI Solutions",
    icon: Sparkles,
    demoTitle: "Custom AI Integration",
    demoDescription: "See how our custom AI solutions seamlessly integrate with your existing workflows, automating complex processes and delivering real-time insights.",
    demoScene: "https://prod.spline.design/nj-87KRvbFZyHBWN/scene.splinecode",
    content: [
      "Are your competitors gaining an edge with AI while you're stuck with outdated processes? Our Enterprise AI Solutions transform your business operations with custom-built AI systems that automate complex workflows, reduce errors by 95%, and accelerate decision-making by 75%.",
      "Generic software solutions can't address your unique business challenges. Our team works closely with you to develop tailor-made AI solutions that integrate seamlessly with your existing systems, ensuring maximum efficiency and ROI.",
      "From predictive analytics to computer vision systems, we build scalable solutions that grow with your business. Our enterprise-grade AI platforms include comprehensive training, 24/7 support, and regular updates to keep you ahead of the competition."
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

        {/* Interactive Demo Section */}
        <div className="mb-16">
          <ServiceDemo
            title={service.demoTitle}
            description={service.demoDescription}
            scene={service.demoScene}
          />
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
                <h3 className="text-xl font-semibold text-neutral-50 mb-3">Enterprise-Ready</h3>
                <p className="text-neutral-400 text-center">Built for scale with bank-grade security and 99.9% uptime</p>
              </GlareCard>
              <GlareCard className="flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-semibold text-neutral-50 mb-3">24/7 Support</h3>
                <p className="text-neutral-400 text-center">Dedicated enterprise support team and comprehensive training</p>
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