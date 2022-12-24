import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const AddToRepButton: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: isInReporoire } = trpc.repertoire.isSongInRepertoire.useQuery('bayernland')

  //if logged in
  return sessionData ? (
    !isInReporoire ? (
      //TODO: Button styling
      <button className="bg-cyan-700 rounded-full inline-block w-6 h-6" onClick={() => console.log("ADDED TO REP")}>
        +
      </button>
    ) : (
      <button className="bg-teal-700 rounded-full inline-block w-6 h-6" onClick={() => console.log("REMOVED FROM REP")}>
        -
      </button>
    )
  ) : (
    <></>
  );
};

export default AddToRepButton;
