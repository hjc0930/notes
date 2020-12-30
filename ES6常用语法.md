## 1.let和const

**相同点**

- 没有变量提升，必须先声明后使用，否则报错

- 形成块级作用域，暂时性死区

  - 暂时性死区：只要块级作用域内存在`let`命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

  ```js
  var tmp = 123;
  
  if(true) {
    tmp = 'abc'; //ReferenceError: Cannot access 'tmp' before initialization
    let tmp;
  }
  ```

- 不能重复声明

- 在全局声明时，不会挂载在window上

  ```js
  var a = 123;
  let b = 123;
  const I = 1;
  
  console.log(window.a);
  console.log(window.b); // ReferenceError: window is not defined
  console.log(window.I); // ReferenceError: window is not defined
  ```

**不同点**

- `const` 声明变量时需要赋初始值
- `const` 声明的基本类型数值不能被修改，声明的引用类型可以修改属性，但是不能重新赋值改变引用的地址
- 使用 `const` 程序执行效率更快

## 2.解构赋值

- 数组解构赋值
- 对象解构赋值
- 字符串解构赋值
- 函数参数解构赋值

**解构赋值使用场景**

- 交换变量的值
- 从函数返回多个值
- 函数参数解构
- 提取 JSON 数据
- 遍历 Map 结构
- 模块导入解构

```js
//交换值
let x = 33;
let y = 22;

[x,y] = [y,x];
console.log(x+'---'+y); // 22---33

//提取函数多个返回值
function fn() {
  return {a:"小明",b:20};
}

const {a,b} = fn();
console.log(a+'---'+b);

// 参数解构赋值
function fn({x,y,z}) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}
fn({z:3,x:1,y:2}) // 传值顺序可以不同

//注意：和剩余参数的对比(typescript)
function fn(x:number,y:number,...z:number[]):void {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // [3,4,5]
}
fn(1,2,3,4,5); // 传入的值按顺序赋值

//对象解构赋值
let obj = {
  a:1,
  b:2
}

let {b} = obj;
console.log(b);  //2

//map解构赋值
let map = new Map();
map.set("name","小明");
map.set("age",20);

console.log(map);                  // Map { 'name' => '小明', 'age' => 20 }
console.log(map.entries());        // [Map Entries] { [ 'name', '小明' ], [ 'age', 20 ] }
for(let [k,v] of map.entries()) {
  console.log(k+'--'+v);           // name--小明 age--20 
}

// 模块解构赋值
import {module1, module2, ... } from './filename.js' 
```

## 3.字符串

### 1.Unicode表示法

```js
//es6中将编码放入{}即可解析
console.log('hell\u{6f}');
```

### 2.字符串常用方法

- 常规方法
  - length：计算字符串的长度并返回
  - charAt(index)：返回指定索引的字符串
  - indexOf(item)：返回指定字符串第一次出现的位置
  - lastIndexOf(item)：返回指定字符串最后一次出现的位置
  - substring[start,end)：提取指定区间的字符串，索引不能为负值
  - slice[start,end)：提取指定区间的字符串（索引可以为负值，-1就是倒数第二位）
  - substr(start,length)：返回指定长度的字符串
  - concat(str1,str2...)：字符串拼接方法，连接两个或多个字符串，返回连接后的新字符串
  - toString()：返回字符串对象方法
  - toLowerCase()，把字符串转换成小写的
  - toUpperCase()，把字符串转换成大写的
  - String.fromCharCode(ASCII)：将对应的ASCII值转为字符串
  - String.fromCodePoint(ASCII)：将对应的ASCII值转为字串串，可处理高位编码
  - charCodeAt()：字符串转为对应的ASCII值
- 与正则表达式有关的方法
  - match(正则表达式)：在字符串中匹配是否有符合正则表达式的字符串，返回匹配到的字符串数组，未匹配到则返回null
  - replace(oldStr/正则,newStr)：字符串替换方法，用新的子串将旧的子串替换掉，返回替换后的字符串
  - search(子串/正则)：字符串查询方法，找到子串第一次出现的位置并返回，未找到则返回-1
  - split(分割字符/正则)：字符串分割方法，传入分割符，把字符串分割为子字符串数组，返回分割后的数组

- es6新增方法
  - includes(item)：返回布尔值，判断字符串是否包含某串字符。接受两个参数，第二个参数是起始的位置
  - startsWith(item)：返回布尔值，判断字符串开头是否包含某串字符
  - endsWith(item)：回布尔值，判断字符串结尾是否包含某串字符
  - repeat：返回一个新的字符串，将原字符串重复 n 次
  - padStart：返回新的字符串，在字符串前面补全，接受两个参数，第一个参数补全字符串长度，第二个参数补全的字符
  - padEnd：返回新的字符串，在字符串后面补全，接受两个参数，第一个参数补全字符串长度，第二个参数补全的字符
  - trimStart：去除前面空格
  - tiemEnd：去除后面空格
  - matchAll：返回一个正则表达式在当前字符串的所有匹配

```js
let str = "How are you Are are are";
// console.log(str.charAt(4));       //返回指定索引的字符串
// console.log(str.indexOf("are"));     // 返回指定字符串第一次出现的索引
// console.log(str.lastIndexOf("are")); // 返回指定字符串最后一次出现的索引
// console.log(str.substring(0,9));  // 返回指定区间的字符串
// console.log(str.slice(0,0));      // 返回指定区间的字符串，索引可以为负值
// console.log(str.substr(0,3));     // 返回指定长度的子串
// console.log(str.concat(" yes"," no"));
/* let num = 123;
console.log(num.toString()); */
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// console.log(str.match(/are/));
// console.log(str.replace(/are/g,"at"));
// console.log(str.split(/are/ig));
// console.log(str.includes("are"));
// console.log(str.endsWith("e"));
// console.log(str.repeat(2));
// console.log(str.match(/are/g));
```

### 3.模板字符串

```js
let name = "小明";
let age = 18;
let str = `我叫${name},我今年${age}岁`;
```

## 4.数组常用方法

- 常规方法
  - push()：从数组末尾插入数据，返回插入完成后数组的长度
  - pop()：从数组末尾取下数据，返回取下的数据
  - unshift()：从数组头部插入数据，返回插入完成后数组的长度
  - shift()：从数组头部取下数据，返回取下的数据
  - concat(arr2,数据1,数据2...)：拷贝原数组生成新数组。合并数组
  - slice[start,end)：提取数组中指定区间的数据
  - splice()：实现数组的插入，删除，替换：
    - 插入：3个参数，起始位置，0，插入的项。
    - 删除：2个参数，起始位置，删除的项数
    - 替换：任意参数，起始位置，删除的项数，插入任意数量的项数
  - join(分割符)：数组分割方法
  - reverse()：逆序输出数组
  - sort()：数组排序方法，默认按照ASCII值进行升序排序

  - indexOf(item)：返回对应元素的下标
  - copyWithin(target,[start,end))：在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

- 高阶函数

  - forEach(callback)：遍历数组
  - map(callback)：遍历数组，可返回对数组的item和index进行一定操作后的结果。
  - filter(callback)：返回数组中全部符合条件的元素
  - find(callbakc)：返回数组中第一个符合条件的元素
  - findIndex(callback)：返回数组中第一个符合条件的元素的下标
  - some(callback)：返回布尔值，查找数组中是否有符合条件的元素(找到第一个符合条件的元素便会停止循环)
  - every(callbakc)：返回布尔值，遍历数组中的每一个元素是否都符合条件
  - reduce(callback)：归并，为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素

