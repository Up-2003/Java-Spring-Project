import { Button } from "@/components/ui/button";
import { LogIn, PieChart, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-blue-100 h-screen flex flex-col items-center justify-center gap-4">
      <PieChart className="size-20" />
      <h1 className="text-3xl font-semibold">Balance Application</h1>
      <div className="w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, itaque
        exercitationem. Odio, est excepturi dignissimos, blanditiis, odit
        molestias repellendus ipsam similique omnis ullam magni unde. Minus
        nobis delectus a. Quod!
      </div>

      <div className="space-x-2">
        <Button asChild>
          <Link href="/signin">
            <LogIn /> Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/signup">
            <UserPlus /> Sign Up
          </Link>
        </Button>
      </div>
    </main>
  );
}
