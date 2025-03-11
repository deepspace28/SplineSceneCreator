import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow bg-black/[0.96] border-neutral-800">
      <CardHeader>
        <CardTitle className="text-xl text-neutral-50">{title}</CardTitle>
        <CardDescription className="text-neutral-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href}>
          <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20">Learn More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}