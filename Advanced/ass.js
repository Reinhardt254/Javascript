 // =====================Nested functions=============================
 let a=10 //global varriable
function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(a, b, c)
    }
    inner()
}
outer()

//===================closure====================================


function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()

// //=======================Function currying========================
 function sum(a, b, c){
    return a+b+c
 }
console.log(sum(2,3,4))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}
const curriedsum = curry(sum)
console.log(curriedsum(2)(3)(7))

const add2 = curriedsum(2)
const add3 = add2(3)
const add7 = add3(7)
console.log(add7)

// //=============================this key word========================
//=(1)
function sayMyName(name) {
    console.log(`my name is ${name}`)
}
sayMyName("Walter White")
sayMyName("Heisenberg")

// ===============implicit====================================
const person = {
    name: 'vishwas',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName() //implicit

function sayMyName(){ //Explicit
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

// =(2)==============Explicit=====================================
// ===========new binding=====================
// ===========default binding==========================






//=================prototype=====================================

//==================classes======extends==super==============
class Person{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName(){
        return this.firstName + ''+ this.lastName
    }
}
const classP1 = new Person('Bruce','Wyne')
console.log(classP1.sayMyName())

class Superhero extends person{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperhero = true
    }
fightcrime() {
    console.log('fighting crime')
}
}
const batman = new Superhero('Bruce', 'Wayne')
console.log(batman.sayMyName())

// // //==================iterables and iterators========================== 


// itterable for of loop

const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step===1){
                    return{value: 'Hello', done: false}
                }else if (step === 2){
                    return { value: 'World', done: false
                    }
                }
               return {value: undefined, done: true}
            }
        }
        return iterator
    }
}
for(const word of obj){
    console.log(word)
}









 
//==================GENERATORS=====================

// function normalFunction(){}
function* generatorFunction(){
    yield 'Hello'
    yield 'world'
}
 
const generatorobject = generatorFunction()
for(const word of generatorobject){
    console.log(word)
}











