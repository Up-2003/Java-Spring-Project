import PageTitle from "@/components/widgets/page-title";
import SignUpFormComponent from "@/app/(auth)/signup/_client/signup-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up",
  description: "Home Page of Balance Application",
};
export default function SignInPage() {
  return (
    <section>
      <PageTitle Icon="UserPlus" title="Sign Up"></PageTitle>
      <SignUpFormComponent />
    </section>
  );
}
