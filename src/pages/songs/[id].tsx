import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
} from "next";
import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { getAllSongPaths, getSongData } from "../../utils/song";
import Head from "next/head";
import SideBar from "../../components/sidebar";

const Song: NextPage = ({ songData }: any) => {
  return (
    <>
      <Head>
        <title>{songData.id}</title>
        <meta
          name="description"
          content="Songtext for the song {songData.id}"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main className="pl-60">
        <div dangerouslySetInnerHTML={{ __html: songData.contentHtml }} />
        <AddToRepButton />
      </main>
    </>
  );
};

export default Song;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSongPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const songData = await getSongData(params?.id);
  return {
    props: {
      songData,
    },
  };
};

const AddToRepButton: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: isInReporoire } = trpc.auth.isSongInRepertoire.useQuery(
    undefined, // no input TODO: probably change input
    { enabled: sessionData?.user !== undefined }
  );

  //if logged in
  return sessionData ? (
    isInReporoire ? (
      //TODO: Button styling
      <button className="" onClick={() => console.log("ADDED TO REP")}>
        Add to Reportaire
      </button>
    ) : (
      <button className="" onClick={() => console.log("REMOVED FROM REP")}>
        Remove from Reportaire
      </button>
    )
  ) : (
    <></>
  );
};
