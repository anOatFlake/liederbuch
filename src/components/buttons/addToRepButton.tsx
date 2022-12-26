import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const AddToRepButton: React.FC<{id: string}> = ({id}) => {
  const { data: sessionData } = useSession();

  const { data: isInReporoire } = trpc.repertoire.isSongInRepertoire.useQuery(id)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { addMutation } = trpc.repertoire.addSongToRepertoire.useMutation()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { removeMutation } = trpc.repertoire.removeSongFromRepertoire.useMutation()

  //if logged in
  return sessionData ? (
    !isInReporoire ? (
      //TODO: Button styling
      <button className="bg-cyan-700 rounded-full inline-block w-6 h-6" onClick={() => addMutation(id)}>
        +
      </button>
    ) : (
      <button className="bg-teal-700 rounded-full inline-block w-6 h-6" onClick={() => removeMutation(id)}>
        -
      </button>
    )
  ) : (
    <></>
  );
};

export default AddToRepButton;
