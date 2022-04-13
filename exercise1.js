// Задание 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.
const person ={
    name: 'Max',
    surname: `Efimov`,
    age: 35,
}

function func() {
    for (let key in person)
    console.log(key)
}

func(person);