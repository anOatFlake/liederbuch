import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { isSongInRepertoire } from "../../utils/repertoire";
import { useEffect, useState } from "react";

const AddToRepButton: React.FC<{ id: string }> = ({ id }) => {
  const { data: sessionData } = useSession();

  const { data: songData } = trpc.users.getSongs.useQuery();
  const [isInReperoire, setIsInRepertoire] = useState(
    isSongInRepertoire(id, songData)
  );
  useEffect(() => {}, [isInReperoire]);

  const addSong = trpc.repertoire.addSongToRepertoire.useMutation();
  const removeSong = trpc.repertoire.removeSongFromRepertoire.useMutation();

  return sessionData ? (
    !isInReperoire ? (
      //TODO: Button styling --> Icons https://github.com/Templarian/MaterialDesign or https://github.com/feathericons/feather
      <button
        className="inline-block h-6 w-6 rounded-full border-2 bg-teal-400 hover:border-teal-600 dark:border-slate-900 dark:bg-teal-900"
        onClick={() => {
          addSong.mutate(id);
          setIsInRepertoire(true);
        }}
      >
        +
      </button>
    ) : (
      <button
        className="inline-block h-6 w-6 rounded-full border-2 bg-red-300 hover:border-red-500 dark:border-slate-900 dark:bg-red-900"
        onClick={() => {
          removeSong.mutate(id);
          setIsInRepertoire(false);
        }}
      >
        -
      </button>
    )
  ) : (
    <></>
  );
};

export default AddToRepButton;
