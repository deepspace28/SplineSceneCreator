import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";
import ServiceCard from "@/components/service-card";
import { Bot, Users, Zap, Star, CheckCircle, BarChart, Brain, Shield } from "lucide-react";
import { Link } from "wouter";
import { ChatDialog } from "@/components/chat-dialog";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center bg-black/[0.96] overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 md:py-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Revolutionize Your Business with AI Automation
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              Custom AI solutions to enhance your customer support and interactions. Experience the future of business automation with our cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/service/customer-engagement">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Features
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800 group">
                  Schedule Demo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <ChatDialog />
            </div>
          </div>
          <div className="h-[400px] relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black/[0.96]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <GlareCard className="flex flex-col items-center justify-center p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">99%</span>
              <p className="text-xs md:text-sm text-neutral-400 text-center mt-2">Customer Satisfaction</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">500+</span>
              <p className="text-xs md:text-sm text-neutral-400 text-center mt-2">Enterprise Clients</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">24/7</span>
              <p className="text-xs md:text-sm text-neutral-400 text-center mt-2">Support Available</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">50M+</span>
              <p className="text-xs md:text-sm text-neutral-400 text-center mt-2">AI Interactions</p>
            </GlareCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/[0.96]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-50">Enterprise Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Customer Engagement Suite"
              description="Transform your customer support with AI-powered automation that reduces response times by 85% while cutting costs."
              href="/service/customer-engagement"
            />
            <ServiceCard
              title="Revenue Acceleration"
              description="Generate 300% more qualified leads with our AI-powered platform that automates prospecting and follow-ups."
              href="/service/revenue-acceleration"
            />
            <ServiceCard
              title="Enterprise AI Solutions"
              description="Custom AI solutions that automate complex workflows and give you a competitive edge in your industry."
              href="/service/enterprise-ai"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/[0.96]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-50">Why Choose SmartBotX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Advanced AI</h3>
              <p className="text-neutral-400 text-center">
                State-of-the-art language models for natural conversations and intelligent decision-making
              </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Enterprise Security</h3>
              <p className="text-neutral-400 text-center">
                Bank-grade encryption and data protection for peace of mind
              </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6">
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">Analytics</h3>
              <p className="text-neutral-400 text-center">
                Real-time insights and performance metrics to optimize your operations
              </p>
            </GlareCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/[0.96]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-50">Implementation Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <GlareCard className="flex flex-col items-center justify-center p-6 relative">
              <div className="absolute -top-4 left-4 text-6xl font-bold text-primary/10">1</div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-4">Discovery</h3>
              <p className="text-neutral-400 text-center">We analyze your needs and design the perfect solution</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6 relative">
              <div className="absolute -top-4 left-4 text-6xl font-bold text-primary/10">2</div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-4">Setup</h3>
              <p className="text-neutral-400 text-center">Quick implementation with our expert team</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6 relative">
              <div className="absolute -top-4 left-4 text-6xl font-bold text-primary/10">3</div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-4">Training</h3>
              <p className="text-neutral-400 text-center">Comprehensive training for your team</p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center p-6 relative">
              <div className="absolute -top-4 left-4 text-6xl font-bold text-primary/10">4</div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-4">Support</h3>
              <p className="text-neutral-400 text-center">24/7 enterprise support and optimization</p>
            </GlareCard>
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
            Join leading enterprises already using SmartBotX to automate operations and drive growth. Schedule a demo today and see the power of AI in action.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/service/customer-engagement">
              <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                View Solutions
              </Button>
            </Link>
          </div>
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