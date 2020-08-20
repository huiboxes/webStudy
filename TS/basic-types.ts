let isDone: Boolean = false

let age: number = 0b1110

let firstname: string = 'hui'

let u: undefined = undefined
let n: null = null
// undefined 和 null是所有类型的子类型

let notSure: any = 4
notSure = true
notSure = `maybe`

let numberOrString: number | string = 234
numberOrString = 'sdf'

// 不允许出现其它类型的数组
let arrOfNumbers: number[] = [1, 2, 3, 4]

let user: [string, number?] = ['hui', 20]
user = ['hui']
