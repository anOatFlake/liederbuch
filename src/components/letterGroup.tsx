import { getSongsByLetter } from "../utils/songtitle";
import SongListElement from "./songListElement";

const LetterGroup: React.FC<{ letter: string }> = ({ letter }) => {
  const songs = getSongsByLetter(letter)
  return (
    <>
      <div>
        <div className="text-3xl font-serif text-teal-500/50">
          {letter}
        </div>
        {songs.length === 0 ? 
        <span className="flex flex-row items-start pl-4 text-sm">Kein Lied vorhanden</span>
        :
        songs.map((song: string, index: number) => (
          <div
            key={index}
            className="container flex flex-row items-start underline-offset-4 hover:underline pl-4"
          >
            <SongListElement id={song} />
          </div>
        ))}
      </div>
    </>
  );
};
export default LetterGroup;
