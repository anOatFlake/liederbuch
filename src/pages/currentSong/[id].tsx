import type { GetServerSideProps, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = async () => {
  const router = useRouter();
  const { id } = router.query;

  const apiPath = 'api/sse/'+ id as string;
  const evtSource = new EventSource(apiPath);

  const { data: repData } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(
    id as string
  );
  let songHTML;
  if (repData?.currentSong){
  songHTML = getSongData(repData.currentSong)
}
  return (
    <>
      <SideBar />
      <main>
        <div>Songs: {repData?.currentSong}</div>
        {(await songHTML)?.contentHtml ? (
          <div
            className="pt-14 md:pl-2 md:pt-4"
            dangerouslySetInnerHTML={{ __html: songHTML.contentHtml }}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Current;

export const getServerSideProps: GetServerSideProps =async (params:GetServerSideProps) => {
  const songData = await getSongData()
  
}

//Thoughts 
//EventSource --> subscribes to target --> Question houy do you implement the target
//getServerSideProps --> BACKEND CODE fetch in interval??? idk fetch triggred after successful mutation????