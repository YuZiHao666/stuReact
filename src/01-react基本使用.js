// 导包
import React from 'react' // 创建组件 虚拟 DOM 元素
import ReactDOM from 'react-dom' // =把创建好的 组件 和虚拟 DOM 放到页面上展示


// 创建虚拟 dom 元素 
// 参数 1 创建的元素的类型 字符串 表示元素名称  
// 参数 2 是一个对象或者 null 表示当前 dom 的属性
// 参数 3 子节点
// const myH1 =  React.createElement('h1',null,'这是一个大大的 H1')
// const myH1 =  React.createElement('h1',{id: 'myH1',title:'this is a h1'},'这是一个大大的 H1')
// const myDiv = React.createElement('div',null,'这是一个 div 元素',myH1)


// jsx 语言 符合 xml 规范的 js
const mydiv =

    <div id="mydiv" title="this is a div">
        这是一个 div 元素

        <h1>这是一个 H1 标签</h1>

    </div>

// 渲染  参数 1 要渲染的元素  参数 2 指定一个容器
ReactDOM.render(mydiv, document.getElementById('app'))