// try to get own path to make routing performance better

import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import LetterGroup from "../../../components/letterGroup";
import SideBar from "../../../components/sidebar";
import { getAllLetterPaths } from "../../../utils/song";

const SortedSongs: NextPage = ({ letterGroupData }: any) => {
  return (
    <>
      <Head>
        <title>{letterGroupData.letter} - Liederbuchliste</title>
        <meta
          name="description"
          content="List of all songs with the letter {letterGroupData.id}"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <div className="mx-auto max-w-sm pl-2 pt-16 md:container md:pl-8 md:pt-4">
          <div className="grid grid-cols-1 gap-4">
            <LetterGroup letter={letterGroupData ?? "Z"} />
          </div>
        </div>
      </main>
    </>
  );
};

export default SortedSongs;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLetterPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const letterGroupData = params?.letter;
  return {
    props: {
      letterGroupData,
    },
  };
};
