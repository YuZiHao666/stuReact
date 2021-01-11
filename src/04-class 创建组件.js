// es6 class关键字是实现面对对象编程的新形式
function Person(name, age) {
    this.name = name
    this.age = age

}

const p1 = new Person('梓豪', 18)
console.log(p1)


// 分割线
console.log('---------------------')


// 创建了一个动物类
class Animal{
    // 构造器
    // 每个类中都有一个构造器，如果我们没有手动指定构造器，那么可以认为类的内部有个空的构造器
    // 构造器的作用就是当 new 这个类的时候必然会优先执行构造器中的 code
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

const a1 = new Animal('Tom',3)
console.log(a1)