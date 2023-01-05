import Head from "next/head";
import SideBar from "../../components/sidebar";

// Statemanagement via Zustand https://github.com/pmndrs/zustand

const CurrentSong = (songData: any) => {
  const loggedIn = true; // TODO: Login request

  return !loggedIn ? (
    <></>
  ) : (
    <>
      <Head>
        <title>{songData.id}</title>
        <meta
          name="description"
          content="Songtext for the song {songData.id}"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <div
          className="pt-14 md:pl-2 md:pt-4"
          dangerouslySetInnerHTML={{ __html: songData.contentHtml }}
        />
      </main>
    </>
  );
};

export default CurrentSong;
