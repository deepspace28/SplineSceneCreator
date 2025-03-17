
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-16 bg-black/[0.96]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-50">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-neutral-900/50 border-neutral-800">
              <p className="text-neutral-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold text-neutral-100">{testimonial.name}</p>
                  <p className="text-sm text-neutral-400">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    content: "SmartBotX transformed our customer service operations with their AI solution.",
    name: "Sarah Johnson",
    position: "CTO, TechCorp"
  },
  {
    content: "The implementation was smooth and the results were immediate.",
    name: "Mark Chen",
    position: "Operations Director"
  },
  {
    content: "Exceptional support and cutting-edge AI technology.",
    name: "Lisa Rodriguez",
    position: "Customer Success Lead"
  }
];
