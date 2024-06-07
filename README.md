# ce
Small and useful custom elements

### Markdown
Note: requires [Snarkdown](https://github.com/developit/snarkdown) to be installed.
```js
import markdown from '@tagaroggu/ce';
const instance = new markdown();
// or use document.createElement
import '@tagaroggu/ce';
const instance = document.createElement('tagaroggu_ce-markdown');

instance.innerText = 'Hello, *World*!';
console.log(instance.shadowRoot.innerHTML) // 'Hello, <em>World</em>!'
```