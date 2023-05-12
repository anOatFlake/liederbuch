import type { GetServerSideProps, NextPage } from "next";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
import { Suspense } from "react";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const apiPath = ("api/song/" + id) as string;
  //const evtSource = new EventSource(apiPath);

  const { data: repData } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(
    id as string
  );

  return (
    <>
      <SideBar />
      <main>
        <Suspense fallback={"LOADING FALLBACK"}>
          <div className="pt-24">Songs: {repData?.currentSong}</div>
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
