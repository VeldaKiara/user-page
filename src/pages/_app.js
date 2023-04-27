import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NextLink from "next/link";
import { SaasProvider, LinkProps } from "@saas-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Link = (props) => {
  return <NextLink {...props} legacyBehavior />;
};
export default function App({ Component, pageProps }) {
  return (
    <SaasProvider linkComponent={Link}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SaasProvider>
  );
}
