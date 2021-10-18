let id: number = 5
// Definining basic types

let company: string = 'Fart Factory'
let age: number = 41
let body: boolean = true

// Definining arrays

let arr: number[]
let arrTwo: any[]

//Tuples : Must be in the proper order

let person: [number, boolean, string]

person = [1, true, company]


//Unions

let idTwo: string | number = 22

//Enums : defines a set of named constants

enum DirectionOne {
    up,
    down,
    left,
    right
}
// Objects

const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "Dave"
}

type Player = {
    id: number
    name: string
}

const player: Player = {
    id: 1,
    name: 'Ted'
}

//Functions

function addNum(x: number, y: number): number {
    return x + y
}

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Bella'
}

user1.age = 5

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y

class Person {
    private id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const dave = new Person(3, 'dave')

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const ted = new Employee(3, 'Danny', 'Janitor')

console.log(ted.register())


//Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

