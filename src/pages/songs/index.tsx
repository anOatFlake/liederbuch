import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllSongIds } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import AddToRepButton from "../../components/buttons/addToRepButton";

const Songs: NextPage = ({ songs }: any) => {
  const router = useRouter();
  const { letter } = router.query;

  const songList = letter
    ? letter !== "0-9"
      ? songs.filter((songName: string) => {
          return songName.startsWith(letter.toString());
        })
      : songs.filter((songName: string) => {
          return /^\d/.test(songName) || /^\W/.test(songName);
        })
    : songs;

  return (
    <>
      <Head>
        <title>Liederbuchliste</title>
        <meta name="description" content="List of all songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <div className="mx-auto max-w-sm pl-2 pt-16 md:container md:pl-4 md:pt-4">
          <ul>
            {songList.map((song: string, index: number) => (
              <li
                key={index}
                className="pb-1 pl-2 underline-offset-4 hover:underline"
              >
                <Link href={`/songs/${encodeURIComponent(song)}`}>
                  {cleanUpTitle(song)}
                </Link>
                <AddToRepButton id={song} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
export default Songs;

export const getStaticProps: GetStaticProps = async () => {
  const songs = await getAllSongIds();
  return {
    props: {
      songs,
    },
  };
};
