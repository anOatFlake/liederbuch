import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const Home: NextPage = () => {

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
      <main></main>
    </>
  );
};

export default Home;
