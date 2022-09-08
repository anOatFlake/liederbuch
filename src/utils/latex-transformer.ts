/**
 * transforms latex to basic html
 * @param fileString string
 * @returns htmlString string
 */
export function latexToHtml(fileString: string): string {
    let tempString = "";
    fileString.split(/\r?\n/).forEach(
        line => {
            tempString += maexCustomLatexToHtml(line);
        }
    )
    return tempString;
}

/**
 * transforms the custom latex from maex's songfiles to html
 * @param fileString string
 * @returns htmlString string
 */
function maexCustomLatexToHtml(fileLine: string): string {
    if(fileLine.includes("\\documentclass") || fileLine.includes("\\begin{document}") || fileLine.includes("\\end{document}"))
        return "";

    if(fileLine.includes("\\song")) {
        //title
        fileLine.replace("\\song", "<div class='p-2'><p class='h2'>");  
        //remove {} and language definition
        fileLine.replace("{", "");
        fileLine.replace("}", " ");
        fileLine.replace("Deutsch", "");
        //add endtag for title
        fileLine += "</p></div>\n";
    }

    if(fileLine.includes("\\verse{")) 
        fileLine.replace("\\verse{", '<div class="p-2 song">');
    
    if(fileLine.includes("\\chorus{")) 
        fileLine.replace('\\chorus{', '<div class="part part-chorus">');
    
    if(fileLine.trim().includes("}"))
        fileLine.replace("}", "</div>\n");
    
    if(fileLine.includes("\\li{")) {
        fileLine.replace('\\li{', '<p class="line line-li">');
        fileLine.replace('}', '</p>\n');
        fileLine.replace('\\', ' <span class="chord" data-star="">');
        fileLine.replace('[]', '</span>');
    }

    if(fileLine.includes("\\refrain"))
        fileLine.replace('\\refrain', '<p class="line">Ref.</p>\n');

    if(fileLine.includes("\\footer{"))
        fileLine.replace('\\footer{', '<hr><br><div><div class="part-footer">');

    return fileLine;
}