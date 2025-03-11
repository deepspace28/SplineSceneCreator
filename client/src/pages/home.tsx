import { useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

export default function Home() {
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("spline-canvas") as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/6PYzX6NV86IvCGZL/scene.splinecode")
        .catch(() => {
          setSplineError(true);
          console.log("Failed to load Spline scene");
        });
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Revolutionize Your Business with AI Automation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Custom AI solutions to enhance your customer support and interactions.
            </p>
            <a href="#services" className="mt-8 inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Features
              </Button>
            </a>
          </div>
          <div className="h-[400px] relative">
            {!splineError ? (
              <canvas id="spline-canvas" className="w-full h-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">Interactive 3D scene loading...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/10">
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