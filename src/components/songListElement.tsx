import Link from "next/link";
import AddToRepButton from "./buttons/addToRepButton";
import { cleanUpTitle } from "../utils/songtitle";

const SongListElement: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="container flex min-w-min flex-row flex-nowrap items-center ">
      <div className="grow text-sm">
        <Link href={`/songs/${encodeURIComponent(id)}`}>
          {cleanUpTitle(id)}
        </Link>
      </div>
      <div className="flex-none px-4">
        <AddToRepButton id={id} />
      </div>
    </div>
  );
};
export default SongListElement;
