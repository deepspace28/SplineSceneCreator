import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { SiOpenai } from "react-icons/si";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <SiOpenai className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-neutral-50">SmartBotX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/" ? "text-primary" : "text-neutral-400"
              )}
            >
              Home
            </Link>
            <Link 
              href="/service/chatbots" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.startsWith("/service") ? "text-primary" : "text-neutral-400"
              )}
            >
              Services
            </Link>
            <Link 
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/contact" ? "text-primary" : "text-neutral-400"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black/90 border-neutral-800">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/" 
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    location === "/" ? "text-primary" : "text-neutral-400"
                  )}
                >
                  Home
                </Link>
                <Link 
                  href="/service/chatbots" 
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    location.startsWith("/service") ? "text-primary" : "text-neutral-400"
                  )}
                >
                  Services
                </Link>
                <Link 
                  href="/contact"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    location === "/contact" ? "text-primary" : "text-neutral-400"
                  )}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}