# CSS属性初始化

```css
/*css 属性初始化 */
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}

fieldset,
img,
input,
button {
  /*fieldset组合表单中的相关元素*/
  border: none;
  padding: 0;
  margin: 0;
  outline-style: none;
}

ul,
ol {
  list-style: none;
}

input {
  padding-top: 0;
  padding-bottom: 0;
  font-family: "SimSun", "宋体";
}

select,
input {
  vertical-align: middle;
}

select,
input,
textarea {
  margin: 0;
}

textarea {
  resize: none;
}

/*防止多行文本框拖动*/
img {
  border: 0;
  vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
  border-collapse: collapse;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-decoration: none;
  font-weight: normal;
  font-size: 100%;
}

s,
i,
em {
  font-style: normal;
  text-decoration: none;
}

```