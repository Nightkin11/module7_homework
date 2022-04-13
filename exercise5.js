// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

class Applaince {
    constructor (name) {
        this.name = name,
        this.getPower = function(power){
            return `Потребляемая мощность ${power} ватт`
        }
    }
}

Applaince.prototype.needSocket = function(socket) {
    if (socket == true) {
        return 'Работает только от розетки'
    } else if (socket == false) {
        return 'Работает на аккумуляторе'
    }
}

class Computers extends Applaince{
    constructor (name) {
        super(name);
    }
}

const tablePC = new Computers('Настольный ПК');
const tableLamp = new Applaince('Настольная лампа');
const mobilePhone = new Applaince('Сотовый телефон');
const laptop = new Computers('Ноутбук');


console.log(tablePC.name)
console.log(tablePC.getPower(600))
console.log(tablePC.needSocket(true))
console.log('')

console.log(tableLamp.name)
console.log(tableLamp.getPower(60))
console.log(tableLamp.needSocket(true))
console.log('')

console.log(mobilePhone.name)
console.log(mobilePhone.getPower(5))
console.log(mobilePhone.needSocket(false))
console.log('')

console.log(laptop.name)
console.log(laptop.getPower(150))
console.log(laptop.needSocket(false))