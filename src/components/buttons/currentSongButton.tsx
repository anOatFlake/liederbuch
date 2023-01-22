import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const CurrentSongButton: React.FC<{ id: string }> = ({ id }) => {
  const { data: sessionData } = useSession();
  const selectCurrentSong = trpc.repertoire.setCurrentSong.useMutation({
    onSuccess: () => {
      //send serverside event for new song id
      
    }
  });

  //if logged in
  return sessionData ? (
    <button
      className="inline-block h-7 w-7 rounded-full border-2 bg-teal-400 p-1 hover:border-teal-600 dark:border-slate-900 dark:bg-teal-900"
      onClick={() => {
        selectCurrentSong.mutate(id);
      }}
    >
      Play now
    </button>
  ) : (
    <></>
  );
};

export default CurrentSongButton;
