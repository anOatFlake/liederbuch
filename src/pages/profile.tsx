import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import SideBar from "../components/sidebar";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="profile" content="Profile of the logged in user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <div className="pl-2 pt-16 md:pl-4 md:pt-4">
          <div>Placeholder for profile picture</div>
          <div>
            <span>Username: </span>
            {sessionData?.user?.name}
          </div>
          <div>
            <span>Email: </span>
            {sessionData?.user?.email}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;

//TODO: Image - Name
//TODO: mail address
//TODO: Reportaire

//TODO: styling
//TODO: image
