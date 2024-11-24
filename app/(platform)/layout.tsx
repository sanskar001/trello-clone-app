import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayour = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayour;
