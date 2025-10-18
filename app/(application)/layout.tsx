import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

export default async function Layout({ children }: LayoutProps) {
  return children;
}
