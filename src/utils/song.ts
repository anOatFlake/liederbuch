import fs from 'fs';
import path from 'path';
import { latexToHtml } from './latex-transformer';

const songsDirectory = path.join(process.cwd(), 'src', 'songs');

/**
 * Gets all song ids (aka filenames) from the songsDirectory
 * @returns object array with { params: { id: string } }
 */
export function getAllSongIds(): Array<{ params: { [key: string]: string } }> {
    const fileNames = fs.readdirSync(songsDirectory);
  
    return fileNames.map((fileName: string) => {
      return {
        params: {
          id: fileName.replace(/\.tex$/, ''),
        },
      }
    })
}

/**
 * Gets all song ids (aka filenames) filterd by the first letters
 * @param letter string
 * @returns object array with { params: { id: string } }
 */
//TODO doesnt work
export function getAllSongIdsByFirstLetters(letter: string): Array<{ params: { [key: string]: string } }> {
    return getAllSongIds().filter((file) => {
      file.params.id?.startsWith(letter);
    })
}

/**
 * Gets all song ids that start with a non letter character
 * @returns  object array with { params: { id: string } }
 */
export function getAllSongIdsStartingWithNumberOrSymbol(): Array<{ params: { [key: string]: string } }> {
  return getAllSongIds().filter((file) => {
    /^\d/.test(file.params.id!) || /[$-/:-?{-~!"^_`\[\]]/.test(file.params.id!);
  })
}

/**
 * Gets the songData from the id and transforms the fileContents to html
 * @param id string | string[] | undefined
 * @returns songdata object { id, contentHtml }
 */
export async function getSongData(id: string | string[] | undefined) {
  const fullPath = path.join(songsDirectory, `${id}.tex`);
  let fileContents = fs.readFileSync(fullPath, `utf-8`);
  const contentHtml = latexToHtml(fileContents);
  return {
    id,
    contentHtml
  }
}