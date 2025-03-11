import { useEffect } from "react";
import { Application } from "@splinetool/runtime";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("spline-canvas") as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/your-scene-id/scene.splinecode");
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Revolutionize Your Business with AI Automation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Custom AI solutions to enhance your customer support and interactions.
            </p>
            <a href="#services" className="mt-8 inline-block">
              <Button size="lg">Explore Features</Button>
            </a>
          </div>
          <div className="h-[400px]">
            <canvas id="spline-canvas" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Chatbots"
              description="Automate customer support with tailored AI chatbots that integrate with your CRM tools."
              href="/service/chatbots"
            />
            <ServiceCard
              title="Lead Generation"
              description="Effortlessly capture and verify leads with our automated LinkedIn email scraping and outreach tools."
              href="/service/lead-generation"
            />
            <ServiceCard
              title="Custom AI Solutions"
              description="Create fully customized AI solutions to suit your business needs, from chatbot interactions to email campaigns."
              href="/service/custom-solutions"
            />
          </div>
        </div>
      </section>
    </div>
  );
}