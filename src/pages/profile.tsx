import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import SideBar from "../components/sidebar";
import { trpc } from "../utils/trpc";
import { repertoireAsArray } from "../utils/repertoire";
import { useEffect, useState } from "react";
import SongListElement from "../components/songListElement";
import Image from "next/image";
import ProfileCard from "../components/profileCard";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: userData } = trpc.users.getUser.useQuery();
  const { data: repData } = trpc.users.getRepertoire.useQuery();

  const [songs, setSongs] = useState(repertoireAsArray(repData?.songs));

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [songs]);

  console.log(songs);

  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="profile" content="Profile of the logged in user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <main>
        <div className="px-6 pt-16 md:pl-4 md:pt-4">
          <ProfileCard
            uname={userData?.name}
            email={userData?.email}
            image={userData?.image}
            inviteCode={repData?.inviteCode}
          />
        </div>
        <div className="pl-2 pt-16 md:pl-4 md:pt-4">
          <div>
            <span>Repertoire</span>
          </div>
          <div>
            <span className="">inviteCode: </span>
            <span className="">{repData?.inviteCode}</span>
          </div>
          <div>
            List with rep songs -- Filter???
            <div className="mx-auto max-w-sm pl-2 pt-16 md:container md:pl-8 md:pt-4">
              <ul>
                {repertoireAsArray(repData?.songs)?.map(
                  (song: string, index: number) => (
                    <li
                      key={index}
                      className="flex flex-row items-start pb-1 pl-2 underline-offset-4 hover:underline"
                    >
                      <SongListElement id={song} />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
