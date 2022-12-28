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
