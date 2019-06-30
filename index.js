// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentence = sentence.replace(sentence[0],sentence[0].toUpperCase());
console.log(sentence);


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//正则表达式
money = money.replace(/[^0-9]/ig,"");
console.log(money);
//TODO write your code here...
