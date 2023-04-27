import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NextLink from "next/link";
// 1. import `SaasProvider` component
import { SaasProvider } from "@saas-ui/react";

const inter = Inter({ subsets: ["latin"] });

// const Link = (props) => {
//   return <NextLink {...props} legacyBehavior />;
// };
export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    // <SaasProvider linkComponent={Link}>
    <SaasProvider >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SaasProvider>
  );
}
