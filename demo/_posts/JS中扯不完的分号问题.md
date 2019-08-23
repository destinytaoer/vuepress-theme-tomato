---
title: JS 中扯不完的分号问题
layout: post
category: 前端技术
tags:
  - JavaScript
  - 编码规范
date: 2019-02-27 15:53
update: 2019-02-27 15:53
comments: true
copyright: false
---

## 前言

无论哪个团队，代码风格统一的争论是一个无解的话题，每次争论起来，各有各理，或执着或偏激或丧心病狂拍桌愤然离去 ：）
如果团队强制性用了一种代码风格后，符合自己心中标准的同学，欣然乐嘻嘻；不符合的可能会心中『圈养』草泥马暗然敲码；最厉害的情况是，自己之前写的代码在团队流程工具统一编译代码的时候被暗中格式化了，此时心中就不再是一圈草泥马了，至少是一个动物公园。

我们之所以为代码风格统一争论，因为大家都知道良好代码风格的重要性：专业、可维护，提高团队协作效率。

::: tip
测试Info
:::

<!-- more -->

[[toc]]

## 扯不完的分号问题

某些代码风格支持者的支持理由看上去似乎并不是基于这个『重要性』或其更本质的观点提出，而更像为自己贴上『个性代码』、『流行语言风格』、『我不喜欢』等标签，如 JavaScript 分号大战中，某乎上的一些『semicolon less』支持者观点：

先看看最近一两年最 Hit 的 @尤雨溪 大人：

> 没有应该不应该，只有你自己喜欢不喜欢。JavaScript 语法长得 C-like 不代表它本质上和 C 是一类语言，所有直觉性的 “当然应该加分号” 都是保守的、未经深入思考的草率结论。后来新设计的语言里可选分号的多得去了，光是 “可以加分号但是大家都不加” 的语言就有：Go, Scala, Ruby, Python, Swift, Groovy...

大 V 尤很介怀没有深入去了解 ASI 机制就发表哪种好哪种不好的同学，而似乎更倾向将流行语言风格作为参考标准。

个人觉得并不是很有说服力，因为很容易让我想到一个打比方：2012年西班牙的传控踢法所向披靡，惊艳世界足坛，难道追求简单实用的德国队就一定要跟着踢传控球才能说明自己是一支很优秀的球队了吗？说不通。

再来看看从 2012 年纠结到 2014 年的 @贺老湿：

