{
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }
    greet() {
      return 'Hello, ' + this.greeting
    }
  }
  let greeter = new Greeter('world')
}
// 
{
  class Animal {
    name: string
    constructor(name: string) { 
      this.name = name
    }
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`)
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) { 
      super(name)
    }
    move(distance: number = 5) {
      console.log('Slithering...')
      super.move(distance)
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(distance: number = 45) {
      console.log('Galloping...')
      super.move(distance)
    }
  }
  
  let sam = new Snake('Sammy')
  let tom: Animal = new Horse('Tommy')
  
  sam.move()
  tom.move(34)
}
// 
{
  let passcode = 'secret passcode'

  class Employee {
    private _fullName: string

    get fullName(): string {
      return this._fullName
    }

    set fullName(newName: string) {
      if (passcode && passcode == 'secret passcode') {
        this._fullName = newName
      }
      else {
        console.log('Error: Unauthorized update of employee!')
      }
    }
  }

  let employee = new Employee()
  employee.fullName = 'Bob Smith'
  if (employee.fullName) {
    console.log(employee.fullName)
  }
}
// 
{
  class Grid {
    static origin = {x: 0, y: 0}
  
    scale: number
  
    constructor (scale: number) {
      this.scale = scale
    }
  
    calculateDistanceFromOrigin(point: {x: number; y: number}) {
      let xDist = point.x - Grid.origin.x
      let yDist = point.y - Grid.origin.y
      return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
  }
  
  let grid1 = new Grid(1.0)  // 1x scale
  let grid2 = new Grid(5.0)  // 5x scale
  
  console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
  console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))
}
// 
{
  abstract class Department {
    name: string
  
    constructor(name: string) {
       this.name = name
    }
  
    printName(): void {
      console.log('Department name: ' + this.name)
    }
  
    abstract printMeeting(): void // ???????????????????????????
  }
  
  class AccountingDepartment extends Department {
    constructor() {
      super('Accounting and Auditing') // ?????????????????????????????????????????? super()
    }
  
    printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.')
    }
  
    generateReports(): void {
      console.log('Generating accounting reports...')
    }
  }
  
  let department: Department // ??????????????????????????????????????????
  department = new Department() // ??????: ????????????????????????????????????
  department = new AccountingDepartment() // ???????????????????????????????????????????????????
  department.printName()
  department.printMeeting()
  department.generateReports() // ??????: ???????????????????????????????????????
}
// 
{
  function add(x: number, y: number): number {
    return x + y
  }
  function buildName(firstName: string, lastName?: string): string {
    if (lastName)
      return firstName + ' ' + lastName
    else
      return firstName
  }
  let result1 = buildName('Bob');  // ???????????????
  let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, ????????????
  let result3 = buildName('Bob', 'Adams')  // OK
  function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ')
  }
  
  let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
}
// 
{
  interface Card {
    suit: string
    card: number
  }
  
  interface Deck {
    suits: string[]
    cards: number[]
  
    createCardPicker (this: Deck): () => Card
  }
  
  let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: ???????????????????????????????????????????????? deck ??????
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52)
        let pickedSuit = Math.floor(pickedCard / 13)
  
        return {suit: this.suits[pickedSuit], card: pickedCard % 13}
      }
    }
  }
  
  let cardPicker = deck.createCardPicker()
  let pickedCard = cardPicker()
  
  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}
// 
{
  function pickCard(x: {suit: string; card: number }[]): number
  function pickCard(x: number): {suit: string; card: number }
}
// 
{
  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
  }
}
// 
{
  interface GenericIdentityFn<T> {
    (arg: T): T
  }
  
  function identity<T>(arg: T): T {
    return arg
  }
  
  let myIdentity: GenericIdentityFn<number> = identity
}
// 
{
  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
}
// 
{
  interface Lengthwise {
    length: number
  }
  
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // OK
    return arg
  }
}
// 
{
  function getProperty<T, K extends keyof T> (obj: T, key: K ) {
    return obj[key]
  }
  
  let x = {a: 1, b: 2, c: 3, d: 4}
  
  getProperty(x, 'a') // okay
  getProperty(x, 'm') // error
}
// 
{
  function createZoo(): Animal[] {
    return [new Bee(), new Lion()]
  }
  
  let zoo = createZoo()
}
// 
{
  function extend<T, U> (first: T, second: U): T & U {
    let result = {} as T & U
    for (let id in first) {
      result[id] = first[id] as any
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        result[id] = second[id] as any
      }
    }
    return result
  }
  
  class Person {
    constructor (public name: string) {
    }
  }
  
  interface Loggable {
    log (): void
  }
  
  class ConsoleLogger implements Loggable {
    log () {
      // ...
    }
  }
  
  var jim = extend(new Person('Jim'), new ConsoleLogger())
  var n = jim.name
  jim.log()
}
// 
{
  interface Bird {
    fly()
    layEggs()
  }
  
  interface Fish {
    swim()
    layEggs()
  }
  
  function getSmallPet(): Fish | Bird {
    // ...
  }
  
  let pet = getSmallPet()
  pet.layEggs() // okay
  pet.swim()    // error
}
// 
{
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
  }
}
// 
{
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate (dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // error! ???????????? null ?????? undefined.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // error
}