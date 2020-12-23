## useContext

**useContext用于父子组件的传值**

```tsx
// 父组件
import React from 'react';
import IndexPages from './IndexPages';

export const CountContext = React.createContext({});

const Index: React.FC = () => {
  const [count,setCount] = React.useState<number>(0);
  return(
    <div>
      <CountContext.Provider value={[count,setCount]}>
        <IndexPages />
      </CountContext.Provider>
    </div>
  )
}

export default Index;

```

```tsx
// 子组件
import React from 'react';
import { CountContext } from './Index';

const IndexPages: React.FC = () => {
  const [count, setCount]: any = React.useContext(CountContext);
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}

export default IndexPages

```

