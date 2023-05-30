import "@/styles/globals.css";
import { Inter } from "next/font/google";

// 0. React/NextJS stuff
import NextLink from "next/link";
import { useState, useEffect } from "react";

// 1. import `SaasProvider` component
import { SaasProvider } from "@saas-ui/react";


// 2. Supabase auth - stuff
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

// 3. saas ui - auth stuff
import { AuthProvider } from "@saas-ui/react";
import { createAuthService } from "@saas-ui/auth/services/supabase";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SaasProvider>
      <AuthProvider {...createAuthService(supabaseClient)}>
        {/* <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        > */}
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
        {/* </SessionContextProvider> */}
      </AuthProvider>
    </SaasProvider>
  );
}
