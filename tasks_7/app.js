//1. Написать функцию, которая принимает два числа и возращает результат их умножения
// let x = prompt('Birinci ededi daxil edin')
// let y = prompt('Ikinci ededi daxil edin')

// function multiplyNumbers() {
//     alert(Number(x)*Number(y))
// // 
// multiplyNumbers()

//2. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

// let firstName = prompt('Adinizi daxil edin');
// let lastName = prompt('Soyadinizi daxil edin');
// let Age = prompt('Yasinizi daxil edin');
// alert(`Salam ${firstName} ${lastName} (${Age} yas)`)

//3. Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

// let gender= prompt('Cinsinizi daxil edin (M/F)')
// if (gender== 'M' || gender== 'm' ){
//     alert('Sizin cinsiniz kisi')
// }
// else if(gender=='F' || gender== 'f'){
//     alert('Sizin cinsiniz qadin') 
// }
// else {
//     if (gender== ''){
//         alert('saheni bos buraxa bilmezsiniz')
//     }
//     else{
//         alert('Cinsiniz mueyyen olunmayib')
//     }
// }

//4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let eded = prompt('Eded daxil edin')

//5. function gunler(eded) {
//     if (eded >= '1' && eded <= '7') {

//         if (eded == '1') {
//             alert('Birinci gun')
//         } else if (eded == '2') {
//             alert('Ikinci gun')
//         } else if (eded == '3') {
//             alert('Ucuncu gun')
//         } else if (eded == '4') {
//             alert('Dorduncu gun')
//         } else if (eded == '5') {
//             alert('Besinci gun')
//         } else if (eded == '6') {
//             alert('Altici gun')
//         } else {
//             alert('Yeddinci gun')
//         }

//     } 
//     else {
//         alert('sehv eded')
//     }
// }

// gunler(eded)

// let gunler=['mon', 'tue', 'wen', 'thu', 'fri','sut', 'sun' ]

//6. Create a function that takes an array containing only numbers and return the first element.

// const array = [5, 10, 18, 56, 15]

// function firstNumber () {
//     return array[0]
// }

// firstNumber()

//7. Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// function makePair(num1, num2) {
//     const arr = [];
//     const newArr = arr.concat(num1, num2)
//     console.log(newArr)
// }
// makePair(1, 2)

// function makePair(num1, num2) {
//     const arr = [];
//     return arr.concat(num1, num2)
// }
