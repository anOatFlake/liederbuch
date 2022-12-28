import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

const AddToRepButton: React.FC<{ id: string }> = ({ id }) => {
  const { data: sessionData } = useSession();

  const { data: isInReporoire } = trpc.repertoire.isSongInRepertoire.useQuery(id);

  const addSong = trpc.repertoire.addSongToRepertoire.useMutation();
  const removeSong = trpc.repertoire.removeSongFromRepertoire.useMutation();

  return sessionData ? (
    !isInReporoire ? (
      //TODO: Button styling --> Icons https://github.com/Templarian/MaterialDesign or https://github.com/feathericons/feather
      <button
        className="inline-block h-6 w-6 rounded-full bg-cyan-700"
        onClick={() => {
          addSong.mutate(id);
          //setIsInRepertoire(trpc.repertoire.isSongInRepertoire.useQuery(id));
        }}
      >
        +
      </button>
    ) : (
      <button
        className="inline-block h-6 w-6 rounded-full bg-teal-700"
        onClick={() => {
          removeSong.mutate(id);
          //setIsInRepertoire(trpc.repertoire.isSongInRepertoire.useQuery(id));
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
