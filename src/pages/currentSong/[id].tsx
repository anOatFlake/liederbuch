import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { getSongData } from "../../utils/song";
// isr???
// theo link shortener --> vercel middleware

const Current: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    const { data } = trpc.repertoire.getRepertoireViaInviteCode.useQuery(id as string)
    return (
        <>
      <SideBar />
      <main>
                <div>Songs: {data?.songs}</div>
            </main>
        </>
    );
};

export default Current;