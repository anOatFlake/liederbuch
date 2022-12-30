import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import SideBar from "../components/sidebar";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import { repertoireAsArray } from "../utils/repertoire";
import { useEffect, useState } from "react";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: userData } = trpc.users.getUser.useQuery();
  const { data: repData } = trpc.users.getRepertoire.useQuery();

  const [ songs, setSongs ] = useState(repertoireAsArray(repData?.songs))
  
  const removeSong = trpc.repertoire.removeSongFromRepertoire.useMutation();

  useEffect(() => {}, [songs])

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
              className="rounded-full h-20 w-20"
              src={userData.image}
              alt="Profile Picture"
              width={200}
              height={200}
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
        <div className="pl-2 pt-16 md:pl-4 md:pt-4">
          <div>
              <span> 
              {sessionData?.user?.name?.trimEnd()}s Repertoire</span>
          </div>
          <div>
              <span>inviteCode: </span>
              {repData?.inviteCode}
          </div>
          <div>
            List with rep songs -- Filter???
          </div>
        </div>
          
      </main>
    </>
  );
};

export default Profile;
