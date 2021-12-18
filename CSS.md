## 1.Flex

Flex布局是将元素进行水平或者垂直排列的一维布局方案，通过设置`display`为`flex`或`inline-flex`进行开启。采用Flex布局的容器，默认存在两根轴，水平的主轴和垂直的交叉轴，容器内的子元素默认成为容器的成员，称为项目。主轴的开始位置与边框的交叉点称为`main start`，结束位置称为`end start`，交叉轴的开始位置叫`cross start`，结束位置叫`cross end`

Flex项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

Flex属性分为两部分，一部分作于于容器，另一部分作于于容器内的项目

- 容器属性

| 属性            | 功能                                                         |
| --------------- | ------------------------------------------------------------ |
| flex-direction  | 决定主轴的方向 `row | column | row-reverse | column-reverse` |
| flex-wrap       | 决定主轴上的项目排列不下时，是否换行排列 `nowrap | wrap | wrap-revers` |
| flex-flow       | flex-direction和flex-wrap的简写形式。默认值：`row nowrap`    |
| justify-content | 定义了项目在主轴上的对齐方式和额外空间的分配方式 `flex-start | flex-end | center | space-between | space-around | space-evenly` |
| align-item      | 决定项目在交叉轴上的对齐方式 `stretch | flex-start | flex-end | center | basline` |
| align-content   | 定义了多根轴线的对齐方式，设置了flex-wrap属性为wrap后align-content属性才能生效 `stretch | flex-start | flex-end | center | space-between | space-around` |

- 项目属性

| 属性        | 功能                                                         |
| ----------- | ------------------------------------------------------------ |
| order       | 定义项目的排列顺序，数值越小，排列越靠前，默认为0，可以是负数 |
| flex-grow   | 扩展规则，规定flex容器中剩余的空间应该拿出多少分配给项目，默认为0，最大值是1，超过1按照1来扩展 |
| flex-shrink | 规定了flex项目的收缩规则，flex项目仅在默认宽度之和大于容器的时候才会发生收缩，默认值是1 |
| flex-basis  | 指定了子项在容器主轴方向上的初始大小，优先级高于自身的宽度width，默认值是auto |
| flex        | 该属性是flex-grow flex-shrink flex-basis的简写，默认值是0 1 auto，后两个值可选 |
| align-self  | 该属性用于设置单个项目在交叉轴的对齐方式，可覆盖align-item属性 `stretch | flex-start | flex-end | center | baseline` |

## 2.CSS选择器

| 选择器         | 格式          | 优先级权重 |
| -------------- | ------------- | ---------- |
| id选择器       | #id           | 100        |
| 类选择器       | #class        | 10         |
| 伪类选择器     | li:last-child | 10         |
| 属性选择器     | a[href="aaa"] | 10         |
| 标签选择器     | div           | 1          |
| 伪元素选择器   | li::after     | 1          |
| 相邻兄弟选择器 | h1+p          | 0          |
| 子元素选择器   | ul > li       | 0          |
| 后代选择器     | li a          | 0          |
| 通配符选择器   | *             | 0          |

**对于样式的优先级：**

- !important：优先级最高
- 内联样式：1000
- id选择器：100
- 类，伪类，属性选择器：10
- 元素选择器，伪元素选择器：1
- 通配符选择器，后代选择器，兄弟选择器：0

## 3.规则

- @namespace：告诉CSS引擎必须考虑XML命名空间
- @media：媒体查询
- @page：描述打印文档时布局的变化
- @font-face：描述将下载的外部字体
- @keyframes：描述CSS动画关键帧

- @import：用于告诉CSS引擎引入一个外部样式表

**link和@import的区别**

- link是HTML标签，除了能导入CSS外，还可以导入其他资源，比如图片，脚本和字体等；而@import是CSS语法，只能用来导入CSS
- link导入的样式会在页面加载时同时加载，@import导入的样式需要等页面加载完成后再加载
- link没有兼容性问题，@import不兼容ie5以下
- link可以通过js操作访问

## 4.继承性

- 可继承属性：font-family font-style font-size font-weight color
- 不可继承属性：weigth height margin padding

## 5.清除浮动

浮动的元素会脱离文档流，导致父元素高度塌陷

- 通过BFC清除浮动

```css
.parent {
    overflow: hidden;
}
```

- 通过clear清除浮动

