import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { trpc } from "../../utils/trpc";
import Image from "next/image";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: userData } = trpc.users.getUser.useQuery();

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
          {userData?.image ? (
            <Image
              className=""
              src={userData?.image}
              alt="Profile Picture"
            ></Image>
          ) : (
            <></>
          )}
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
//TODO: Reportaire

//TODO: styling
//TODO: image
