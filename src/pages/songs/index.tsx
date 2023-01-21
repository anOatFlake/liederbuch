import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { useRouter } from "next/router";
import LetterGroup from "../../components/letterGroup";
import { LETTERS } from "../../data/letters";

const Songs: NextPage = () => {
  const router = useRouter();
  const { letter } = router.query;

  return (
    <>
      <Head>
        <title>Liederbuchliste</title>
        <meta name="description" content="List of all songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>{typeof letter === "string" ? (
              <div className="mx-auto max-w-sm pl-2 pt-16 md:container md:pl-8 md:pt-4">
                <div className="grid grid-cols-1 gap-4">
              
              <LetterGroup letter={letter} />
          </div>
        </div>
            ) : (
              <div className="mx-auto max-w-sm pl-2 pt-16 md:container md:pl-8 md:pt-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
                  
             { LETTERS.map((letter: string, index: number) => (
                <LetterGroup letter={letter} />
              ))}
          </div>
        </div>
            )}
      </main>
    </>
  );
};
export default Songs;
