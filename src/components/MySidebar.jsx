import { useState, useEffect } from "react";
/* SaaS UI - SideBar Imports */
import { Sidebar, SidebarSection, NavItem } from "@saas-ui/sidebar";
/* SaaS UI & Chakra UI Imports */
import { Spacer } from "@chakra-ui/react";
// import SignUp from "@/pages/SignUp";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/router";
export const MySidebar = () => {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data, error } = await supabase.auth.getSession();

  //     if (error) {
  //       console.error("Error fetching session:", error);
  //       // Handle the error
  //     } else {
  //       setSession(data);
  //     }
  //   };

  //   fetchSession();
  // }, []);

  const router = useRouter();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Sign-out error:", error.message);
    } else {
      // Redirect the user to the desired page after successful sign-out
      // router.push("/login"); // Replace with your desired page
      router.reload(); // Replace with your desired page
    }
  };
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
          <NavItem onClick={handleSignOut}>Sign Out</NavItem>
        </SidebarSection>
      </Sidebar>
    </>
  );
};
