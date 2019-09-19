## About
计算翻页组件底部页码
## How to use
- 安装
```bash
npm i 'ipageBarCompute'
```

```javascript
let Pages   = require("ipageBarCompute");
/**
* 100是总记录条数
* 10 每页显示的记录条数
*/
let pageObj = new Pages(100, 10);
//得到底部页码
console.log(pageObj.getPageViewable(7));
//结果 [ 1, '…', 4, 5, 6, 7, 8, 9, '…', 100 ]
```