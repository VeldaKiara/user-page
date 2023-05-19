import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NextLink from "next/link";
// 1. import `SaasProvider` component
import { SaasProvider } from "@saas-ui/react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
 
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
  <SaasProvider >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>

    </SaasProvider>
    </SessionContextProvider>
  )};