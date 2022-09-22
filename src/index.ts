/* 
TSC COMMANDS
1. tsc --init, to create a tsconfig file
2. tsc <name-of-file>, to compile a file to js
3. tsc --watch, to watch for changes in the whole directory,
    and compile them

*/
//BASIC TYPES
let username: string = 'Hello World'
const age: number = 45
let isActive: boolean = false

//declaring the type of the elements an array can contain 
const array: number[] = [23, 45, 6, 8]

//declaring that any type elements can be stored in the array
//useful when you do not know the types of the elements, the array would hold
let arr: any[] = [12, 'name', true]

//speciying the different types of elements in an array.
let tuple: [string, number, boolean] = ['jame', 12, true]

//An array of tuples
let tupleArray: [number, string][] = [
    [12, 'paid'],
    [2, 'unpaid'],
    [234, 'paid']
]
console.log(tupleArray);

//create a set of numeric or string constants
enum Directions {
    up = 1,
    down, 
    right, 
    left
}
console.log(Directions['left'])// prints 4
/**
 * Enums are used to create set of string or numeric constants,
 * by default enums start from 0 and keep increamenting for each property
 */

//Unions
//Allows a variable to be any range of specified data types
let result: number | string = 23
result = 'hello world'

//Objects
let user: {
    id: number,
    name: string
} = {
    id: 12,
    name: 'john'
}

//can be better rewritten as, with the use of custom types
type User = {
    id: number,
    name: string
}

let newUser: User = {
    id: 13,
    name: 'samuel'
}

//Type assertion, tells the compile to treat a certain variable as a type
let cid: any = '234'
let customerId = <number>cid
//OR
customerId = cid as number

//Type assertion is all about declaring a variable as a type,
//assigning the variabes value to another variable (variable2), and asserting,
//that variable2 should be used as a specific type.

//functions
function addNum(x: number, y:number): number {
    return x + y
}
//x: number, y: number => specifies data types of the parameters
//(parameters): number => specifies the return type of the function
console.log(addNum(2, 3))

//A function with a union '|' data type parameter, and no return type.
function log(message: string | number): void{
    console.log(message)
}

//Interface, usseful for creating objects
interface UserInterface {
    readonly matricId: number, //===> 'readonly' makes the property immutable, i.e it cannot be changed
    group: string,
    age?: number, //===> '?' makes the age property optional
}
//using the user interface a type
const user3: UserInterface = {
    matricId: 3457,
    group: 'B',
}
// user3.matricId = 2645 ===> throws error because matricId is set to readonly

//you can not use interfaces with primitive or unions,
// like you would with type, example

// interface PageInterface = string ===> throws error, because interface is not used with primitive types
// const page1: PageInterface = 'hello world'

//Interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
console.log(add(4, 6))

class Person {
    private id: number // ==> Private property, it can only be accessed within the class
    protected name: string // ===> Protected property, it can only be accessed within the class and sub classses

    constructor(id: number, name: string){ // ===> constructor to instantiate the class
        this.id = id
        this.name = name
    }

    register(): string {
        return `user id: ${this.id} and username: ${this.name} is now registered.`
    }
}
const brad =  new Person(254, 'mosope')
console.log(brad.register())
// brad.regi 
// console.log(brad.name) ===> throws error because name is only accessible within the class or subclasses

//Create a class with an interface
interface NewPersonInterface {
    id: number,
    name: string,
    register(): string
}

class NewPersonClass implements NewPersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(): string {
        return `user id: ${this.id} and username: ${this.name} is now registered.`
    }
}

//Inheritance or subclasses
class Employee extends NewPersonClass{
    position: string
    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const newEmployee = new Employee(23435, 'shawn', 'xyz')
console.log(newEmployee.register()) //calls the register method inherited from the newPersonClass


//GENERICS, allows us build reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['sope', 'john', 'king'])
/*
    Generics employ the use of a data type placeholder 'T'
    the getArray functon simply takes in an array of elements of type 'T',
    and prints them out. Remember 'T' is a data type placeholder.

    so when the function is called and the array is passed to the getArray() function
    as a parameter, the '<number>' or '<string>' after the function name,
    specifies the data type of the elements of the array, 
    which then replaces the 'T' placeholder in execution.

*/