> 【2014年1月更新】当初鉴于本答案过长而可能导致部分“分号党”无法catch到我的主要论点，原本打算重新修订本答案。但是因时间精力因素未予重写，且从本答案的支持来看，为分号正本清源的目的已经达到，所以不再修订本答案。
> 
> 这里仅总结下“分号党”推崇的“总是写分号”风格的最主要缺陷：
> 
> 1. 人总是有可能忘记写分号。ASI导致无法区分是无意中忘记还是有意不写（代码折行）。
> 2. “总是写分号”并不能完全解决ASI缺陷（如return后换行会自动插入分号）。
> 3. “}”后是否要加分号需要回溯到对应“{”之前进行语义判断（是否是函数表达式），成本远高于前置分号判断（只要对行首字符进行token判断：是否是 [ ( + - / 五个符号之一）。

用了很长很长的篇幅去回答，老湿这精神值得我们去学习。但是，老湿似乎是在放大加分号的各种缺点，然后给自己理由作出平衡，然后作出选择。

我似乎同样也不能接受这样的理由，因为在实际编码中，如果养成良好的编码习惯，他所列的 1，2，3 缺陷根本不是问题。

其他一些观点，很多都是随着自己的喜爱随性提出，如：

> 我是不加分号党，不加分号让代码更清新，对视觉的负担也少一点

那有没有实在一点的观点？有的，@玉伯大神的

> 看项目，如果是不加的项目，则不加，比如 zepto
>
> 如果是加的项目，则加上，比如 jquery
>
> 4 空格和 2 空格也是一样，两种风格我都习惯

很佛系很务实的答案是不是。实际工作中，就应该这样，懂得『执生』，懂得尊重，为玉伯点 Like。可惜，这并不是一个可以说服你用还是不用分号的答案。

引发这些争论，无非是风格问题，风格的东西，必定是个人偏爱的东西，围着风格去讨论，永远都是口水战，没有结果。

所以，难道这个『分号问题』真的只是风格的问题？

引发分号的争论问题，ASI 机制是最直接原因，那么去了解为何会产生 ASI 是最容易着手的，而最捷径的方法，就是去看看 JavaScript 的发明者 Brenden Eich 对这个问题的看法。正好有一篇文章就是他在 2012 年专门对这个问题发表的，The infernal semicolon（套路深）

文章开头第一句就放了狠话

> Most of the comments in this semicolons in JS exchange make me sad.
>
> 在这个 JS分号争论 中的大多数评论让我感到悲哀

这个争论的标题是『bootstrap-dropdown.js clearMenus() needs ; at the end』，引发争论的代码如下：

```javascript
clearMenus()
!isActive && $parent.toggleClass('open')
```

复制代码有人指出当时的 JSMin 有bug，压缩上面的代码会出错。

这时候，JSON、JSLint、JSMin 和 ADSafe 的创造者、ECMA JavaScript 2.0 标准化委员会委员、被 JavaScript 之父Brendan Eich 称为 JavaScript 的大宗师、名著《JavaScript: The Good Parts》（中文版《JavaScript语言精粹》）的作者（来头有点凶）Douglas Crockford 直接怼之：

> That is insanely stupid code. I am not going to dumb down JSMin for this case.
TC39 is considering the use of ! as an infix operator. This code will break in the future. Fix it now. Learn to use semicolons properly. ! is not intended to be a statement separator. ; is.
> 
> 这代码真尼玛的疯狂傻X，我是不会为了这傻X的案例而去降低 JSMin 的级数
TC39正在考虑将『!』号作为中缀运算符使用，这个代码不久将来就运行不了。赶紧修复吧，学学怎么正确地使用分号。『!』号并不是语句的分隔号，『;』才是。

Brendan Eich 对 Douglas Crockford 的回答以及强硬的态度婉转表示赞同的同时，也保留了自己看法，大致思路如下：
用了不短的篇幅谈了设计 ASI 的初衷：

> ASI is (formally speaking) a syntactic error correction procedure. If you start to code as if it were a universal significant-newline rule, you will get into trouble
> 
> ASI是一个句法错误纠正的程式，如果你一开始编码就将之视为普遍适用的新语句行规则，你会很大锅

『句法错误纠正的程式』，我理解就是一个容错方案，并不是一个语法规则！换个说法就是，我（当然是Brendan Eich）发明这个语言的时候，在语法上明确说明，一个句子的结束应该以『;』号作为结束，但是你们的编码风格实在不可控，有可能会出现漏写分号，为了防止你们在编码过程中由于个人原因忘记加『;』号而造成错误，所以我加上 ASI 这个机制，尽可能地让代码能正常地运行下去！

这似乎是作者当年的一番好意，如今却成了一个争论的话题，这并不是作者希望看到的，对这个现象，作者对 ASI 的设计表现出一丝丝悔意：

> I wish I had made newlines more significant in JS back in those ten days in May, 1995
> 
? 我多希望在 1995 年 5 月那 10 多天的日子里，可以让 JS 的断句意义显得更为重要（当时 Brendan Eich只用了10天的时间就把 JavaScript 设计出来了）。

但是从语言设计者的角度考虑，ASI 的存在似乎也是合理的，作者认为，一个编程语言在编码风格自由度的把控并不可控，ASI 的设计可以让其有更大的自由度：

> Since when does any programming language not have syntax arguments? All living, practical languages that I know of, even those with indentation-based block structure and similar restrictions, have degrees of freedom of expression that allow abusage as well as good usage
> 
> 有哪个编程语言是没有语法上的争论的？所有我了解的语言都有不错的表达自由度，甚至一些基于缩进块状结构或与其有相似限制的语言有着同样的表达自由度
> 
> Language designers can try to reduce degrees of freedom, but not eliminate them completely.
> 
> 语言设计者可以尝试降低自由度，却不可能完完全全地将之限制死

最后，作者给了一个明确的观点：

> My two cents: be careful not to use ASI as if it gave JS significant newlines. And please don’t abuse && and || where the mighty if statement serves better.
> 
>  注意不要使用ASI，尽管他给 JS 作了断句判断处理，如果强大的 if 语句可以正常使用的情况下，请不要滥用 && 和 ||

而站在语言设计者的角度，对语言自由度的把控，作者也表达了自己的态度：

> I’ll also say that if it were up to me, in view of JS’s subtle and long history, I’d fix JSMin. But I would still log a grumpy comment or two first!

大致意思是，如果作者是 Douglas Crockford，纵观 JS 的微妙而长远的发展史，作者会修复 JSMin，但如果碰到 Douglas Crockford 所指的傻X代码，作者仍然会第一个站出来先怒怼几句！

我们用自己的话来整理一下作者（下文的我）的观点：

- ASI 是一个句法错误纠正的程式，是我对语言设计自由度把控的态度
- 很不幸，ASI 却燃起了 JS 是否加分号编码风格争论战火，粉丝们过激的行为使我感到很 Sad
- 为此我感到后悔，希望自己在 95 年 5 月份的 10 多天设计时间里可以让 JS 的断句意义显得更为重要！
- 但是我是一个很有态度的语言设计者，ASI 从语言设计角度上给予了语言更大的自由度，从这个层面上说，ASI 并没有错！
- 继续但是，可以正常撸通代码的情况下我还是不建议使用 ASI，毕竟 ASI 的设计是用来处理句法错误纠正的
- 对于不尊重语言语法规范的傻 X 代码我依然会怒怼几句，但是对语言设计自由度把控的态度我还是会坚持，所以我尊敬的大神 Douglas Crockford，如果我是你，我还是会怒怼傻 X 代码的，但同时我会修复 JSMin 以表作为一个语言设计者应有的态度。

## 自动分号插入机制 ASI

JavaScript 有着自动分号插入的机制(Automatic Semicolon Insertion)，简称 ASI。这是一个辅助性的功能，然后有一些情况要注意：

如果你这样写代码：

```javascript
return 
a + b
```

那么自动分号插入后会这样：

```javascript
return;
a + b;
```

更可能导致隐含BUG的状况是：

```javascript
a = b + c
(d + e).print()
```

他不会自动插入分号，因为第二行一括号开始，会被误认为是函数。

```javascript
a = b + c(d + e).print();
```

那么这样看来，用分号才是最安全的做法咯！

如果你不想用分号，又怕出问题，v2ex 上有位童鞋给出了一个速记方案：

如果你写 JS 代码不喜欢带分号，而又搞不清什么时候必须加分号，可以这么做：

- 在以 "("、"[" 、"/"、"+"、"-" 开头的语句前面都加上一个分号。

## 参考

- [JS的分号可以省掉吗？](https://blog.fundebug.com/2018/09/18/js-semicolon-bug/)
- [扯不完的 JS 分号问题](https://juejin.im/post/5aa72d526fb9a028d0431ae0)
