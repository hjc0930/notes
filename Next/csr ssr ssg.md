## CSR和SSR的区别

客户端渲染(CSR)一开始拿到的是空的HTML文件和一堆的JavaScript文件，只有执行我JS文件后，才能生成具体的页面内容

服务端渲染(SSR)一开始就能拿到生成好的HTML内容，也就是页面内容是在服务端生成好了

## SSG

静态网页生成(SSG)，在编译阶段就生成固定的HTML文件，在用户请求时不会在生成新的文件，所以可以直接上CDN来加速网页的访问。