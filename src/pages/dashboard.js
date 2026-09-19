import { useEffect } from "react";
import Head from "next/head";

export default function DashboardRedirect() {
  useEffect(() => {
    window.location.replace("https://retirementjourney.vercel.app");
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Retirement Simulator...</title>
        <meta httpEquiv="refresh" content="0; url=https://retirementjourney.vercel.app" />
      </Head>
      <div className="flex h-screen w-full items-center justify-center bg-dark text-light">
        <p className="text-lg">Redirecting to Retirement Simulator...</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://retirementjourney.vercel.app',
      permanent: false,
    },
  };
}
