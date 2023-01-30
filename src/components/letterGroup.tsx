import { getSongsByLetter } from "../utils/songtitle";
import SongListElement from "./songListElement";

const LetterGroup: React.FC<{ letter: string; hidden: boolean }> = ({
  letter,
  hidden,
}) => {
  const songs = getSongsByLetter(letter);
  return hidden ? (
    <></>
  ) : (
    <div>
      <div className="font-serif text-3xl text-teal-500/50">{letter}</div>
      <ul>
        {songs.length === 0 ? (
          <li className="flex flex-row items-start pl-4 text-sm">
            Kein Lied vorhanden
          </li>
        ) : (
          songs.map((song: string, index: number) => (
            <li
              key={index}
              className="container flex flex-row items-start pl-4 underline-offset-4 hover:underline"
            >
              <SongListElement id={song} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default LetterGroup;
