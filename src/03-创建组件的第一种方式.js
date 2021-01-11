// 导包
import React from 'react' // 创建组件 虚拟 DOM 元素
import ReactDOM from 'react-dom' // =把创建好的 组件 和虚拟 DOM 放到页面上展示


// 创建组件

// 第一种方式
function Hello(props) {
    // 如果在一个组件中 return 一个 null，则表示该组件是空的，什么都不渲染
    // return null
    return <div>这是 Hello 组件 ---》 一条叫{props.name}的狗，今年{props.age}岁，是{props.gender}性的</div>
}

const dog = {
    name: '旺财',
    age: 3,
    gender: '雄'
}

// 渲染  参数 1 要渲染的元素  参数 2 指定一个容器
ReactDOM.render(<div>

    {/* 直接把组件的名称，以标签形式，丢到页面上即可 */}
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}> </Hello> */}
    {/* es6 展开运算符 */}
    <Hello {...dog}> </Hello>

</div>, document.getElementById('app'))