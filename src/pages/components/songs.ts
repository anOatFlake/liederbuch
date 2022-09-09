import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'songs');

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
    
}