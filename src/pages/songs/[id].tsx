import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
} from "next";
import { getAllSongPaths, getSongData } from "../../utils/song";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import SongMenu from "../../components/songMenu";
import { cleanUpTitle } from "../../utils/songtitle";

const Song: NextPage = ({ songData }: any) => {
  return (
    <>
      <Head>
        <title>{cleanUpTitle(songData.id)}</title>
        <meta
          name="description"
          content="Songtext for the song {songData.id}"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <SongMenu id={songData.id} />
        <div
          className="pt-14 md:pl-2 md:pt-4"
          dangerouslySetInnerHTML={{ __html: songData.contentHtml }}
        />
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
