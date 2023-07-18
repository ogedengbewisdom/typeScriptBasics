// Primitive: number string boolean
// More complex type: array, object
// function types, parameters


// Primitive 

let age:number;
age= 23;
let hobbies:string;
hobbies = "Football"

let isInstructor:boolean;
isInstructor = false

let users: string[];
users = ["ram", "goat"];

type Person = {
    name: string;
    age: number;
}

let people: Person[]

people =[ {
    name: "sadiq",
    age: 56
}]

let students: {
    name: string;
    course: string;
    marNo: number
}[];

students = [
    {name: "wisdom", course: "Bch 201", marNo: 14},
    {name: "grace", course: "Bch 201", marNo: 60},
]

let course: string | number = "Typescript course";
course = 1234

const joinArray = <T>(array: T[], value:T) => {
    const newArray = [value, ...array]
    return newArray
}

// const joined = joinArray([2,3,4], 1) 

const joined = joinArray(["a", "b"], "d")

const checked = joined[0].split("")

console.log(checked)