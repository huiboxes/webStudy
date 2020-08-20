function add(x:number, y:number,z?: number):number { 
    return x + y
}
// 可选参数不能放在普通参数前面
let result = add(2, 3)
console.log(result);

