import { AuthWrapper } from "@/src/components/auth/auth-wrapper";
import { SignIn } from "@/src/components/auth/sign-in/sign-in";

const SignInPage = () => {
  return (
    <AuthWrapper
      description="Access your dashboard, 
manage receipts,
and track your 
commodities in real time."
      form={<SignIn />}
    />
  );
};

export default SignInPage;
