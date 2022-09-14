import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllSongIds } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";
import { createContext, useContext, useState } from "react";

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
      "H",
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
      <div>
        {letters.map((letter) => (
          <button
            onClick={() =>
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
                  )
            }
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <SongContext.Provider value={songs}>
        <div>
          <ButtonList />
        </div>

        <ul className="md:container md:mx-auto">
          {songList.map((song: string) => (
            <li>
              <Link href={`/songs/${encodeURIComponent(song)}`}>
                <a>{cleanUpTitle(song)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </SongContext.Provider>
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
