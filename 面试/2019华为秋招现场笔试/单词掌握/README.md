# 题目
words = ["cat", "hat", "dog", "sky"], chars = "atchl"，
如果 words 中的单词每个字符都在 chars 中的字符出现过，并且chars中的字符足够提供（比如"ccat"则chars不够提供，因为没有两个c），则认为掌握了这个单词。

给定words和chars，计算掌握的单词的总长度。

# 示例
words = ["cat", "hat", "dog", "sky"], chars = "atchl"，掌握的单词是"cat", "hat"，总长度为6.

# 思路
将chars和每个单词转成对象，键为字符，值为字符的数量。转成这样的对象格式后，去判断即可。
