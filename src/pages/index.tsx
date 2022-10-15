import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navbar";
import Songs from "./songs";

const Home: NextPage = () => {
  const { data: hello } = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Liederbuch</title>
        <meta
          name="description"
          content="Songtext for the song {songData.id}"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pl-60">
        {!session && (
          <Link href="/api/auth/signin">
            <a>SIGN IN</a>
          </Link>
        )}
        {session && (
          <>
            <div>{hello?.greeting}</div>
            <Link href="api/auth/signout">
              <a>SIGN OUT</a>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
