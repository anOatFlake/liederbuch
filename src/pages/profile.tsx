import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import SideBar from "../components/sidebar";
import { trpc } from "../utils/trpc";
import { repertoireAsArray } from "../utils/repertoire";
import { useEffect, useState } from "react";
import SongListElement from "../components/songListElement";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: userData } = trpc.users.getUser.useQuery();
  const { data: repData } = trpc.users.getRepertoire.useQuery();

  const [songs, setSongs] = useState(repertoireAsArray(repData?.songs));

  const removeSong = trpc.repertoire.removeSongFromRepertoire.useMutation();

  useEffect(() => { }, [songs]);

  console.log(songs)

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
            <img
              className="h-20 w-20 rounded-full"
              src={userData.image}
              alt="Profile Picture"
            ></img>
          ) : (
            <></>
          )}
          <div>
            <span className="">Username: </span>
            <span>{sessionData?.user?.name}</span>
          </div>
          <div>
            <span className="">Email: </span>
            <span className="">{sessionData?.user?.email}</span>
          </div>
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
                {repertoireAsArray(repData?.songs)?.map((song: string, index: number) => (
                  <li
                    key={index}
                    className="flex flex-row items-start pb-1 pl-2 underline-offset-4 hover:underline"
                  >
                    <SongListElement id={song} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
