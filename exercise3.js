// Задание 3
// Написать функцию, которая создает пустой объект, но без прототипа.
function func() {
    let obj = Object.create(null);
    return obj
}

console.log(func())