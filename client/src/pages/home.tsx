import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";
import ServiceCard from "@/components/service-card";
import { Bot, Users, Zap, Star, CheckCircle } from "lucide-react";

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

      {/* Features Section */}
      <section className="py-20 bg-black/[0.96] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-50">Why Choose SmartBotX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <Bot className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Advanced AI</h3>
              <p className="text-neutral-400 text-center">
                State-of-the-art language models for natural conversations
              </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Lightning Fast</h3>
              <p className="text-neutral-400 text-center">
                Instant responses and real-time processing capabilities
              </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Scalable</h3>
              <p className="text-neutral-400 text-center">
                Grows with your business needs and user base
              </p>
            </GlareCard>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-bottom-40 right-0 md:right-60 md:-bottom-20"
          fill="white"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-50">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="SmartBotX transformed our customer service operations. The AI chatbot handles 70% of inquiries automatically."
              author="Sarah Johnson"
              role="Customer Success Manager"
              company="TechCorp"
            />
            <TestimonialCard
              quote="The lead generation tool helped us increase our qualified leads by 300% in just two months."
              author="Michael Chen"
              role="Sales Director"
              company="GrowthMasters"
            />
            <TestimonialCard
              quote="Their custom AI solution perfectly addressed our unique needs. The team's expertise is unmatched."
              author="Emily Rodriguez"
              role="Operations Director"
              company="InnovateAI"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using SmartBotX to automate their operations and improve customer experience.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }: { quote: string, author: string, role: string, company: string }) {
  return (
    <GlareCard className="flex flex-col justify-between p-6">
      <div>
        <Star className="w-8 h-8 text-primary mb-4" />
        <p className="text-neutral-300 mb-6">{quote}</p>
      </div>
      <div>
        <p className="font-semibold text-neutral-50">{author}</p>
        <p className="text-sm text-neutral-400">{role}</p>
        <p className="text-sm text-neutral-400">{company}</p>
      </div>
    </GlareCard>
  );
}