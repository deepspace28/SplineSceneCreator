import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            SmartBotX
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link 
              href="/service/chatbots" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.startsWith("/service") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Services
            </Link>
            <Link 
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
