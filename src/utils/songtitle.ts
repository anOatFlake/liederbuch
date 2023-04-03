import { Letter } from "../data/letters";
import { ALL_SONGS } from "../data/songIds";

/**
 * turns the ANSI strings into the German titles
 * @param id string
 * @returns string
 */
export function cleanUpTitle(id: string): string {
  return containsWhiteListedWord(id)
    ? id.replaceAll("_", " ")
    : replaceSharpS(id)
        .replaceAll("_", " ")
        .replaceAll("ae", "ä")
        .replaceAll("oe", "ö")
        .replaceAll("ue", "ü")
        .replaceAll("Ae", "Ä")
        .replaceAll("Oe", "Ö")
        .replaceAll("Ue", "Ü");
}

/**
 * this function determits if the title contains a whitelisted word
 * @param id string
 * @returns boolean
 */
export function containsWhiteListedWord(id: string) {
  return (
    id.includes("Blue") ||
    id.includes("pueblo") ||
    id.includes("Feuer") ||
    id.includes("Bauer")
  );
}

/**
 * swapps German words that are not written a "ss" with the right version, that includes the "ß"
 * @param id string
 * @returns string
 */
function replaceSharpS(id: string): string {
  return id
    .replaceAll("gross", "groß")
    .replaceAll("Strassen", "Straßen")
    .replaceAll("Scheisse", "Scheiße");
}

/**
 * returns all songs that start with a certain letter or with any number
 * @param letter
 * @returns
 */
export function getSongsByLetter(letter: string): string[] {
  return letter !== "0-9"
    ? ALL_SONGS.filter((songName: string) => {
        return songName.startsWith(letter.toString());
      })
    : ALL_SONGS.filter((songName: string) => {
        return /^\d/.test(songName) || /^\W/.test(songName);
      });
}

/**
 * This helper functions determins if a letter has no songs
 * @param letter
 */
export function hasSongs(letter: Letter): boolean {
  if (letter === "0-9") {
    return ALL_SONGS.filter(
      (song) =>
        song[0] === "0" ||
        song[0] === "1" ||
        song[0] === "2" ||
        song[0] === "3" ||
        song[0] === "4" ||
        song[0] === "5" ||
        song[0] === "6" ||
        song[0] === "7" ||
        song[0] === "8" ||
        song[0] === "9"
    )
      ? true
      : false;
  }
  return ALL_SONGS.filter((song) => song.startsWith(letter)) ? true : false;
}
