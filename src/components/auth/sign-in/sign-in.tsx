"use client";

import Link from "next/link";
import { Button } from "../../ui/mantine/button";
import { Checkbox } from "../../ui/mantine/checkbox";
import { PasswordInput } from "../../ui/mantine/password-input";
import { TextInput } from "../../ui/mantine/TextInput";
import { GoogleIcon } from "../../shared/icons";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-6 p-[clamp(1.5rem,3vw,3rem)] max-lg:w-[90%] w-[70%] mx-auto">
      <h3 className="text-[#162964] text-[clamp(1.5rem,3vw,3rem)] text-center leading-[100%] font-bold">
        Welcome Back!
      </h3>
      <form action="" className="flex flex-col gap-4">
        <TextInput variant="secondary" placeholder="Email" className="w-full" />
        <PasswordInput
          variant="secondary"
          placeholder="Password"
          className="w-full"
        />
        <Button
          className="w-full"
          variant="primary"
          size="md"
          onClick={() => push("/dashboard")}
        >
          Sign In
        </Button>
        <div className="flex items-center justify-between gap-4">
          <Checkbox
            label={
              <span className="text-[#0B1532] text-[12px]">Remember me</span>
            }
            size="xs"
            styles={{
              root: { marginLeft: 10 },
            }}
          />
          <Link
            href="/forgot-password"
            className="text-[#000] font-medium text-[12px]"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          leftSection={<GoogleIcon />}
          className="w-full"
          variant="outline"
          size="md"
        >
          Sign Up with Google
        </Button>
        <p className="text-[#162964] text-[14px] text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#000] font-medium">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
