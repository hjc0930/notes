## 1.深拷贝和浅拷贝

- 浅拷贝：创建一个对象，这个对象有着原始对象的一份精确拷贝。如果属性是基本数据类型，拷贝的就是基本类型的值，如果是引用类型，拷贝的就是内存地址，所以如果其中一个对象改变了这个地址，就会影响到另一个对象

- 深拷贝：将一个对象从一个内存中完整地拷贝出来，从堆内存中开辟一个新的区域存放这个新对象，新对象的修改不会影响原对象

### 浅拷贝实现

- Object.assign()
- 展开运算符(...)
- Array.prototype.slice()

### 深拷贝实现

- JSON.parase(JSON.stringify(obj))
  - 会忽略undefined Symbol
  - 不能序列化函数
  - 不能解决循环引用的对象
  - 不能正确处理 new Date()
  - 不能处理正则

- 手写

  ```js
  function deepClone(obj) {
      let res;
      if(Object.prototype.toString.call(obj).slice(8,-1) === 'Object') {
          res = {}
      } else if(Array.isArray(obj)) {
          res = []
      } else {
          return obj
      }
      
      for(const key in obj) {
          res[key] = deepClone(obj[key])
      }
      return res;
  }
  ```

  

