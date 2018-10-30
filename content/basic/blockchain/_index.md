---
title: "什么是区块链"
date: 2018-10-21T19:52:12+08:00
draft: false
weight: 101
menu:
    docs:
      identifier : "blockchain"
      parent: "basic"
---

区块链（英语：blockchain[^1][^2][^3]或block chain[^4][^5]）是利用密码学[^6]保护和串接一系列交易集（又称区块）。每一个区块包含了前一个区块的加密散列值[^7]（指纹）组成一条单向链，这样的设计使得每一个区块包含前一个区块的指纹，也间接的包含了上上一个区块指纹，如果需要修改区块内容则必须修改后续的所有区块，这样的设计使得区块内容具有难以篡改的特性。 

![区块链链式结构](/images/content/Blockchain.png)

2008年，中本聪在《比特币白皮书》[^8]中提出“区块链”概念，并在2009年创立了比特币社会网络，开发出第一个区块，即“创世区块”。

区块链技术上的杀手级应用-比特币的成功，充分展现了区块链技术的去中心化、不可篡改和有效解决信任问题的特性。共享价值体系首先被众多的加密货币效仿，并在工作量证明上和算法上进行了改进，如采用权益证明和SCrypt算法。随后，区块链生态系统在全球不断进化，出现了首次代币发售ICO、智能合约区块链以太坊、“轻所有权、重使用权”的资产代币化共享经济以及区块链国家。目前，人们正在利用这一共享价值体系，在各行各业开发去中心化应用(Decentralized applications, Dapp)[^9]，在全球各地构建去中心化自主组织和去中心化自主社区(Decentralized autonomous society, DAS)。

> 上述内容基于维基百科词条“区块链”所编辑改进。

每个人对区块链的理解各不相同，如同看《哈姆雷特》。虞双齐认为区块链是一个文件内容变更的日志集，并按时间分块记录变更日志，多个块之间使用密码学指纹进行有序强关联。 文件可以看做一个财务账本、一个数据库或任意自定义格式的文件。同时按公认的协议将文件保存在任意多个网络节点中，这样可以保证文件被分布式存储且难以篡改。

你可以这样同女朋友解释区块链，单身狗们要找女朋友，中本聪说我有好多好多个女儿，个个肤白貌美，一倾人国再倾人城，但我要看看你们速算能力，给你们出个密码题，解出一个就给一个姑娘微信。这多大的好事啊，单身狗们开始疯狂展示自己的大脑算力，啥都不干了只去解题。只要其中一人解出一道题，就立马昭告天下，示威全部单身狗，这花姑娘是我的啦，你们放弃吧。岳父建立的规则谁也不敢违背，其他单身狗们即使不服也没有办法，惆怅懊恼也不是个事儿啊，还是快马加鞭去解下一道题目吧。不仅仅能抢到美人，每确认一道算术题还能得到12.5个货币单位的彩礼，听说这货币才是未来的黄金，简直人生赢家。

再换一个剧本同老妈解释，四个人一起打麻将，先胡牌的奖励12.5个币，并且别人不可以抵赖，胡牌后重新洗牌开始新一轮，不断重复。即使你没胡牌也没关系，不用惩罚只是不能获得奖励。把每盘胡牌的麻将链在一块就是一条区块链。

如果是你身边的码农同行，可以解释说区块链就是一个单线程交互的分布式数据库，感兴趣的人都可以一起维护这个数据库文件，维护能力强的能获得奖励。你也不用半夜担心服务器瘫痪，不用担心数据被黑客篡改。

## 区块链进化历程

### 区块链1.0

中本聪所设计的比特币是区块链技术的第一个应用。巧缝2018年美国金融危机，极客们看到了希望，创建一个不受政府控制，也无人可以控制的无国界数字货币，人民可以自由的使用其支付。基于对等网络节点的数字货币，解决了货币与支付手段的去中心问题。

### 区块链2.0
比特币虽然加入了简单的是否逻辑处理，因为设计目标是解决数字货币支付问题，所以功能单一。形同一台早起的 ATM 机，只能转账和存款。
  
作为比特币的早期开发者，Vitalik Buterin 曾提出加入更多功能但尚未批准，所以他提出了新的模式：加入可编程的智能合约。以太坊从此诞生，依靠智能合约实现资产的多元化和Token化。在2017年，智能合约被大量使用于 ICO。

### 区块链3.0

如何映射现实社会？如何提高交易吞吐量 ? 如何解决存储量问题？ 如果让资源不被大厂家所把持？如何让区块链能成为底层服务协议，将现实中的中心化应用移植到去中心化的网络中？

创新总在解决问题中闪现，构建替代中心化应用成为区块链3.0所需要解决的问题。这个3.0发展周期将长达10年，我们都在摸索中前行。

## 区块链技术组合

1. P2P点对点对等网络
2. 密码学
3. 共识协议

[^1]: Blockchains: [The great chain of being sure about things](https://www.economist.com/news/briefing/21677228-technology-behind-bitcoin-lets-people-who-do-not-know-or-trust-each-other-build-dependable). 《经济学人》. 31 October 2015 [18 June 2016]. The technology behind bitcoin lets people who do not know or trust each other build a dependable ledger. This has implications far beyond the crypto currency.

[^2]: Morris, David Z. Leaderless, Blockchain-Based Venture Capital Fund Raises $100 Million, And Counting. Fortune. 15 May 2016.
[^3]:Popper, Nathan. A Venture Fund With Plenty of Virtual Capital, but No Capitalist. The New York Times. 21 May 2016. 
[^4]:Brito, Jerry; Castillo, Andrea. Bitcoin: A Primer for Policymakers (PDF). Fairfax, VA: Mercatus Center, George Mason University. 2013. 
[^5]:tier, Leo. original-bitcoin (self-published code collection). github. 18 June 2016. This is a historical repository of Satoshi Nakamoto's original bit coin sourcecode.
[^6]:[密码学](https://baike.baidu.com/item/密码学)是研究编制密码和破译密码的技术科学。研究密码变化的客观规律，应用于编制密码以保守通信秘密的，称为编码学；应用于破译密码以获取通信情报的，称为破译学，总称密码学。
[^7]:[散列函数](https://baike.baidu.com/item/加密散列函数)（或散列算法，英语：Hash Function）是一种从任何一种数据中创建小的数字“指纹”的方法。该函数将数据打乱混合，重新创建一个叫做散列值的指纹。散列值通常用来代表一个短的随机字母和数字组成的字符串。
[^8]:首次公开是在一个密码学邮件组[Bitcoin P2P e-cash paper](https://satoshi.nakamotoinstitute.org/emails/cryptography/1/)写道：I've been working on a new electronic cash system that's fully peer-to-peer, with no trusted third party. [中文版比特币白皮书](http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system)
[^9]: 区块链3.0，更新细节见：https://www.zhihu.com/question/265584082