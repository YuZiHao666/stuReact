// 导包
import React from 'react' // 创建组件 虚拟 DOM 元素
import ReactDOM from 'react-dom' // =把创建好的 组件 和虚拟 DOM 放到页面上展示

let a = 10
let b = 15
let str1 = '我是字符串'
let bool1 = false
let title = '999'
const h1 = <h1>我是一个 h1</h1>
const arr1 = [
    <h2>我是一个 h2</h2>,
    <h3>我是一个 h3</h3>
]

const arrstr = ['张三', '李四', '王五', '赵六']
const nameArr = []
arrstr.forEach(
    item => {
        const temp = <h1>{item + '  ----'}</h1>
        nameArr.push(temp)
    }
)

// 渲染  参数 1 要渲染的元素  参数 2 指定一个容器
ReactDOM.render(
    <div>
        这是一个 div
    <hr />
        a+b的值是{a + b}
        <hr />
        a+b的值是{a + 2}
        <hr />
        str1的值是 {str1}
        <hr />
        {bool1 ? '条件为真' : '条件为假'}
        <hr />
        <p title={title}>我是 p</p>
        <hr />
        {h1}
        {/* {arr1} */}
        <hr />
        {/* {arrstr} */}
        <hr />
        {/* {nameArr} */}
        <hr />
        {arrstr.map(item => <h3>{item + ' ~'}</h3>)}
    </div>
    , document.getElementById('app'))