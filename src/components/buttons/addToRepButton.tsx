import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const AddToRepButton: React.FC = () => {
    const { data: sessionData } = useSession();
  
    const { data: isInReporoire } = trpc.auth.isSongInRepertoire.useQuery(
      undefined, // no input TODO: probably change input
      { enabled: sessionData?.user !== undefined }
    );
  
    //if logged in
    return sessionData ? (
      isInReporoire ? (
        //TODO: Button styling
        <button className="" onClick={() => console.log("ADDED TO REP")}>
          +
        </button>
      ) : (
        <button className="" onClick={() => console.log("REMOVED FROM REP")}>
          x
        </button>
      )
    ) : (
      <></>
    );
  };

export default AddToRepButton;
  