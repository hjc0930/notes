## SSG SSR模式的选择

SSG是在构建时进行生成，每个用户访问的都是同一份页面。

SSR是在运行时生成，每个用户访问时，服务器都会实时生成一份新的页面给用户

如果你的网站内容不经常变换，就选择SSG，否则就使用SSR

## NextJS SSG模式请求数据

在需要渲染的组件中，导出一个`getStaticProps`函数去请求数据，并且数据以`props`的形式返回给该组件

```jsx
export default function Home(props) {}

export async function getStaticProps() {
  const data = ...

  return {
    props: ...
  }
}
```