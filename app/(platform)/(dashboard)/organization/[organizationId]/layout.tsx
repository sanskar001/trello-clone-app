import { ReactNode } from "react";
import OrgControl from "./_components/orgControl";

const OrganizationIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
