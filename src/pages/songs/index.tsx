import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { getAllSongIds, getSongData } from "../../utils/song";
import { cleanUpTitle } from "../../utils/title-transformer";

const Songs: NextPage = ({songs}: any) => { 
    return (
        <>
        <h1>Liste</h1>
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