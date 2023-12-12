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

## using nivo
使用nivo创建交互式地图  
安装依赖  
``` bash
npm install @nivo/core @nivo/geo
```
为了减轻编写压力，交互式地图使用jsx语法

### 跨域访问
为了在开发环境中请求外部网络资源并且避免跨域限制，可以在next.config.js中配置
``` json
    async rewrites() {
        return [
            {
              source: '/files/:path*', // 匹配所有以 /files 开头的路径
              destination: 'files/:path*', // 代理到的目标地址
            },
          ];
    },
```

(files.lsmcloud.top 是lyl的资源buncket)

### 部署问题
- 避免循环依赖
- 页面要使用.page.tsx（在next.conifg里面配置了），因为next原则上不允许pages文件夹下面放components，next默认把它们都当成页面进行优化，导致build失败，所以配置了只有后缀为.page.tsx的才为页面