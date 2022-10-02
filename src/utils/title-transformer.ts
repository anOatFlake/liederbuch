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
