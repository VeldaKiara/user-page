/* React/Next imports */
import Link from "next/link";
/* SaaS UI - SideBar Imports */
import { Sidebar, SidebarSection, NavItem } from "@saas-ui/sidebar";
/* SaaS UI & Chakra UI Imports */
import { Spacer } from "@chakra-ui/react";
/* Saas  UI auth imports */
import { useAuth } from "@saas-ui/react";

export const MySidebar = () => {
  const { logOut } = useAuth();
  return (
    <>
      <Sidebar breakpoints={{ base: false }} backgroundColor="gray.100">
        <SidebarSection direction="row">
          <Link href="/SignUp"> MySaaS™ </Link>
          <Spacer />
        </SidebarSection>
        <SidebarSection aria-label="Main " textColor="white">
          <NavItem href="/"> Home </NavItem>
          <NavItem>Log</NavItem>
          <NavItem>Analytics</NavItem>
          <NavItem isActive>Settings</NavItem>
          <NavItem onClick={() => logOut()}>Sign Out</NavItem>
        </SidebarSection>
      </Sidebar>
    </>
  );
};
