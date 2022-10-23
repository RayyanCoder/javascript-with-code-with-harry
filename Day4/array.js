const book=["name","price",4.5,true];
console.log(book[0]);
book[0]="rayyan";
console.log(book[0]);
book.push("hello world");
console.log(book);

 //in js you can edit only  values mean array values can be
//  edited of const array we cannot reasign the const varaible or array

const cars =["price","average","color",150];
const arrayToString = cars.toString();
console.log(arrayToString);
const arrayToJoin = cars.join("R");
console.log(arrayToJoin);
//shift method is used to delete element from array first positon
const newCar = cars.shift();
console.log(newCar);
console.log(cars);
//ushift method is used to add element to the top of array
const newCars2 = cars.unshift("price"); // it return length of a array
console.log(newCars2)

//pop and push method is also there already practice done.
//concate,reverse
//slice and splice use mdn docs
//looping arrays using for loop and for each loop
//
const course="java";
const newCourse = Array.from(course);
console.log(newCourse);

const numbers =[50,40,60,10,90];
const numbers2 = numbers.map(res=>res*2);
console.log(numbers2);
const evenNumbers = numbers2.find(res=>res=>20);
console.log(evenNumbers);

//reduce method imp method
const numbers3 = numbers.reduce((pre,current)=>pre+current,0);
console.log(numbers3);