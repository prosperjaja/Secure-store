import { ButtonProps, Button as MantineButton } from "@mantine/core";
import { ButtonHTMLAttributes } from "react";

type AppButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: AppButtonProps) => {
  return <MantineButton {...props}>{children}</MantineButton>;
};