```css
.clearfix {
    zoom: 1;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

## 6.消除浏览器默认样式

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

## 7.长文本处理

- 字符超出部分换行

  ```css
  overflow-wrap: break-word;
  ```

- 字符超出部分使用连接字符

  ```css
  hyphens: auto;
  ```

- 单行文本超出省略

  ```css
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ```

- 多行文本超出省略

  ```css
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box-;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ```

## 8.line-height和height的区别

height就是元素的高度值

line-height是每一行文字的高度，如果文字换行，则整个格子高度会增大

## 9.BFC

块级格式化上下文，它是一个独立容器，决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

**创建规则：**

- 根元素
- float不是none的元素
- 绝对定位的元素(position为absolute或fixed)
- display取值为inline-block table-cell table-caption inline-flex之一的元素
- overflow不是visible的元素

**作用：**

- 清除浮动
- 阻止父子元素的margin折叠

## 10.居中方式

**单行的文本、inline 或 inline-block 元素**

- 水平居中

```css
text-align: center
```

- 垂直居中

```css
.single-line {
    padding-top: 10px;
    padding-bottom: 10px;
}
// 或
.single-line {
    height: 100px;
    line-height: 100px;
}
```

**固定宽高的块级盒子**

- absolute+负margin

```css
.parent {
    position: relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -50px 0 0 -50px
}
```

- absolute + margin auto

```css
.parent {
    position: relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

- absolute + calc

```cs
.parent {
    position: relative;
}
.child {
    width: 100px;
    height: 100px;
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px)
}
```

**不固定宽高的块级盒子**

- absolute + transform

```css
.praent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
```

- line-height + vertical-align

```css
.parent {
    line-height: 150px;
    text-aligin: center;
}
.child {
    display: inline-block;
    line-height: initial;
    vertical-align: middle;
}
```

- writing-mode

```css
.parent {
    writing-mode: vertical-lr;
    text-align: center;
}
.middle {
    display: inline-block;
    writing-mode: horizontal-tb;
    width: 100%
}

.child {
    display: inline-block;
}
```

- table-cell

```css
.parent {
    display: table-cell;
    vertical-aligin:middle;
    text-align: center;
}
.child {
    display: inline-block;
}
```

- flex 

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center
}
```

- grid

```css
.parent {
    display: grid;
}
.child {
    justify-self: center;
    align-self: center;
}
```

## 11.常用布局

### 双栏布局(边栏定宽主栏自适应)

- float+overflow(BFC原理)

  ```css
  aside {
      float: left;
      width: 200px
  }
  main {
      overflow: hidden;
  }
  ```

- float+margin

  ```css
  aside {
      float: left;
      width: 200px;
  }
  main {
      margin-left:200px
  }
  ```

- flex

  ```css
  layout {
     display: flex;
  }
  aside {
      width:200px
  }
  main {
      flex-grow: 1
  }
  ```

- grid

  ```css
  layout {
      display: grid;
      grid-template-columns: 200ox auto;
  }
  ```

### 三栏布局(两侧定宽主栏自适应)

- 圣杯布局

  ```css
  layout {
      padding: 0 200px;
  }
  main {
      float: left;
      width: 100%;
  }
  aside {
      float: left;
      width: 200px;
  }
  left {
      position: relative;
      left: -200px;
      margin-left: -100%;
  }
  right {
      position: relative;
      right: -200px;
      margin-left: -200px
  }
  ```

- 双飞翼布局

  ```css
  main {
      float: left;
      width: 100%;
  }
  .inner {
      margin: 0 200px;
  }
  aside {
      float: left;
      width: 200px;
  }
  .left {
      margin-left: -100%;
  }
  .right {
      margin-left: -200px;
  }
  ```

- float+overflow

  ```css
  aside {
      width: 200px;
  }
  left {
      float: left;
  }
  right {
      float: right;
  }
  main {
      overflow: hidden;
  }
  ```

- flex

  ```css
  layout {
      display: flex;
  }
  aside {
      width: 200px;
  }
  main {
      flex-grow: 1;
  }
  ```

- grid

  ```css
  layout {
      display: grid;
      grid-template-columns: 200px auto 200px
  }
  ```

## 12.Grid

给`<div>`这类块状元素元素设置`display:grid`或者给`<span>`这类内联元素设置`display:inline-grid`，Grid布局即创建

此时该div就是`grid容器`，其子元素称为`grid子项`

| 容器属性              | 子项属性          |
| --------------------- | ----------------- |
| grid-template-columns | grid-column-start |
| grid-template-rows    | grid-column-end   |
| grid-template-areas   | grid-row-start    |
| grid-template         | grid-row-end      |
| grid-column-gap       | grid-column       |
| grid-gap              | grid-row          |
| justify-items         | grid-area         |
| align-items           | justify-self      |
| place-items           | align-self        |
| justify-content       | place-self        |
| align-content         |                   |
| place-content         |                   |
| grid-auto-columns     |                   |
| grid-auto-rows        |                   |
| grid-auto-flow        |                   |
| grid                  |                   |

## 13.nth-of-type和nth-child的区别

- nth-of-type：`:nth-of-type(n)` 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素。n 可以是数字、关键词或公式

  ```html
  <style>
  div>p:nth-of-type(2){
      color:red;
  }
  </style>
  <div>
      <p>我是第1个段落</p>
      <p>我是第2个段落</p><!--符合条件：1、是特定元素类型<p>，2、是父元素<div>的第二个<p>元素。这里被选择，会变成红色-->
      <p>我是第3个段落</p>
  </div>
  <div>
      <p>我是第1个段落</p>
      <blockquote>第1个引用</blockquote>
      <p>我是第2个段落</p><!--符合条件：1、是特定元素类型<p>，2、是父元素<div>的第二个<p>元素。这里被选择，会变成红色-->
      <p>我是第3个段落</p>
  </div>
  ```

  

- nth-child：`:nth-child(n)` 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。n 可以是数字、关键词或公式。

	注意：如果第 N 个子元素与选择的元素类型不同则样式无效！
	
	```html
	<style>
	div>p:nth-child(2){
	    color:red;
	}
	</style>
	<div>
	    <p>我是第1个段落</p>
	    <p>我是第2个段落</p><!--符合条件：1、是<p>元素，2、父元素<div>的第二个元素。这里被选择，会变成红色。-->
	    <p>我是第3个段落</p>
	</div>
	<div>
	    <p>我是第1个段落</p>
	    <span>我是第1个文本</span><!--不符合条件：不是<p>元素，没有被选择-->
	    <p>我是第2个段落</p>
	</div>
	```
