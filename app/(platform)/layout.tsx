import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayour = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider afterSignOutUrl="/">{children}</ClerkProvider>;
};

export default PlatformLayour;
