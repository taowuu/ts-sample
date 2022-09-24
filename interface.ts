// interface LabelledValue {
//   label: string
// }
// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label)
// }
// let myObj = {size: 10, label: 'Size 10 Object'}
// printLabel(myObj)
// 
// interface Square {
//   color: string,
//   area: number
// }
// interface SquareConfig {
//   color?: string
//   width?: number
// }
// function createSquare (config: SquareConfig): Square {
//   let newSquare = {color: 'white', area: 100}
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }
// let mySquare = createSquare({color: 'black'})
// 
// interface Point {
//   readonly x: number
//   readonly y: number
// }
// let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error!
// 
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }
// let mySearch: SearchFunc
// mySearch = function(source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1
// }
// 
// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray[2] = 'Mallory'; // error!
// 
// interface ClockInterface {
//   currentTime: Date
//   setTime(d: Date)
// }
// class Clock implements ClockInterface {
//   currentTime: Date
//   setTime(d: Date) {
//     this.currentTime = d
//   }
//   constructor(h: number, m: number) { }
// }
// 
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface
// }
// interface ClockInterface {
//   tick()
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute)
// }
// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log('beep beep')
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log('tick tock')
//   }
// }
// let digital = createClock(DigitalClock, 12, 17)
// let analog = createClock(AnalogClock, 7, 32)
// 
// interface Shape {
//   color: string
// }
// interface PenStroke {
//   penWidth: number
// }
// interface Square extends Shape, PenStroke {
//   sideLength: number
// }
// let square = {} as Square
// square.color = 'blue'
// square.sideLength = 10
// square.penWidth = 5.0
// 
// interface Counter {
//   (start: number): string
//   interval: number
//   reset(): void
// }
// function getCounter(): Counter {
//   let counter = (function (start: number) { }) as Counter
//   counter.interval = 123
//   counter.reset = function () { }
//   return counter
// }
// let c = getCounter()
// c(10)
// c.reset()
// c.interval = 5.0
// 
// class Control {
//   private state: any
// }
// interface SelectableControl extends Control {
//   select(): void
// }
// class Button extends Control implements SelectableControl {
//   select() { }
// }
// class TextBox extends Control {
//   select() { }
// }
// // Error：“ImageC”类型缺少“state”属性。
// class ImageC implements SelectableControl {
//   select() { }
// }
