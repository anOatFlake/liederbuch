import fs from 'fs';
import path from 'path';
import { latexToHtml } from '../utils/latex-transformer';

const songsDirectory = path.join(process.cwd(), 'src', 'songs');

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

export function getAllSongIdsByFirstLetters(letter: string): Array<{ params: { [key: string]: string } }> {
    return getAllSongIds().filter((file) => {
      file.params.id?.startsWith(letter);
    })
}

export function getAllSongIdsStartingWithNumberOrSymbol(): Array<{ params: { [key: string]: string } }> {
  return getAllSongIds().filter((file) => {
    /^\d/.test(file.params.id!) || /[$-/:-?{-~!"^_`\[\]]/.test(file.params.id!);
  })
}

export async function getSongData(id: string | string[] | undefined) {
  const fullPath = path.join(songsDirectory, `${id}.tex`);
  let fileContents = fs.readFileSync(fullPath, `utf-8`);
  const contentHtml = latexToHtml(fileContents);
  return {
    id,
    contentHtml
  }
}