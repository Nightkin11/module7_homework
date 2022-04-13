// Задание 4
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Applaince(name) {
    this.name = name,
    this.getPower = function(power){
        console.log(`Потребляемая мощность ${power} ватт`)
    }
}

Applaince.prototype.needSocket = function(socket) {
    if (socket == true) {
        console.log('Работает только от розетки')
    } else if (socket == false) {
        console.log('Работает на аккумуляторе')
    }
}

function Computers(name) {
    this.name = name
}

Computers.prototype = new Applaince()

const tablePC = new Computers('Настольный ПК');
const tableLamp = new Applaince('Настольная лампа');
const mobilePhone = new Applaince('Сотовый телефон');
const laptop = new Computers('Ноутбук');


console.log(tablePC.name);
tablePC.getPower(600);
tablePC.needSocket(true);
console.log('')

console.log(tableLamp.name);
tableLamp.getPower(60);
tableLamp.needSocket(true);
console.log('')

console.log(mobilePhone.name);
mobilePhone.getPower(5);
mobilePhone.needSocket(false);
console.log('')

console.log(laptop.name);
laptop.getPower(150);
laptop.needSocket(false);