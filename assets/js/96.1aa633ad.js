(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{594:function(t,s,a){"use strict";a.r(s);var m=a(6),i=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"简要说明mind模型的出发点是什么-做了哪些工作的创新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简要说明mind模型的出发点是什么-做了哪些工作的创新"}},[t._v("#")]),t._v(" 简要说明MIND模型的出发点是什么？做了哪些工作的创新？")]),t._v(" "),a("p",[t._v("传统 DeepMatch 方法为每个用户生成一个兴趣向量，但在实际的购物场景中，用户的兴趣是多样的，不同兴趣之间甚至可能是不相关的。比如用户可能同时期望购买服装、化妆品、零食，而一个长度有限的向量很难表示用户这样的多个兴趣。我们的 MIND 模型通过 Dynamic Routing 的方法从用户行为和用户属性信息中动态学习出多个表示用户兴趣的向量，更好的捕捉用户的多样兴趣，来提升召回的丰富度和准确度")]),t._v(" "),a("p",[t._v("它的创新之处在于：")]),t._v(" "),a("ol",[a("li",[t._v("通过Mulit-Interest Extractor Layer 获取多个向量表达用户兴趣的不同方面；")]),t._v(" "),a("li",[t._v("提出了具有动态路由的多兴趣网络（MIND），利用Dynamic Routing 以自适应地聚合用户历史行为到用户表达向量中，以处理用户的不同兴趣；")]),t._v(" "),a("li",[t._v("开发 Label-Aware Attention 标签感知注意力机制，以帮助学习具有多个向量的用户表示。")])]),t._v(" "),a("h2",{attrs:{id:"请简述用户多兴趣网络mind的整体结构。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请简述用户多兴趣网络mind的整体结构。"}},[t._v("#")]),t._v(" 请简述用户多兴趣网络MIND的整体结构。")]),t._v(" "),a("p",[t._v("MIND网络具体结构如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi6n593dj8j30u00dw0yx.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("输入层：\n"),a("ul",[a("li",[t._v("User画像特征；")]),t._v(" "),a("li",[t._v("User行为特征，即产生行为（历史点击或购买等）的Item列表和Item属性列表；")]),t._v(" "),a("li",[t._v("正标签，即User真实发生行为（下一次点击或购买等）的 Item ID；")])])]),t._v(" "),a("li",[t._v("Embedding层：\n"),a("ul",[a("li",[t._v("将ID信息映射成稠密向量，即Embedding；")])])]),t._v(" "),a("li",[t._v("Pooling层：\n"),a("ul",[a("li",[t._v("将行为序列的Item和Item属性的Embedding表达进行mean, sum或max等池化操作；")])])]),t._v(" "),a("li",[t._v("Multi-interest Extractor 层：\n"),a("ul",[a("li",[t._v("输入：User行为序列的Embedding Features，即 Pooling层 结果；")]),t._v(" "),a("li",[t._v("输出：Interest Capsules，用户的多兴趣Embedding表达；")])])]),t._v(" "),a("li",[t._v("H layers：\n"),a("ul",[a("li",[t._v("多个兴趣Embedding分别经过两个全连接层，得到User最终的多个兴趣Embedding表达；")])])])]),t._v(" "),a("h2",{attrs:{id:"请简要说明一下mind模型的training服务和serving服务的结构。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请简要说明一下mind模型的training服务和serving服务的结构。"}},[t._v("#")]),t._v(" 请简要说明一下MIND模型的Training服务和Serving服务的结构。")]),t._v(" "),a("p",[t._v("Training服务：")]),t._v(" "),a("p",[t._v("输入层：")]),t._v(" "),a("ul",[a("li",[t._v("H layers 结果作为 Label-aware Attention层的Keys和Values（此时Keys=Values）；")]),t._v(" "),a("li",[t._v("正标签，即User真实发生行为（下一次点击或购买等）的 Item ID，作为Query；")])]),t._v(" "),a("p",[t._v("Label-aware Attention层：")]),t._v(" "),a("ul",[a("li",[t._v("对输入的Keys和Query做内积、Softmax等操作作为Keys的权重值w；")]),t._v(" "),a("li",[t._v("使用w与Values做内积，然后对应元素求和，得到一个Embedding，作为User对当前正标签Item的兴趣分布；")])]),t._v(" "),a("p",[t._v("Sampled Softmax Loss层：")]),t._v(" "),a("ul",[a("li",[t._v("抽取多个负标签，与正标签组成 Sampled 组；")]),t._v(" "),a("li",[t._v("使用 tf.nn.sampled_softmax_loss 函数得到正标签的概率；")])]),t._v(" "),a("p",[t._v("Serving服务：")]),t._v(" "),a("p",[t._v("输入层：")]),t._v(" "),a("ul",[a("li",[t._v("H layers 结果作为 User 最终的多个兴趣Embedding表达；")]),t._v(" "),a("li",[t._v("全集 Item 的Embedding表达；")])]),t._v(" "),a("p",[t._v("TopN Recall：")]),t._v(" "),a("ul",[a("li",[t._v("针对User的多兴趣Embedding，根据faiss或annoy在全集 Item 池中检索，获得User兴趣Embedding所感兴趣的候选Item集合；")])]),t._v(" "),a("h2",{attrs:{id:"请说明一下mind模型中多兴趣抽取层的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请说明一下mind模型中多兴趣抽取层的原理"}},[t._v("#")]),t._v(" 请说明一下MIND模型中多兴趣抽取层的原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtrx2yzwa1j60mf04gjrr02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("多兴趣抽取层的关键点在于兴趣胶囊，简单介绍下Capsule，类似传统神经元，其活动向量（activity vector）表示特定实体类型的实例化参数，如对象或对象部分。我们使用活动向量的长度表征实体存在的概率，向量方向表示实例化参数。同一水平的活跃 Capsule 通过变换矩阵对更高级别的 capsule 的实例化参数进行预测。")]),t._v(" "),a("p",[t._v("假设我们有两层Capsule，我们从第一层和第二层引用 Capsule分别为低级Capsule和高级Capsule。动态路由(Dynamic Routing) 的目标是在迭代中给出低级别Capsule的值来计算高级别Capsule的值方法。在每轮迭代中，给定一个低阶Capsule 向量:\n$$\\overrightarrow{c}_i^l\\in R^{N_l\\times 1},i\\in {1,...,m} $$")]),t._v(" "),a("p",[t._v("和高阶Capsule向量：\n$$\\overrightarrow{c}_j^h\\in R^{N_h\\times 1},j\\in {1,...,n} $$")]),t._v(" "),a("p",[t._v("路由 logit 可以表示为：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msubsup",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.034em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.247em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-spacer",{staticStyle:{"margin-top":"0.299em"}}),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"T"}})],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-msubsup",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.034em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.247em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-spacer",{staticStyle:{"margin-top":"0.299em"}}),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("每个胶囊就是个向量，高level的胶囊是由低level的胶囊聚合而成，其实就是简单的线性加权，权重是模型自动学到的，计算权重的方式如下：")]),t._v(" "),a("p",[t._v("$$w_{ij}=\\frac{exp b_{ij}}{\\sum_{k=1}^m}exp b_{ik} $$")]),t._v(" "),a("p",[t._v("有了权重就可以线性加权了：\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msubsup",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.017em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"z"}})],1)],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.247em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-spacer",{staticStyle:{"margin-top":"0.299em"}}),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-munderover",{attrs:{space:"4"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.412em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"m"}})],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1),a("mjx-msubsup",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.056em","margin-bottom":"-0.516em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"20D7"}})],1)],1),a("mjx-base",{staticStyle:{"padding-left":"0.034em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.247em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-spacer",{staticStyle:{"margin-top":"0.299em"}}),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("加权完后，就应该有激活函数了，胶囊网络中用的激活函数都是squash，因为胶囊向量的方向表示特征，长度表示概率。最后高level的胶囊计算如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtrxf00kp5j60f804i74c02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("在MIND中，高level向量就是兴趣向量，低level向量就是交互的item过pooling后的向量。这里要注意的是，在传统胶囊网络bij第一次计算是要初始化为0的，但是在MIND中却不行，因为该论文对胶囊网络做了3大改造。")]),t._v(" "),a("ol",[a("li",[t._v("共享"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1),t._v("：这样做其实很容易理解，毕竟低level的胶囊，都是item向量，量纲是统一的。")],1),t._v(" "),a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1)],1)],1),t._v("第一次按高斯分布随机初始化，这样做是因为共享"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1)],1)],1),t._v("后，如果还把"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"j"}})],1)],1)],1)],1)],1)],1),t._v("初始化为0，那么得到的兴趣向量都是相同的。")],1),t._v(" "),a("li",[t._v("动态调节兴趣数量："),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"K"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2032"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"K"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"I"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"|"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(".")],1)]),t._v(" "),a("p",[t._v("该层就是通过动态路由算法将N个item生成的N个embedding映射成k个兴趣embedding。")]),t._v(" "),a("p",[t._v("最后是Label-aware Attention层，该层做的事很简单，把target item的embedding作为Q，兴趣向量作为K和V，做attention操作，变成一个向量，如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi6n8zzdvuj30i604k3zx.jpg",alt:""}}),t._v("\n公式中的 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1),t._v(" 表示 item embedding，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"V"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1)],1)],1),t._v(" 表示 Multi-Interest 抽取层输出的用户多个兴趣向量 embedding。")],1),t._v(" "),a("p",[t._v("p是我们可以调节的一个参数，p是0，最终向量就是兴趣向量的平均。如果p>1，那最终向量偏向于和target向量最接近的向量。p无穷大，就相当于选择和target向量最相关的兴趣向量作为最终向量。论文实验发现，调大p，收敛较快。")]),t._v(" "),a("p",[t._v("最后使用 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"V"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1)],1)],1),t._v(" 和待推荐 item embedding，计算用户 u 和商品 i 交互的概率，计算方法和 YouTube DNN 一样：")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi6nbpe9amj30nx05dwg2.jpg",alt:""}})]),t._v(" "),a("p",[t._v("在线服务的时候，每个兴趣向量，都用来做召回，取最相关的top N个。需要注意的一点是，在用户与item不断交互的过程中，兴趣向量是在不断改变的。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=i.exports}}]);