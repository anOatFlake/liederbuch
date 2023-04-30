import Head from "next/head";
import SideBar from "../../components_old/sidebar";
import { trpc } from "../../utils/trpc";

// Statemanagement via Zustand https://github.com/pmndrs/zustand

const CurrentSong = (songData: any) => {
  //useRouter ??? --> params instead of paths
  const { data: repertoireData } =
    trpc.repertoire.getRepertoireViaInviteCode.useQuery("test");

  return <></>;
};

export default CurrentSong;
