(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{578:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"为什么gbdt可用于特征选择和特征组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么gbdt可用于特征选择和特征组合"}},[t._v("#")]),t._v(" 为什么GBDT可用于特征选择和特征组合？")]),t._v(" "),s("p",[t._v("GBDT是由多颗回归树组成的树林，后一棵树以前面树林的结果与真实结果的残差为拟合目标。每棵树生成的过程是一课标准的回归树生成过程，因此回归树中每个节点的分裂是一个自然的特征选择过程，而多层节点的结构则对特征进行了有效的自动组合，也就非常高效地解决了特征选择和特征组合的问题。")]),t._v(" "),s("h2",{attrs:{id:"gbdt-lr组合模型的步骤是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gbdt-lr组合模型的步骤是什么"}},[t._v("#")]),t._v(" GBDT+LR组合模型的步骤是什么？")]),t._v(" "),s("p",[t._v("GBDT+LR 由两部分组成，其中GBDT用来对训练集提取特征作为新的训练输入数据，LR作为新训练输入数据的分类器。")]),t._v(" "),s("p",[t._v("具体来讲，有以下几个步骤：")]),t._v(" "),s("p",[t._v("1、GBDT首先对原始训练数据做训练，得到一个二分类器，当然这里也需要利用网格搜索寻找最佳参数组合。")]),t._v(" "),s("p",[t._v("2、与通常做法不同的是，当GBDT训练好做预测的时候，输出的并不是最终的二分类概率值，而是要把模型中的每棵树计算得到的预测概率值所属的叶子结点位置记为1，这样，就构造出了新的训练数据。")]),t._v(" "),s("p",[t._v("举个例子，下图是一个GBDT+LR 模型结构，设GBDT有两个弱分类器，分别以蓝色和红色部分表示，其中蓝色弱分类器的叶子结点个数为3，红色弱分类器的叶子结点个数为2，并且蓝色弱分类器中对0-1 的预测结果落到了第二个叶子结点上，红色弱分类器中对0-1 的预测结果也落到了第二个叶子结点上。那么我们就记蓝色弱分类器的预测结果为[0 1 0]，红色弱分类器的预测结果为[0 1]，综合起来看，GBDT的输出为这些弱分类器的组合[0 1 0 0 1] ，或者一个稀疏向量（数组）。")]),t._v(" "),s("p",[t._v("这里的思想与One-hot独热编码类似，事实上，在用GBDT构造新的训练数据时，采用的也正是One-hot方法。并且由于每一弱分类器有且只有一个叶子节点输出预测结果，所以在一个具有n个弱分类器、共计m个叶子结点的GBDT中，每一条训练数据都会被转换为1*m维稀疏向量，且有n个元素为1，其余m-n 个元素全为0。")]),t._v(" "),s("p",[t._v("3、新的训练数据构造完成后，下一步就要与原始的训练数据中的label(输出)数据一并输入到Logistic Regression分类器中进行最终分类器的训练。思考一下，在对原始数据进行GBDT提取为新的数据这一操作之后，数据不仅变得稀疏，而且由于弱分类器个数，叶子结点个数的影响，可能会导致新的训练数据特征维度过大的问题，因此，在Logistic Regression这一层中，可使用正则化来减少过拟合的风险，在Facebook的论文中采用的是L1正则化。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtfb1hpqxhj60k20ggaat02.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"gbdt-lr有什么优点和缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gbdt-lr有什么优点和缺陷"}},[t._v("#")]),t._v(" GBDT+LR有什么优点和缺陷？")]),t._v(" "),s("p",[t._v("在推荐系统领域，大大推进了特征工程模型化的趋势。之前特征工程的解决方法主要有两个：一个是进行人工的或半人工的特征组合和特征筛选，对算法工程师的经验和精力投入要求较高；二是通过改造目标函数，改进模型结构，增加特征交叉项的方式增强特征组合能力，要求从根本上改变模型结构，对模型设计能力的要求较高。")]),t._v(" "),s("p",[t._v("GBDT+LR的提出意味着特征工程可以完全交由一个独立的模型来完成，模型的输入可以是原始的特征向量，不必在特征工程上投入过多的人工筛选和模型设计的精力，真正实现了端到端的训练。")]),t._v(" "),s("p",[t._v("但GBDT无法进行完全并行的训练，更新所需的训练时长较长。GBDT也存在很容易过拟合的问题")]),t._v(" "),s("p",[t._v("假设有1w个样本，y类别0和1，100维特征，其中10个样本都是类别1，而特征f1的值为0，1，且刚好这10个样本的f1特征值都为1，其余9990样本都为0(在高维稀疏的情况下这种情况很常见)，我们都知道这种情况在树模型的时候，很容易优化出含一个使用f1为分裂节点的树直接将数据划分的很好，但是当测试的时候，却会发现效果很差，因为这个特征只是刚好偶然间跟y拟合到了这个规律，这也是我们常说的过拟合。但是当时我还是不太懂为什么线性模型就能对这种case处理的好?照理说线性模型在优化之后不也会产生这样一个式子:y=W1*f1+**f...，其中W1特别大以拟合这十个样本吗，因为反正f的值只有0和1，W1过大对其他9990样本不会有任何影响。")]),t._v(" "),s("p",[t._v("这里面的原因是现在的模型普遍都会带着正则项，而Ir等线性模型的正则项是对权重的惩罚，也就是W1一旦过大，惩罚就会很大，进一步压缩W1的值，使他不至于过大，而树模型则不一样，树模型的惩罚项通常为叶子节点数和深度等，而我们都知道，对于上面这种case，树只需要一个节点就可以完美分割9990和10个样本，惩罚项极其之小，这也就是为什么在高维稀疏特征的时候，线性模型会比非线性模型好的原因了:带正则化的线性模型比较不容易对稀疏特征过拟合。")]),t._v(" "),s("h2",{attrs:{id:"为什么gbdt-lr模型中建树采用ensemble决策树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么gbdt-lr模型中建树采用ensemble决策树"}},[t._v("#")]),t._v(" 为什么GBDT+LR模型中建树采用ensemble决策树？")]),t._v(" "),s("p",[t._v("一棵树的表达能力很弱，不足以表达多个有区分性的特征组合，多棵树的表达能力更强一些。GBDT每棵树都在学习前面棵树尚存的不足，迭代多少次就会生成多少颗树。按paper以及Kaggle竞赛中的GBDT+LR融合方式，多棵树正好满足LR每条训练样本可以通过GBDT映射成多个特征的需求。")]),t._v(" "),s("h2",{attrs:{id:"为什么建树采用gbdt而非rf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么建树采用gbdt而非rf"}},[t._v("#")]),t._v(" 为什么建树采用GBDT而非RF？")]),t._v(" "),s("p",[t._v("RF也是多棵树，但从效果上有实践证明不如GBDT。且GBDT前面的树，特征分裂主要体现对多数样本有区分度的特征；后面的树，主要体现的是经过前N颗树，残差仍然较大的少数样本。优先选用在整体上有区分度的特征，再选用针对少数样本有区分度的特征，思路更加合理，这应该也是用GBDT的原因。")]),t._v(" "),s("h2",{attrs:{id:"请你简要评价一下gbdt-lr模型。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请你简要评价一下gbdt-lr模型。"}},[t._v("#")]),t._v(" 请你简要评价一下GBDT+LR模型。")]),t._v(" "),s("p",[t._v("由于决策树的结构特点，事实上，决策树的深度就决定了特征交叉的维度。如果决策树的深度为4，通过三次节点分裂，最终的叶节点实际上是进行了3阶特征组合后的结果，如此强的特征组合能力显然是FM系的模型不具备的。但由于GBDT容易产生过拟合，以及GBDT这种特征转换方式实际上丢失了大量特征的数值信息，因此我们不能简单说GBDT由于特征交叉的能力更强，效果就比FM或FFM好（事实上FFM是2015年提出的）。在模型的选择和调试上，永远都是多种因素综合作用的结果。")]),t._v(" "),s("p",[t._v("GBDT+LR比FM重要的意义在于，它大大推进了特征工程模型化这一重要趋势，某种意义上来说，之后深度学习的各类网络结构，以及embedding技术的应用，都是这一趋势的延续。")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gtqjt0a9rnj61ou0pwaci02.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);