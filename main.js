// методи масивів
// forEach(), includes(), map(), filter(), reduce(), reduceRight, some, every
//.............................................



//з функції можемо дістати три параметри value, index, array
// let arrAll = ['Ivan', 'Oleg', 'Petro']
// arrAll.forEach(function(val, ind, arr) {
//     console.log(val); // Ivan, Oleg, Petro 
//     console.log(ind); // 0, 1, 2
//     console.log(arr); // виведе масив 
// })

//.................................
// const arr1 = [1, 2, 3] // 

// console.log(arr1.includes(2, 1)) // includes повертає або true або false 

// const pets = ['cat', 'dog', 'humster'];

// console.log(pets.includes('cat')) // поврне true
// console.log(pets.includes('at')) // поверне false повинно бути повне співпадіння 



//..............................
// const ages = [19, 17, 22, 15, 18];
// let filterAges = ages.filter(age => age >= 18); //повертає масив 

// console.log(filterAges) // [19, 22, 18]


// те саме через function declaration
// let filterAges = ages.filter(function(age) {
//     if(age >= 18) {
//         return age;
//     }
// });
// console.log(filterAges) // той самий результат




// як працює фільтер під капотом, і не смійся для тебе олег писав 
// function ff (arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length: i++) {
//         if(arr[i] >= 18) {
//             newArr.push(arr[i]);
//         }
//     } 
//     return newArr;
// }



//фільтруєм елементи масиву 
// const users = [{
//     name: 'Ivan',
//     age: 14
// }, 
// {
//     name: 'Petro',
//     age: 19
// },
// {
//     name: 'Oleg',
//     age: 22
// },
// {
//     name: 'Andriy',
//     age: 15
// }];


// let filterUsers = users.filter(function(user) {
//     if(user.age >= 18) {
//         return user;
//     }
// });

// console.log(filterUsers);


// let filterUsers = users.filter(user => user.age >= 18 && user.name != 'Petro');
// console.log(filterUsers);
//непрацює, треба перевірити 




//.......................
// const phones = [
// {
//     name: 'iPhone XI',
//     price: 699
// }, 
// {
//     name: 'iPhone XI Pro',
//     price: 999
// },
// {
//     name: 'iPhone XI Pro Max',
//     price: 1099
// }
// ];
// map()  // приймає три параметри value index, array
// const newPhones = phones.map(phone => {
//     phone.price = '$' + phone.price;
//     return phone;
// });
// console.log(newPhones);
// console.log(phones);



//.....................................
// val означає значення кожкого масиву
// const numb = [2, 3, 4, 5];
// const dollars = numb.map(val => '$' + val);

// console.log(numb);
// console.log(dollars);



//.................................
//reduce()
// const birthday = [ 
//     {
//         name: 'MacBook Pro 16, i9',
//         price: 2700
//     },
//     {
//         name: 'Rollex Watch',
//         price: 20000
//     },
//     {
//         name: 'Audi A7',
//         price: 34500
//     }
// ];

//приймає 4 параметри previous value( акумулятор ). . arr
// let suma = birthday.reduce((accum, value) => accum + value.price, 0);
// console.log(suma); // 57200 виведе суму 



//.........................
//reduceRight працює від кінця до 0, якщо потрбіно порахувати останні 10 замовлень для прикладу в зворному порядку




//some перебирає масив але поветрає значення boolean 
 const users = [{
    name: 'Ivan',
    city: 'Lviv'
}, 
{
    name: 'Petro',
    city: 'Kyiv'
},
{
    name: 'Oleg',
    city: 'Odessa'
},
{
    name: 'Andriy',
    city: 'Striy'
}];

// let result = users.some(user => user.city == 'Lviv');
// console.log(result); // поверне true 

// //every,  для кожного 
// let result = users.every(user => user.city == 'Lviv');
// console.log(result); // поверне false 



//...........................
//freeze(), ceil(), assign()(копіює обєкт): 


//.................
// статичні методи записується до конструктора Object

// let car = {
//     name: 'Audi',
//     model: 'A7',
//     year: 2019
// };

//VALUE
// const val = Object.values(car);
// // car.values не працюватиме
// console.log(val); // повернеться масив зі значеннями які є в обєкті 
//KEYS
// const key = Object.keys(car);
// console.log(key); // повернеться масив з ключами
//ENTRIES
// const entries = Object.entries(car);
// console.log(entries); // поверне масив в масиві, рекомендується не використовувати 




//..............................
// let obj1 = {
//     name: 'Ivan',
//     age: 20
// };

// let obj2 = {
//     city: 'Lviv',
//     coutry: 'Ukraine'
// };

// // помістили два obj в один 
// let obj = {
//     ...obj1, 
//     ...obj2
// }
// console.log(obj);

// let arr1 = [3, 5, 7];
// let arr2 = [2, 4, 6];

// let arr = [...arr1, ...arr2]; // обєднюємо два масива 
// console.log(arr);






// ДЗ

let time = 0;
setInterval(function() {
    timer++
    document.write(timer)
}, 1000)
