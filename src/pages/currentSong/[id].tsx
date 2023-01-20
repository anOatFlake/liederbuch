import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: repData } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(
    id as string
  );
  return (
    <>
      <SideBar />
      <main>
        <div>Songs: {repData?.currentSong}</div>
        {repData?.currentSong ? (
          <div
            className="pt-14 md:pl-2 md:pt-4"
            dangerouslySetInnerHTML={{ __html: repData.currentSong! }}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Current;
