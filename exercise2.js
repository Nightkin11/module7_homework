// Задание 2
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
const person = {
    name: 'Max',
    surname: `Efimov`,
    age: 35,
}

function func(str, obj) {
    return str in obj;
}

console.log(func('name', person));