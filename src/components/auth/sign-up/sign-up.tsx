"use client";
import { AllBlueLogo, GoogleIcon } from "../../shared/icons";
import { TextInput } from "../../ui/mantine/TextInput";
import { Button } from "../../ui/mantine/button";
import { Checkbox } from "../../ui/mantine/checkbox";
import Link from "next/link";
import { PasswordInput } from "../../ui/mantine/password-input";

export const SignUp = () => {
  return (
    <div className="flex flex-col gap-6 p-[clamp(1.5rem,3vw,3rem)] max-lg:w-[90%] w-[70%] mx-auto">
      <AllBlueLogo />
      <h3 className="text-[#162964] text-[clamp(1.5rem,3vw,3rem)] text-center leading-[100%] font-bold">
        Create Account
      </h3>
      <form action="" className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full">
          <TextInput
            variant="secondary"
            placeholder="First Name"
            className="flex-1"
          />
          <TextInput
            placeholder="Last Name"
            className="flex-1"
            variant="secondary"
          />
        </div>
        <TextInput variant="secondary" placeholder="Email" className="w-full" />
        <PasswordInput
          variant="secondary"
          placeholder="Password"
          className="w-full"
        />
        <PasswordInput
          variant="secondary"
          placeholder="Confirm Password"
          className="w-full"
        />
        <Button className="w-full" variant="primary" size="md">
          Sign Up
        </Button>
        <Checkbox
          styles={{
            root: { marginLeft: 10 },
          }}
          label={
            <span className="text-[#0B1532] text-[12px]">
              I&apos;ve read and agreed to the{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </span>
          }
          size="xs"
        />
        <Button
          leftSection={<GoogleIcon />}
          className="w-full"
          variant="outline"
          size="md"
        >
          Sign Up with Google
        </Button>
        <p className="text-[#162964] text-[14px] text-center">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#000] font-medium">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
