import { useSession } from "next-auth/react";
import AddToRepButton from "./buttons/addToRepButton";
import CurrentSongButton from "./buttons/currentSongButton";

const SongMenu: React.FC<{ id: string }> = ({ id }) => {
  const { data: sessionData } = useSession();
  // TODO styling va mobile styling
  return sessionData ? (
    <div className="m-4 flex rounded-r-sm border-l-4 border-slate-700 bg-slate-100 p-4 font-semibold dark:bg-slate-800/80">
      <div className="container">
        Zum Repertoire hinzufügen/entfernen:
        <AddToRepButton id={id} />
      </div>
      <div className="container">
        Mit Sängern teilen: (WIP)
        <CurrentSongButton id={id} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SongMenu;
