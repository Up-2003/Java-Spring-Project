import SignInForm from "@/app/(auth)/signin/_client/signin-form";
import PageTitle from "@/components/widgets/page-title";
import { Metadata } from "next";
import SignInFormComponent from "../signup/_client/signup-form";
export const metadata = {
  title: "Sign In",
  description: "Home Page of Balance Application",
};
export default function SignInPage() {
  return (
    <section>
      <PageTitle title="Sign In" Icon="LogIn"></PageTitle>
      <SignInFormComponent />
    </section>
  );
}
