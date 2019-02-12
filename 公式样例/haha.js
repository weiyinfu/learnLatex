var data=[
  {
    "title": "查准率",
    "formula": "Precision(\\%) = \\frac{True positive}{(True positive+False positive)} \\times"
  },
  {
    "title": "查全率",
    "formula": "Recall(\\%) = \\frac{True positive}{(True positive+False negative)} \\times 100"
  },
  {
    "title": "F1",
    "formula": "F1-Score = \\frac{2}{\\frac{1}{p}+\\frac{1}{r}}"
  },
  {
    "title": "错误率",
    "formula": "Error = \\frac{1}{m_{dev}}\\sum_{i=1}^{m_{dev}}L\\{{\\hat y^{(i)} \\neq y^{(i)}}\\}"
  },
  {
    "title": "惩罚值",
    "formula": "w^{i}=\\begin{cases}\n1 & \\text{ if } x^{i}\\ \\text{is non-pornographic} \\\\\n100 & \\text{ if } x^{i}\\ \\text{is pornographic}\n\\end{cases}"
  },
  {
    "title": "softmax",
    "formula": "softmax(x)_i = \\frac {e^{x_i}}{\\sum _j e^{x_j}}"
  },
  {
    "title": "softmax property",
    "formula": "softmax(x+c)_i = \\frac {e^{(x_i+c)}}{\\sum _j e^{(x_j+c)}} = \\frac {e^{c}e^{x_i}}{e^{c}\\sum _j e^{x_j}} = \\frac {e^{x_i}}{\\sum _j e^{x_j}} = softmax(x)"
  },
  {
    "title": "sigmoid",
    "formula": "\\sigma(x) = \\frac{1}{1+e^{-x}}"
  },
  {
    "title": "softmax for word2vec",
    "formula": "softmax(u_o^Tv_c) = p(o|c) = \\hat y_o = \\frac {e^{u_o^Tv_c}}{\\sum _{w=1}^W e^{u_w^Tv_c}}"
  },
  {
    "title": "cross entropy",
    "formula": "CE(y,\\hat y) = − \\sum_i y_ilog(\\hat y_i)"
  },
  {
    "title": "negative sample cost",
    "formula": "J_t(\\theta) =log \\sigma(u_o^Tv_c)+\\sum_{i=1}{k}\\mathbb{E}_{j~P(w)}[log\\sigma(-u_j^Tv_c)]\nJ_t(\\theta) =-log \\sigma(u_o^Tv_c)-\\sum_{k=1}^{K}log\\sigma(-u_k^Tv_c)"
  },
  {
    "title": null,
    "formula": "\\frac {\\partial J}{\\partial v_c} = U(\\hat y - y)"
  },
  {
    "title": null,
    "formula": "\\frac {\\partial J}{\\partial U} = v_c(\\hat y - y)^T"
  },
  {
    "title": null,
    "formula": "J_\\alpha(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m! \\Gamma (m + \\alpha + 1)} {\\left({ \\frac{x}{2} }\\right)}^{2m + \\alpha} \\text {，行内公式示例}"
  },
  {
    "title": null,
    "formula": " J_\\alpha(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m! \\Gamma (m + \\alpha + 1)} {\\left({ \\frac{x}{2} }\\right)}^{2m + \\alpha} \\text {，独立公式示例}"
  },
  {
    "title": null,
    "formula": "x^{y^z}=(1+{\\rm e}^x)^{-2xy^w} "
  },
  {
    "title": null,
    "formula": "\\sideset{^1_2}{^3_4}\\bigotimes"
  },
  {
    "title": null,
    "formula": "f(x,y,z) = 3y^2z \\left( 3+\\frac{7x+5}{1+y^2} \\right)"
  },
  {
    "title": null,
    "formula": "\\frac{a-1}{b-1} \\quad and \\quad {a+1\\over b+1}"
  },
  {
    "title": null,
    "formula": "\\sqrt{2} \\quad and \\quad \\sqrt[n]{3}"
  },
  {
    "title": "省略号",
    "formula": "f(x_1,x_2,\\underbrace{\\ldots}_{\\rm ldots} ,x_n) = x_1^2 + x_2^2 + \\underbrace{\\cdots}_{\\rm cdots} + x_n^2"
  },
  {
    "title": "矢量",
    "formula": "\\vec{a} \\cdot \\vec{b}=0\n\\overleftarrow{xy} \\quad and \\quad \\overleftrightarrow{xy} \\quad and \\quad \\overrightarrow{xy}"
  },
  {
    "title": "积分",
    "formula": "\\int_0^1 {x^2} \\,{\\rm d}x"
  },
  {
    "title": "极限",
    "formula": "\\lim_{n \\to +\\infty} \\frac{1}{n(n+1)} \\quad and \\quad \\lim_{x\\leftarrow{示例}} \\frac{1}{n(n+1)} "
  },
  {
    "title": "累加和累乘",
    "formula": "\\sum_{i=1}^n \\frac{1}{i^2} \\quad and \\quad \\prod_{i=1}^n \\frac{1}{i^2} \\quad and \\quad \\bigcup_{i=1}^{2} R"
  },
  {
    "title": "大括号和行标",
    "formula": "f\\left(\n   \\left[ \n     \\frac{\n       1+\\left\\{x,y\\right\\}\n     }{\n       \\left(\n          \\frac{x}{y}+\\frac{y}{x}\n       \\right)\n       \\left(u+1\\right)\n     }+a\n   \\right]^{3/2}\n\\right)\n\\tag{行标}"
  }
]