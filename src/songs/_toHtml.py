import os

directory = os.getcwd() + "\\tex\\"
for filename in os.listdir(directory):
    latexPath = os.path.join(directory, filename)
    if os.path.isfile(f):
        htmlPath = os.path.join(os.getcwd(), filename)
        latexFile = open(latexPath, "r")
        htmlFile = open(htmlPath, "w")

        for latexLine in latexFile.readlines():
            if '\\documentclass' or '\\begin{document}' or '\\end{document}' in latexLine:
                htmlFile.write('<div>')  
                break
            if '\\song' or '\\multisong' in latexLine:
                htmlFile.write('<div>')  
                break

            htmlLine = latexFile.replace()
            htmlFile.write(htmlLine)

        htmlFile.close()
        latexFile.close()