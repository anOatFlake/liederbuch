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
      {songs.length === 0 ? (
        <span className="flex flex-row items-start pl-4 text-sm">
          Kein Lied vorhanden
        </span>
      ) : (
        songs.map((song: string, index: number) => (
          <div
            key={index}
            className="container flex flex-row items-start pl-4 underline-offset-4 hover:underline"
          >
            <SongListElement id={song} />
          </div>
        ))
      )}
    </div>
  );
};
export default LetterGroup;
