import os

directory = os.getcwd() + "/tex/"
for filename in os.listdir(directory):
    latexPath = os.path.join(directory, filename)
    if os.path.isfile(latexPath):
        htmlPath = os.path.join(os.getcwd(), filename.replace('tex', 'html'))
        latexFile = open(latexPath, "r")
        htmlFile = open(htmlPath, "w")

        for latexLine in latexFile.readlines():
            if '\\documentclass' in latexLine or '\\begin{document}' in latexLine or '\\end{document}' in latexLine:
                continue
            if '\\song' in latexLine or '\\multisong' in latexLine:
                htmlFile.write(latexLine
                .replace('\\song', "<div class='song'><p class='h2'>")
                .replace('\\multisong', "<div class='song'><p class='h2'>")
                .replace("{Deutsch}", "")
                .replace("{Englisch}", "")
                .replace("{Italienisch}", "")
                .replace("{Rock}", "")
                .replace("{Punk}", "")
                .replace("{Pop}", "")
                .replace("{}", '')
                .replace("}{", " - ")
                .replace("{", "")
                .replace("}", " ") + "</p>\n")
                continue
            if '\\verse{' in latexLine:
                htmlFile.write(latexLine.replace("\\verse{", '<div class="verse">'))
                continue
            if '\\chorus{' in latexLine:
                htmlFile.write(latexLine.replace("\\chorus{", '<div class="chorus">'))
                continue
            if '\\bridge{' in latexLine:
                htmlFile.write(latexLine.replace("\\bridge{", '<div class="bridge">'))
                continue
            if '\\intro{' in latexLine:
                htmlFile.write(latexLine.replace("\\intro{", '<div class="intro">'))
                continue
            if '\\outro{' in latexLine:
                htmlFile.write(latexLine.replace("\\outro{", '<div class="outro">'))
                continue
            if '\\li{' in latexLine:
                htmlFile.write(latexLine
                .replace("\\li{", '<p class="line">')
                .replace("}", "</p>")
                .replace("\\brep", "|: ")
                .replace("\\erep", " :|")
                .replace("\\", ' <span class="chord">')
                .replace("[]", "</span>")
                .replace("[", "")
                .replace("]", "</span>")
                .replace("*", "*</span>"))
                continue
            if '\\chli{' in latexLine:
                htmlFile.write(latexLine
                .replace("\\chli{", "<p>")
                .replace("}", "</p>")
                .replace("\\", ' <span class="">')
                .replace("[]", "</span>")
                .replace("[", "")
                .replace("]", "</span>")
                .replace("*", "*</span>"))
                continue
            if '\\refrain' in latexLine:
                htmlFile.write(latexLine.replace("\\refrain", '<p class="">Ref.</p>'))
                continue
            if '\\repref{' in latexLine:
                htmlFile.write(latexLine
                .replace("\\repref{", '<p class="">Ref. ')
                .replace("}", "x</p>"))
                continue
            if '\\footer{' in latexLine:
                htmlFile.write(latexLine.replace("\\footer{", '<br><hr><br><div><div class="song-footer">'))
                continue
            if latexLine.strip() == "}":
                htmlFile.write('</div>\n')

        htmlFile.close()
        latexFile.close()