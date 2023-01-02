import { ALL_SONGS } from "../data/songIds";
import SongListElement from "./songListElement";

const LetterGroup: React.FC<{ letter: string }> = ({ letter }) => {
  const songs =   //TODO: in utils auslagern --> basic filter via letter
    letter !== "0-9"
      ? ALL_SONGS.filter((songName: string) => {
          return songName.startsWith(letter.toString());
        })
      : ALL_SONGS.filter((songName: string) => {
          return /^\d/.test(songName) || /^\W/.test(songName);
        });

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
          <span
            key={index}
            className="flex flex-row items-start underline-offset-4 hover:underline pl-4"
          >
            <SongListElement id={song} />
          </span>
        ))}
      </div>
    </>
  );
};
export default LetterGroup;
