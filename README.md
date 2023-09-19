This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 格式化

```shell
npm run prettier
```

```json
{
  "tabWidth": 2,                 // 设置制表符的宽度为2个空格
  "useTabs": false,              // 禁用使用制表符进行缩进，改为使用空格
  "semi": false,                 // 禁用在语句末尾使用分号
  "singleQuote": true,           // 使用单引号作为字符串的引号风格
  "trailingComma": "all",        // 在对象或数组的最后一个元素后面添加逗号
  "arrowParens": "avoid",        // 在箭头函数参数周围只有一个参数时省略圆括号
  "bracketSpacing": true,        // 在对象字面量的花括号内部添加空格
  "endOfLine": "lf"              // 使用 LF（换行符）作为行结束符
}
```

## emotion - CIJ 的使用
使用emotion,vscode推荐插件：vscode-styled-components
参照Mask组件 

1.  
```css
export const ParticipantAvatar = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: ${(props: { index: number }) => props.index * 16}px;
`
```
2.  

```css
export const HeaderNavStyle = styled.div<{
  scrollDown: boolean
}>`
  position: fixed;
  width: 100%;
  height: 48px;
  background-color: #fafafa;
  z-index: 10;
  transition: all 0.3s;
  transform: translateY(${({ scrollDown }) => (scrollDown ? -100 : 0)}%);
`
```