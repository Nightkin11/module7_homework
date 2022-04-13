// // Задание 1
// const person ={
//     name: 'Max',
//     surname: `Efimov`,
//     age: 35,
// }

// function func() {
//     for (let key in person)
//     console.log(key)
// }

// func(person);


// // Задание 2
// const person = {
//     name: 'Max',
//     surname: `Efimov`,
//     age: 35,
// }

// function func(str, obj) {
//     return str in obj;
// }

// console.log(func('name', person));


// // Задание 3
// function func() {
//     let obj = Object.create(null);
//     return obj
// }

// console.log(func())


// // Задание 4
// function Applaince(name) {
//     this.name = name,
//     this.getPower = function(power){
//         console.log(`Потребляемая мощность ${power} ватт`)
//     }
// }

// Applaince.prototype.needSocket = function(socket) {
//     if (socket == true) {
//         console.log('Работает только от розетки')
//     } else if (socket == false) {
//         console.log('Работает на аккумуляторе')
//     }
// }

// function Computers(name) {
//     this.name = name
// }

// Computers.prototype = new Applaince()

// const tablePC = new Computers('Настольный ПК');
// const tableLamp = new Applaince('Настольная лампа');
// const mobilePhone = new Applaince('Сотовый телефон');
// const laptop = new Computers('Ноутбук');


// console.log(tablePC.name);
// tablePC.getPower(600);
// tablePC.needSocket(true);
// console.log('')

// console.log(tableLamp.name);
// tableLamp.getPower(60);
// tableLamp.needSocket(true);
// console.log('')

// console.log(mobilePhone.name);
// mobilePhone.getPower(5);
// mobilePhone.needSocket(false);
// console.log('')

// console.log(laptop.name);
// laptop.getPower(150);
// laptop.needSocket(false);


// // Задание 5
// class Applaince {
//     constructor (name) {
//         this.name = name,
//         this.getPower = function(power){
//             return `Потребляемая мощность ${power} ватт`
//         }
//     }
// }

// Applaince.prototype.needSocket = function(socket) {
//     if (socket == true) {
//         return 'Работает только от розетки'
//     } else if (socket == false) {
//         return 'Работает на аккумуляторе'
//     }
// }

// class Computers extends Applaince{
//     constructor (name) {
//         super(name);
//     }
// }

// const tablePC = new Computers('Настольный ПК');
// const tableLamp = new Applaince('Настольная лампа');
// const mobilePhone = new Applaince('Сотовый телефон');
// const laptop = new Computers('Ноутбук');


// console.log(tablePC.name)
// console.log(tablePC.getPower(600))
// console.log(tablePC.needSocket(true))
// console.log('')

// console.log(tableLamp.name)
// console.log(tableLamp.getPower(60))
// console.log(tableLamp.needSocket(true))
// console.log('')

// console.log(mobilePhone.name)
// console.log(mobilePhone.getPower(5))
// console.log(mobilePhone.needSocket(false))
// console.log('')

// console.log(laptop.name)
// console.log(laptop.getPower(150))
// console.log(laptop.needSocket(false))