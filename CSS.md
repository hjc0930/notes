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



