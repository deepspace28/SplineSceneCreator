
import { cn } from "@/lib/utils";
import Image from 'next/image';

export function Nav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center justify-between p-4", className)}>
      <div className="flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="SmartBotX Logo" 
          className="w-10 h-10"
        />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          SmartBotX
        </span>
      </div>
    </nav>
  );
}
