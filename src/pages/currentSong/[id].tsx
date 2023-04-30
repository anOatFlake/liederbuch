import type { GetServerSideProps, NextPage } from "next";
import SideBar from "../../components_old/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
  const { id } = useRouter().query;

  const apiPath =
    "http://localhost:3000/api/song/" +
    trpc.repertoire.getRepertoireViaInviteCode.useQuery(id as string).data
      ?.currentSong;
  const { isLoading, isError, data } = useQuery(["songData"], async () =>
    fetch(apiPath).then((res) => res.json())
  );

  return (
    <>
      <SideBar />
      <main>
        <div
          className="pt-14 md:pl-2 md:pt-4"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </main>
    </>
  );
};

export default Current;

//TODO! better sync
export const getServerSideProps = async () => {
  return { props: {} };
};

//NEW THOUGHTS!
//FETCH DB CURRENT SONG AND THEN PUT THAT IN THE FILE LOADER API (AKA SONG[SONGID])
//checkout uswSWR and this https://vercel.com/guides/loading-static-file-nextjs-api-route

//LOADING SUSPENSE
//https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming

//Thoughts
//EventSource --> subscribes to target --> Question houy do you implement the target
//getServerSideProps --> BACKEND CODE fetch in interval??? idk fetch triggred after successful mutation????
