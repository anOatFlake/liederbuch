/**
 * transforms latex to basic html
 * @param fileString string
 * @returns htmlString string
 */
export function latexToHtml(fileString: string): string {
  let tempString = "";
  fileString.split(/\r?\n/).forEach((line) => {
    tempString += maexCustomLatexToHtml(line);
  });
  return tempString;
}

/**
 * transforms the custom latex from maex's songfiles to html
 * @param fileString string
 * @returns htmlString string
 */
function maexCustomLatexToHtml(fileLine: string): string {
  if (
    fileLine.includes("\\documentclass") ||
    fileLine.includes("\\begin{document}") ||
    fileLine.includes("\\end{document}")
  )
    return "<div>";

  if (fileLine.includes("\\song") || fileLine.includes("\\multicolsong")) {
    return (
      fileLine
        .replace("\\song", "<div class='p-2'><p class='h2'>")
        .replace("\\multicolsong", "<div class='p-2'><p class='h2'>")
        .replace("}{", " - ")
        .replace("{Deutsch}", "")
        .replace("{Englisch}", "")
        .replace("{Italienisch}", "")
        .replace("{Rock}", "")
        .replace("{Punk}", "")
        .replace("{Pop}", "")
        .replaceAll("{", "")
        .replaceAll("}", " ") + "</p></div>\n"
    );
  }

  if (fileLine.includes("\\verse{"))
    return fileLine.replace("\\verse{", '<div class="p-2 song">');

  if (fileLine.includes("\\chorus{"))
    return fileLine.replace("\\chorus{", '<div class="part part-chorus">');

  if (fileLine.includes("\\bridge{"))
    return fileLine.replace("\\bridge{", '<div class="part part-bridge">');

  if (fileLine.includes("\\intro{"))
    return fileLine.replace("\\intro{", '<div class="part part-intro">');

  if (fileLine.includes("\\outro{"))
    return fileLine.replace("\\outro{", '<div class="part part-outro">');

  if (fileLine.includes("\\li{")) {
    return fileLine
      .replace("\\li{", '<p class="line line-li">')
      .replace("}", "</p>\n")
      .replace("\\brep", "|: ")
      .replace("\\erep", " :|")
      .replaceAll("\\", ' <span class="chord" data-star="">')
      .replaceAll("[]", "</span>")
      .replaceAll("[", "")
      .replaceAll("]", "</span>");
  }

  if (fileLine.includes("\\chli{")) {
    return fileLine
      .replace("\\chli{", '<p class="line chord-li">')
      .replace("}", "</p>\n")
      .replaceAll("\\", ' <span class="chord" data-star="">')
      .replaceAll("[]", "</span>")
      .replaceAll("[", "")
      .replaceAll("]", "</span>");
  }

  if (fileLine.includes("\\refrain"))
    return fileLine.replace("\\refrain", '<p class="line">Ref.</p>\n');

  if (fileLine.includes("\\repref{"))
    return fileLine
      .replace("\\repref{", '<p class="line">Ref. ')
      .replace("}", "x</p>\n");

  if (fileLine.includes("\\footer{"))
    return fileLine.replace(
      "\\footer{",
      '<br><hr><br><div><div class="part-footer">'
    );

  if (fileLine.trim().includes("}")) return fileLine.replace("}", "</div>\n");

  return fileLine;
}
