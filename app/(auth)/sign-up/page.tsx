import { SignUp } from "@/src/components/auth/sign-up/sign-up";
import { AuthWrapper } from "@/src/components/auth/auth-wrapper";

const SignUpPage = () => {
  return (
    <AuthWrapper
      description="Join our secure platform
 and simplify
 how you store, trade, and
 finance commodities."
      form={<SignUp />}
    />
  );
};

export default SignUpPage;
