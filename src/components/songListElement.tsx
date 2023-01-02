import Link from "next/link";
import AddToRepButton from "./buttons/addToRepButton";
import { cleanUpTitle } from "../utils/title-transformer";

const SongListElement: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <span className="max-w-md grow text-sm">
        <Link href={`/songs/${encodeURIComponent(id)}`}>
          {cleanUpTitle(id)}
        </Link>
      </span>
      <span className="flex-none px-4 :pr-10">
        <AddToRepButton id={id} />
      </span>
    </div>
  );
};
export default SongListElement;
