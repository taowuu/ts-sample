// let isDone: boolean = false
// 
// let decLiteral: number = 20
// let hexLiteral: number = 0x14
// let binaryLiteral: number = 0b10100
// let octalLiteral: number = 0o24
// 
// let name: string = 'bob'
// name = 'smith'
// 
// let name: string = `Yee`
// let age: number = 37
// let sentence: string = `Hello, my name is ${ name }.

// I'll be ${ age + 1 } years old next month.`
// 
// let list: number[] = [1, 2, 3]
// let list: Array<number> = [1, 2, 3]
// 
// let x: [string, number]
// x = ['hello', 10] // OK
// x = [10, 'hello'] // Error
// 
// console.log(x[0].substr(1)) // OK
// console.log(x[1].substr(1)) // Error, 'number' 不存在 'substr' 方法
// 
// x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()) // OK, 'string' 和 'number' 都有 toString
// x[6] = true // Error, 布尔不是(string | number)类型
// 
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// 
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green
// 
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green
// 
// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2]
// console.log(colorName)  // 显示'Green'因为上面代码里它的值是2
// 
// let notSure: any = 4
// notSure = 'maybe a string instead'
// notSure = false // 也可以是个 boolean
// 
// let list: any[] = [1, true, 'free']
// list[1] = 100
// 
// function warnUser(): void {
//   console.log('This is my warning message')
// }
// 
// let unusable: void = undefined
// 
// let u: undefined = undefined
// let n: null = null
// 
// // 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message)
// }
// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed")
// }
// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }
// 
// declare function create(o: object | null): void
// create({ prop: 0 }) // OK
// create(null) // OK
// create(42) // Error
// create('string') // Error
// create(false) // Error
// create(undefined) // Error
// 
// let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length
// 
// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length
