(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{589:function(t,a,s){"use strict";s.r(a);var m=s(6),i=Object(m.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"如何理解wide-deep模型的memorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何理解wide-deep模型的memorization"}},[t._v("#")]),t._v(" 如何理解Wide&Deep模型的Memorization？")]),t._v(" "),s("p",[t._v("记忆能力（Memorization）可以被理解模型直接学习并利用历史数据中物品或者特征的“共现频率”的能力。像逻辑回归、协同过滤等简单模型的结构较为简单,原始数据往往可以直接影响推荐结果,产生类似于“如果点击过A,就推荐B”这类规则式的推荐,相当于模型直接记住了历史数据的分布特点,并利用这些记忆进行推荐。即一旦发现了“强特征”,相应的权重会在模型(例如逻辑回归)训练过程中被调整的非常大,就实现了对这个特征的记忆。")]),t._v(" "),s("p",[t._v("通过一系列人工的特征叉乘（cross-product）来构造这些非线性特征，捕捉sparse特征之间的高阶相关性，即“记忆” 历史数据中曾共同出现过的特征对。")]),t._v(" "),s("p",[t._v("典型代表是LR模型，使用大量的原始sparse特征和叉乘特征作为输入，很多原始的dense特征通常也会被分桶离散化构造为sparse特征。这种做法的优点是模型可解释高，实现快速高效，特征重要度易于分析，在工业界已被证明是很有效的。")]),t._v(" "),s("h2",{attrs:{id:"memorization存在哪些缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memorization存在哪些缺点"}},[t._v("#")]),t._v(" Memorization存在哪些缺点？")]),t._v(" "),s("ul",[s("li",[t._v("需要更多的人工设计")]),t._v(" "),s("li",[t._v("可能出现过拟合。可以这样理解：如果将所有特征叉乘起来，那么几乎相当于纯粹记住每个训练样本，这个极端情况是最细粒度的叉乘，我们可以通过构造更粗粒度的特征叉乘来增强泛化性；")]),t._v(" "),s("li",[t._v("无法捕捉训练数据中未曾出现过的特征对。泛化能力较差，若两个特征共同出现的频次是0，模型训练后的对应权重也将是0；")])]),t._v(" "),s("h2",{attrs:{id:"如何理解wide-deep模型的generalization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何理解wide-deep模型的generalization"}},[t._v("#")]),t._v(" 如何理解Wide&Deep模型的Generalization？")]),t._v(" "),s("p",[t._v("sparse特征学习低维的dense embeddings 来捕获特征相关性，学习到的embeddings 本身带有一定的语义信息。可以联想到NLP中的词向量，不同词的词向量有相关性，因此文中也称Generalization是基于相关性之间的传递。这类模型的代表是DNN和FM。他的优点是需要更少的人工参与，对历史上没有出现的特征组合有更好的泛化性")]),t._v(" "),s("h2",{attrs:{id:"generalization存在哪些缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generalization存在哪些缺点"}},[t._v("#")]),t._v(" Generalization存在哪些缺点？")]),t._v(" "),s("p",[t._v("在推荐系统中，当user-item matrix非常稀疏时，例如有和独特爱好的users以及很小众的items，NN很难为users和items学习到有效的embedding。这种情况下，大部分user-item应该是没有关联的，但dense embedding 的方法还是可以得到对所有 user-item pair 的非零预测，因此导致 over-generalize并推荐不怎么相关的物品。此时Memorization就展示了优势，它可以“记住”这些特殊的特征组合。")]),t._v(" "),s("p",[t._v("Memorization根据历史行为数据，产生的推荐通常和用户已有行为的物品直接相关的物品。而Generalization会学习新的特征组合，提高推荐物品的多样性。")]),t._v(" "),s("h2",{attrs:{id:"请简述wide-deep的模型结构。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请简述wide-deep的模型结构。"}},[t._v("#")]),t._v(" 请简述Wide&Deep的模型结构。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ghrbmd81n3j30xc0800t5.jpg",alt:""}}),t._v("\nWide&Deep包含一个 linear model:LM 部分和一个 neural network:NN 部分。")]),t._v(" "),s("p",[t._v("其中单层的linear model即wide部分擅长处理大量稀疏类id特征；Deep部分利用神经网络表达能力强的特点,进行深层交叉,挖掘藏在特征背后的数据模式。")]),t._v(" "),s("p",[t._v("设模型的输入特征向量为"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-msub",[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"."}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"."}})],1),s("mjx-msub",{attrs:{space:"2"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"d"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("  是一个"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"d"}})],1)],1)],1),t._v("维的特征向量(经过 one-hot ),仅包含原始特征。"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3D5"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"B7"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("表示特征交叉转换函数, "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3D5"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("包含转换后的特征。")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("LM 部分：即左侧的 wide 子模型,它是一个线性模型：\n")]),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"w"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"B7"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"<"}})],1),s("mjx-mover",{attrs:{space:"4"}},[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"3D5"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:">"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1),t._v("\n其中"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"<"}}),s("mjx-c",{attrs:{c:">"}})],1)],1)],1),t._v("表示特征拼接,"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"w"}})],1)],1)],1),t._v("是模型参数,"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"b"}})],1)],1)],1),t._v(" 为偏置。"),s("p")],1),t._v(" "),s("li",[s("p",[t._v("NN 部分：即右侧的 deep 子模型,它是一个 DNN 模型。")])])]),t._v(" "),s("p",[t._v("输入层：为了缓解模型的输入大小,DNN 的所有离散特征的输入都是原始特征,而没有经过 one-hot 编码转换。")]),t._v(" "),s("p",[t._v("第一层 embedding 层：将高维稀疏的 categorical 特征转换为低维的 embedding 向量。论文中的embedding 向量维度为 32 维。")]),t._v(" "),s("p",[t._v("第二层特征拼接层：将所有的 embedding 向量拼接成一个 dense feature 向量。论文中该向量维度为 1200维。")]),t._v(" "),s("p",[t._v("后续每一层都是全连接层：\n")]),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-msup",[s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.01em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"h"}})],1)],1)],1),s("mjx-script",{staticStyle:{"vertical-align":"0.779em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"3C3"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"w"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"B7"}})],1),s("mjx-msup",[s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.01em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"h"}})],1)],1)],1),s("mjx-script",{staticStyle:{"vertical-align":"0.779em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"b"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v("\n其中"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1)],1)],1),t._v("为层的编号,"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"3C3"}})],1)],1)],1),t._v("为激活函数。"),s("p"),t._v(" "),s("p",[t._v("模型联合了 wide 和 deep 的输出：\n")]),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[s("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[s("mjx-TeXAtom",[s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.531em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"^"}})],1)],1),s("mjx-base",{staticStyle:{"padding-left":"0.005em"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"s"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"g"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"d"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-msub",[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"w"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"w"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"d"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"<"}})],1),s("mjx-mover",{attrs:{space:"4"}},[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"3D5"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.064em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:">"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-msub",[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"w"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"d"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"p"}})],1)],1)],1)],1),s("mjx-msup",[s("mjx-mover",[s("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.01em","margin-bottom":"-0.516em"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"20D7"}})],1)],1),s("mjx-base",[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"h"}})],1)],1)],1),s("mjx-script",{staticStyle:{"vertical-align":"0.779em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"b"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v("\n其中  为 wide 部分的权重,  为 deep 部分的权重,  为全局偏置。"),s("p"),t._v(" "),s("p",[t._v("模型的损失函数为负的对数似然,并通过随机梯度下降来训练.")]),t._v(" "),s("h2",{attrs:{id:"wide-deep在训练的时候采用了joint-training-有什么好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wide-deep在训练的时候采用了joint-training-有什么好处"}},[t._v("#")]),t._v(" Wide&Deep在训练的时候采用了Joint Training，有什么好处？")]),t._v(" "),s("p",[t._v("联合训练（Joint Training）和集成（Ensemble）是不同的，集成是每个模型单独训练，再将模型的结果汇合。相比联合训练，集成的每个独立模型都得学得足够好才有利于随后的汇合，因此每个模型的model size也相对更大。而联合训练的wide部分只需要作一小部分的特征叉乘来弥补deep部分的不足，不需要 一个full-size 的wide 模型。")]),t._v(" "),s("p",[t._v("在论文中，作者通过梯度的反向传播，使用 mini-batch stochastic optimization 训练参数，并对wide部分使用带L1正则的Follow- the-regularized-leader (FTRL) 算法，对deep部分使用 AdaGrad算法。")]),t._v(" "),s("h2",{attrs:{id:"论文里作者是如何应用wide-deep来做推荐的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#论文里作者是如何应用wide-deep来做推荐的"}},[t._v("#")]),t._v(" 论文里作者是如何应用wide&deep来做推荐的？")]),t._v(" "),s("p",[t._v("Google Play商店的app推荐中，当一个user访问Google Play，会生成一个包含user和contextual信息的query，推荐系统的精排模型会对于候选池中召回的一系列apps（即item，文中也称 impression）进行打分，按打分生成app的排序列表返回给用户。Deep&Wide对应这里的精排模型，输入"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),t._v("包括<user，contextual，impression>的信息，"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v("表示用户下载了impression app，打分即"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"p"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"|"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" 。")],1),t._v(" "),s("p",[t._v("实验的Deep&Wide模型结构如下：\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gqbyz1g58xj30ny0c2jrn.jpg",alt:""}})]),t._v(" "),s("p",[t._v("实验细节")]),t._v(" "),s("ul",[s("li",[t._v("训练样本约5000亿")]),t._v(" "),s("li",[t._v("Categorical 特征（sparse）会有一个过滤阈值，即至少在训练集中出现m次才会被加入")]),t._v(" "),s("li",[t._v("Continuous 特征（dense）通过CDF被归一化到 [0,1] 之间")]),t._v(" "),s("li",[t._v("Categorical 特征映射到32维embeddings，和原始Continuous特征共1200维作为NN输入")]),t._v(" "),s("li",[t._v("Wide部分只用了一组特征叉乘，即被推荐的app ☓ 用户下载的app")]),t._v(" "),s("li",[t._v("线上模型更新时，通过“热启动”重训练，即使用上次的embeddings和模型参数初始化")])]),t._v(" "),s("p",[t._v("Wide部分设置很有意思，作者为什么这么做呢？结合业务思考，在Google Play商店的app下载中，不断有新的app推出，并且有很多“非常冷门、小众”的app，而现在的智能手机user几乎全部会安装一系列必要的app。联想前面对Memorization和Generalization的介绍，此时的Deep部分无法很好的为这些app学到有效的embeddding，而这时Wide可以发挥了它“记忆”的优势，作者在这里选择了“记忆”user下载的app与被推荐的app之间的相关性，有点类似“装个这个app后还可能会装什么”。对于Wide来说，它现在的任务是弥补Deep的缺陷，其他大部分的活就交给Deep了，所以这时的Wide相比单独Wide也显得非常“轻量级”，这也是Joint training相对于Ensemble的优势。")]),t._v(" "),s("h2",{attrs:{id:"为什么wide-deep模型用ftrl和adagrad两种优化方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么wide-deep模型用ftrl和adagrad两种优化方法"}},[t._v("#")]),t._v(" 为什么wide&deep模型用ftrl和adagrad两种优化方法？")]),t._v(" "),s("p",[t._v("wide部分是用ftrl做的优化，wide部分可以看做传统的lr，用ftrl优化可以得到稀疏权重，精度也不错，大大压缩了模型的权重，也压缩了特征向量的维度，可以减少特征数量，降低计算复杂度。从而降低serving的复杂度。wide&deep采用L1 FTRL是想让Wide部分变得更加稀疏。")]),t._v(" "),s("p",[t._v("deep部分是神经网络，输入要么是Age，#App Installs这些数值类特征，要么是已经降维并稠密化的Embedding向量，不需要考虑特征稀疏问题，稀疏也降低不了复杂度，可以通过正则化或者dropout，降低过拟合。所以Deep部分不存在严重的特征稀疏问题，自然可以使用精度更好，更适用于深度学习训练的AdaGrad去训练")]),t._v(" "),s("h2",{attrs:{id:"wide-deep模型的创新和优势是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wide-deep模型的创新和优势是什么"}},[t._v("#")]),t._v(" Wide&Deep模型的创新和优势是什么？")]),t._v(" "),s("p",[t._v("Wide&Deep应用于多家一线互联网公司,其后续的改进创新工作也一直在持续,DeepFM、NFM等模型都可以看成Wide&Deep模型的延伸。")]),t._v(" "),s("p",[t._v("1)它抓住了业务的本质,能够融合传统模型记忆能力和深度学习模型泛化能力的优势")]),t._v(" "),s("p",[t._v("2)模型的结构不复杂,比较容易在工程上实现、训练和上线,加速了在工业界的应用。")]),t._v(" "),s("h2",{attrs:{id:"在应用场景中-哪些特征适合放在wide侧-哪些特征适合放在deep侧-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在应用场景中-哪些特征适合放在wide侧-哪些特征适合放在deep侧-为什么"}},[t._v("#")]),t._v(" 在应用场景中，哪些特征适合放在Wide侧，哪些特征适合放在Deep侧，为什么？")]),t._v(" "),s("p",[t._v("根据人工经验、业务背景，将我们认为有价值的、显而易见的特征及特征组合，喂入wide侧")]),t._v(" "),s("p",[t._v("对于一些受上下文影响较大的，简单的规律诸如交叉或许能够反映更大的上下文原因的特征适合放在Deep层。")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})])],1)}),[],!1,null,null,null);a.default=i.exports}}]);