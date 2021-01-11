import React from 'react' // 创建组件 虚拟 DOM 元素


export default function Hello(props) {
    // 如果在一个组件中 return 一个 null，则表示该组件是空的，什么都不渲染
    // return null
    return <div>这是 Hello 组件 ---》 一条叫{props.name}的狗，今年{props.age}岁，是{props.gender}性的</div>
}