/**
 * Helper function to determine if the song is already saved in the reportoire
 * @param songId
 * @param allSongs
 * @returns boolean
 */
export function isSongInRepertoire(
  songId: string,
  allSongs: string | null | undefined
) {
  return allSongs?.includes(songId);
}

/**
 * Helper function to split the reportoire string into a string array
 * @param allSongs
 * @returns string[]
 */
export function repertoireAsArray(allSongs: string | null | undefined) {
  return allSongs?.split(", ");
}
