import fs from 'fs';
import path from 'path';
import { latexToHtml } from '../utils/latex-transformer';

const postsDirectory = path.join(process.cwd(), 'src', 'songs');

export function getAllSongIds(): Array<string | { params: { [key: string]: string } }> {
    const fileNames = fs.readdirSync(postsDirectory);
  
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.tex$/, ''),
        },
      }
    })
}

export function getAllSongIdsByFirstLetter(letter: string) {
    getAllSongIds().map((file) => {
        //TODO
    })
}

export async function getSongData(id: string | string[] | undefined) {
  const fullPath = path.join(postsDirectory, `${id}.tex`);
  let fileContents = fs.readFileSync(fullPath, `utf-8`);
  let typeOF = typeof(fileContents);
  const contentHtml = latexToHtml(fileContents);
  return {
    id,
    fileContents,
    typeOF,
    contentHtml
  }
}