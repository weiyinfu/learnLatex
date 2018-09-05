import re
import json

demo = open("公式样例.txt", "r", encoding="utf8").read()
a = re.split("\n{2,}", demo)
formulas = []
for i in a:
    if '\n' in i:
        ind = i.index('\n')
        formulas.append(dict(title=i[:ind], formula=i[ind + 1:]))
    else:
        formulas.append(dict(title=None, formula=i))
data = json.dumps(formulas, ensure_ascii=0, indent=2)
f = open("haha.js", "w", encoding="utf8")
f.write("var data=" + data)
