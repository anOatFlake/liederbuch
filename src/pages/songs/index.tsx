import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { getAllSongIds, getSongData } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";

const Songs: NextPage = ({songs}: any) => { 
    return (
        <>
        <h1>Liste</h1>
        
        <div>
            <button >A</button>
            <button >B</button>
            <button >C</button>
            <button >D</button>
            <button >E</button>
            <button >F</button>
            <button >G</button>
            <button >H</button>
            <button >I</button>
            <button >J</button>
            <button >K</button>
            <button >L</button>
            <button >M</button>
            <button >N</button>
            <button >O</button>
            <button >P</button>
            <button >Q</button>
            <button >R</button>
            <button >S</button>
            <button >T</button>
            <button >U</button>
            <button >V</button>
            <button >W</button>
            <button >X</button>
            <button >Y</button>
            <button >Z</button>
            <button >0-9</button>
        </div>

        <ul>
            {songs.map((song: { params: {id: string}}) => (
                <li>
                <Link href={`/songs/${encodeURIComponent(song.params.id)}`}>
                    <a>{cleanUpTitle(song.params.id)}</a>
                </Link>
                </li>
            ))}
            </ul>
        </>
    )
}
export default Songs;

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
    const songs = await getAllSongIds();
    return {
        props: {
            songs
        }
    }
}