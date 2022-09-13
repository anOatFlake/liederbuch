import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllSongIds } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";
import { useState } from 'react';

const Songs: NextPage = ({ songs }: any) => {
  const [songList, setSongList] = useState(songs)

  const filterSongs = () => {
    setSongList(songs.filter((songName: string) => { return songName.startsWith('A') }));
  }

  return (
    <>
      <h1>Liste</h1>

      <div>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('A') })) }>A</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('B') })) }>B</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('C') })) }>C</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('D') })) }>D</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('E') })) }>E</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('F') })) }>F</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('G') })) }>G</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('H') })) }>H</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('I') })) }>I</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('J') })) }>J</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('K') })) }>K</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('L') })) }>L</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('M') })) }>M</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('N') })) }>N</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('O') })) }>O</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('P') })) }>P</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('Q') })) }>Q</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('R') })) }>R</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('S') })) }>S</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('T') })) }>T</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('U') })) }>U</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('V') })) }>V</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('W') })) }>W</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('X') })) }>X</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('Y') })) }>Y</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return songName.startsWith('Z') })) }>Z</button>
        <button onClick={ () => setSongList(songs.filter((songName: string) => { return (/^\d/.test(songName) || /^\W/.test(songName))})) }>0-9</button>
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
