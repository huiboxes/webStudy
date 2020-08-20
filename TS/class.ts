class Animal { 
    name: string
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
// console.log(snake);
// console.log(snake.name);
// console.log(snake.run());
class Dog extends Animal { 
    bark() {
        return `${this.name} is barking`
    }
}
const dog = new Dog('ggg')
// console.log(dog.run());
class Cat extends Animal{
    constructor(name) { 
        super(name)
        console.log(this.name);
    }
    run() { 
        return 'Meow' + super.run()
    }
}
let maomao = new Cat('maomao')
console.log(maomao);
console.log(maomao.run());


