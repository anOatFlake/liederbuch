import type { GetServerSideProps, NextPage } from "next";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  //const evtSource = new EventSource(apiPath);
  /*
  const { data: repData } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(
    id as string
  );
*/
  const apiPath = "http://localhost:3000/api/song/2_Ringe" as string;
  const { isLoading, isError, data } = useQuery(["songData"], async () =>
    fetch(apiPath).then((res) => res.json())
  );
  return (
    <>
      <SideBar />
      <main>
        <Suspense fallback={"LOADING FALLBACK"}>
          {(isLoading || isError) ?? (
            <div className="pt-24">Songs: {data} </div>
          )}
        </Suspense>
      </main>
    </>
  );
};

export default Current;

//TODO!
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
