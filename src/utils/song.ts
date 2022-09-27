import fs from "fs";
import path from "path";
import { latexToHtml } from "./latex-transformer";

const songsDirectory = path.join(process.cwd(), "src", "songs");

/**
 * Gets all song names (aka filenames) from the songsDirectory
 * @returns string array
 */
export function getAllSongIds(): Array<string> {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName: string) => {
    return fileName.replace(/\.tex$/, "");
  });
}

/**
 * Gets all song paths (aka filenames) from the songsDirectory
 * needed for [id].getStaticPaths()
 * @returns object array with { params: { id: string } }
 */
export function getAllSongPaths(): Array<{
  params: { [key: string]: string };
}> {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.tex$/, ""),
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
  const fullPath = path.join(songsDirectory, `${id}.tex`);
  const fileContents = fs.readFileSync(fullPath, `utf-8`);
  const contentHtml = latexToHtml(fileContents);
  return {
    id,
    contentHtml,
  };
}
