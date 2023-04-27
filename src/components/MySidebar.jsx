import React from "react";

/* SaaS UI - SideBar Imports */
import { Sidebar, SidebarSection, NavItem } from "@saas-ui/sidebar";

/* SaaS UI & Chakra UI Imports */
import { Spacer } from "@chakra-ui/react";

export const MySidebar = () => {
  return (
    <>
      <Sidebar breakpoints={{ base: false }} backgroundColor="gray.100">
        <SidebarSection direction="row">
          MySaaS™
          <Spacer />
        </SidebarSection>
        <SidebarSection aria-label="Main " textColor="white">
          <NavItem>Home</NavItem>
          <NavItem>Log</NavItem>
          <NavItem>Analytics</NavItem>
          <NavItem isActive>Settings</NavItem>
        </SidebarSection>
      </Sidebar>
    </>
  );
};
