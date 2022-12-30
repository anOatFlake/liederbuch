import Head from "next/head";
import SideBar from "../components/sidebar";

const CurrentSong = () => {
  const loggedIn = true; // TODO: Login request

  return (
    !loggedIn ? (
      <>
      </>
    ) :
      (
      <>
      <Head>
        <title>{}</title>
        <meta
          name="description"
          content="Songtext for the song {songData.id}"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
       
      </main>
      </>
      )
  );
};

export default CurrentSong;
