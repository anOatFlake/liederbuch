import type { GetServerSideProps, NextPage } from "next";
import SideBar from "../../components_old/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const apiPath = ("api/sse/" + id) as string;
  //const evtSource = new EventSource(apiPath);

  const { data: repData } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(
    id as string
  );

  return (
    <>
      <SideBar />
      <main>
        <div>Songs: {repData?.currentSong}</div>
      </main>
    </>
  );
};

export default Current;

//TODO!
export const getServerSideProps = async () => {
  return { props: {} };
};

//Thoughts
//EventSource --> subscribes to target --> Question houy do you implement the target
//getServerSideProps --> BACKEND CODE fetch in interval??? idk fetch triggred after successful mutation????
