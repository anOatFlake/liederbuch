import { GetStaticPaths, GetStaticProps, NextPage, GetStaticPropsContext } from "next";
import { getAllSongIds, getSongData } from "../../components/songs";
import Head from 'next/head';

const Song: NextPage = ({songData}: any) => {
    return (
        <>
            <Head>
                <title>{songData.id}</title>
                <meta name="{songData.id}" content=""></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: songData.contentHtml }} />
        </>
    )
}

export default Song;

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = getAllSongIds();
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
    const songData = await getSongData(params?.id);
    return {
        props: {
            songData
        }
    }
}