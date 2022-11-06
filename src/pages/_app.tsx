// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import SideBar from "../components/sidebar";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <SideBar />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
