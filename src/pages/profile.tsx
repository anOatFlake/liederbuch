import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/sidebar";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="profile" content="Profile of the logged in user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        
      </main>
    </>
  );
};

export default Profile;

// Image - Name
// mail address
// Reportaire
