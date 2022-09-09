import { GetStaticPaths, GetStaticProps, NextPage, GetStaticPropsContext } from "next";
import { getAllSongIds, getSongData } from "../components/songs";
import Head from 'next/head';

const Song: NextPage = () => {
    return (
        <>
            <Head>
                <title></title>
                <meta name="" content=""></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export default Song;

export const getStaticPaths: GetStaticPaths = async => {
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