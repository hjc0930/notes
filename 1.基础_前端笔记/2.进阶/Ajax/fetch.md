## fetch是浏览器自带的对ajax简单的封装

### get

```js
fetch(url,{data})
```

### post

```js
fetch(url,{
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({data})
})
```

