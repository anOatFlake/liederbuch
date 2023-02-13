import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { isSongInRepertoire } from "../../utils/repertoire";
import { useEffect, useState } from "react";

// TODO: move state setting to input var (loggedin? & inRep?)
const AddToRepButton: React.FC<{ id: string }> = ({ id }) => {
  const { data: sessionData } = useSession();

  const { data: songData } = trpc.users.getSongs.useQuery();
  const [isInReperoire, setIsInRepertoire] = useState(
    isSongInRepertoire(id, songData)
  );

  const addSong = trpc.repertoire.addSongToRepertoire.useMutation();
  const removeSong = trpc.repertoire.removeSongFromRepertoire.useMutation();

  return sessionData ? (
    !isInReperoire ? (
      <button
        id={id}
        className="inline-block h-7 w-7 rounded-full border-2 bg-teal-400 p-1 hover:border-teal-600 dark:border-slate-900 dark:bg-teal-900"
        onClick={() => {
          addSong.mutate(id);
          setIsInRepertoire(true);
        }}
      >
        <img src="/icons/plus.svg" alt="addIcon"></img>
      </button>
    ) : (
      <button
        id={id}
        className="inline-block h-7 w-7 rounded-full border-2 bg-red-300 p-1 hover:border-red-500 dark:border-slate-900 dark:bg-red-900"
        onClick={() => {
          removeSong.mutate(id);
          setIsInRepertoire(false);
        }}
      >
        <img src="/icons/x-mark.svg" alt="removeIcon"></img>
      </button>
    )
  ) : (
    <></>
  );
};

export default AddToRepButton;
