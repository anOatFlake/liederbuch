import fs from "fs";
import path from "path";
import { LETTERS, Letter } from "../data/letters";
import { ALL_SONGS } from "../data/songIds";

const songsDirectory = path.join(process.cwd(), "src", "songs");

/**
 * Gets all song names (aka filenames) from the songsDirectory
 * @returns string array
 */
export function getAllSongIds__old(): Array<string> {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName: string) => {
    return fileName.replace(/\.html$/, "");
  });
}
export function getAllSongIds(): Array<string> {
  return ALL_SONGS;
}

/**
 * Gets all song paths (aka filenames) from the songsDirectory
 * needed for [id].getStaticPaths()
 * @returns object array with { params: { id: string } }
 */
export function getAllSongPaths__old(): Array<{
  params: { [key: string]: string };
}> {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.html$/, ""),
      },
    };
  });
}
export function getAllSongPaths(): Array<{
  params: { [key: string]: string };
}> {
  return ALL_SONGS.map((fileName: string) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}
export function getAllLetterPaths(): Array<{
  params: { [key: string]: string };
}> {
  return LETTERS.map((l: string) => {
    return {
      params: {
        letter: l,
      },
    };
  });
}

/**
 * Gets the songData from the id and transforms the fileContents to html
 * @param id string | string[] | undefined
 * @returns songdata object { id, contentHtml }
 */
export async function getSongData(id: string | string[] | undefined) {
  const fullPath = path.join(songsDirectory, `${id}.html`);
  const contentHtml = fs.readFileSync(fullPath, `utf-8`);
  return {
    id,
    contentHtml,
  };
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
