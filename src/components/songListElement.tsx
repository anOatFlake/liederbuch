import Link from "next/link";
import AddToRepButton from "./buttons/addToRepButton";
import { cleanUpTitle } from "../utils/songtitle";

const SongListElement: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="container flex flex-row flex-nowrap pr-12">
      <div className="grow  text-sm">
        <Link href={`/songs/${encodeURIComponent(id)}`}>
          {cleanUpTitle(id)}
        </Link>
      </div>
      <div className=":pr-10 flex-none px-4">
        <AddToRepButton id={id} />
      </div>
    </div>
  );
};
export default SongListElement;
