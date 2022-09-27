import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { getAllSongIds } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";
import { createContext, useContext, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

const Songs: NextPage = ({ songs }: any) => {
  const [songList, setSongList] = useState(songs);
  const SongContext = createContext(songs);

  const ButtonList = () => {
    const letters = [
      "0-9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const songs = useContext(SongContext);

    return (
      <div className="flex justify-around">
        {letters.map((letter: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              letter !== "0-9"
                ? setSongList(
                    songs.filter((songName: string) => {
                      return songName.startsWith(letter);
                    })
                  )
                : setSongList(
                    songs.filter((songName: string) => {
                      return /^\d/.test(songName) || /^\W/.test(songName);
                    })
                  );
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Liederbuchliste</title>
        <meta name="description" content="List of all songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        <SongContext.Provider value={songs}>
          <div className="mx-auto max-w-sm md:container">
            <ButtonList />
            <ul>
              {songList.map((song: string, index: number) => (
                <li key={index} className="pb-1 pl-2">
                  <Link href={`/songs/${encodeURIComponent(song)}`}>
                    <a>{cleanUpTitle(song)}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SongContext.Provider>
      </main>
      <Footer />
    </>
  );
};
export default Songs;

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const songs = await getAllSongIds();
  return {
    props: {
      songs,
    },
  };
};
