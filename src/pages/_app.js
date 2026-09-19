import Footer from "@/components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont", display: "swap", preload: false });

// Suppress third-party browser-extension attribute hydration mismatch warnings in development (e.g. Bitdefender bis_skin_checked)
if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  console.error = function (...args) {
    const errorMsg = args.map((a) => (typeof a === 'string' ? a : (a?.message || ''))).join(' ');
    if (errorMsg.includes('bis_skin_checked')) {
      return;
    }
    return originalConsoleError.apply(this, args);
  };
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Clean up any legacy service workers and caches from the previous dashboard
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
      if ('caches' in window) {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" href="/favicon.ico?v=2" key="favicon" />
      </Head>


      <main
        className={`${montserrat.className} bg-light dark:bg-dark w-full min-h-screen h-full`}
        suppressHydrationWarning
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}


