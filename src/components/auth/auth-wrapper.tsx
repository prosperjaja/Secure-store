import Image from "next/image";
import React from "react";
import { WhiteLogo } from "../shared/icons";

interface AuthWrapperProps {
  description: string;
  form: React.ReactNode;
}

export const AuthWrapper = ({ description, form }: AuthWrapperProps) => {
  return (
    <div className="flex items-center h-[100dvh] overflow-auto w-full">
      <section className="flex items-center justify-center bg-white flex-1 h-full overflow-auto">
        {form}
      </section>
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(37, 99, 235, 0.2)), url("/auth-bg-main.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flex: 1,
          height: "100%",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(50px, 3vw,100px)",
          display: "flex",
          flexDirection: "column",
          gap: 100,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="/auth-bg-top.png"
          alt="auth-bg-main"
          width={700}
          height={700}
          className="absolute top-0 left-0 z-10"
        />
        <Image
          src="/auth-bg-bottom.png"
          alt="auth-bg-main"
          width={700}
          height={700}
          className="absolute bottom-0 right-0 z-10"
        />
        <div />
        <h3 className="text-white font-bold text-center text-[26px] max-w-[400px]">
          {description}
        </h3>
        <WhiteLogo />
      </section>
    </div>
  );
};
