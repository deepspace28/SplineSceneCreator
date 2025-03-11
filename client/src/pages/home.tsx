import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center bg-black/[0.96] overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Revolutionize Your Business with AI Automation
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              Custom AI solutions to enhance your customer support and interactions.
            </p>
            <a href="#services" className="mt-8 inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Features
              </Button>
            </a>
          </div>
          <div className="h-[400px] relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/[0.96]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-50">Our Services</h2>
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