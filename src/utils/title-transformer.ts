export function cleanUpTitle(id: string): string {
    return replaceSharpS(id).replaceAll('_', ' ')
                            .replaceAll("ae", "ä")
                            .replaceAll("oe", "ö")
                            .replaceAll("ue", "ü");
}

function replaceSharpS(id: string): string {
    return id.replaceAll("gross", "groß"); //add more words
}