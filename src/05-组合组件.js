// 导包
import React from 'react' // 创建组件 虚拟 DOM 元素
import ReactDOM from 'react-dom' // =把创建好的 组件 和虚拟 DOM 放到页面上展示


function Name(props) {
	return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
	return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
	return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
	return (
	<div>
		<Name name="菜鸟教程" />
		<Url url="http://www.runoob.com" />
		<Nickname nickname="Runoob" />
	</div>
	);
}

// 渲染  参数 1 要渲染的元素  参数 2 指定一个容器
ReactDOM.render(<App />, document.getElementById('app'))