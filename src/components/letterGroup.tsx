import { ALL_SONGS } from "../data/songIds";
import SongListElement from "./songListElement";

const LetterGroup: React.FC<{ letter: string }> = ({ letter }) => {
  const songs =
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
        <div>{letter}</div>
        {songs.map((song: string, index: number) => (
          <span
            key={index}
            className="flex flex-row items-start underline-offset-4 hover:underline"
          >
            <SongListElement id={song} />
          </span>
        ))}
      </div>
    </>
  );
};
export default LetterGroup;
