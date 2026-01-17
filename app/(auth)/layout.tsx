import { Button } from "@/components/ui/button";
import { HomeIcon, PieChart } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-full bg-blue-100">
        <PieChart className="size-20 text-white"></PieChart>
        <h1>Balance Application</h1>
        <div className="w-1/2" text-center>
          Welcome bak! Ready to check in on your budget
        </div>
        <div>
          <Button variant="secondary" asChild>
            <link href="/">
              <HomeIcon />
            </link>
          </Button>
        </div>
      </div>
      <main className="w-full flex items-center justify-center">
        <section className="w-1/2">{children}</section>
      </main>
    </div>
  );
}
