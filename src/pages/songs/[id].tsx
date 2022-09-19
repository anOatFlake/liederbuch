import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
} from "next";
import { getAllSongPaths, getSongData } from "../../utils/song";
import Head from "next/head";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

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
      <NavBar />
      <main>
        <div dangerouslySetInnerHTML={{ __html: songData.contentHtml }} />
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
