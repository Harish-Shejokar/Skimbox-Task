
const arr = [1, 2, 3, 4, 5];
const temp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// map
const map = arr.map(el => el + 10);
// console.log(map);

// filter
const filter = arr.filter(el => el > 2);
// console.log(filter);


// reduce
const reduce = arr.reduce((intial, curr) => intial + curr, 0)
// console.log(reduce);

// reduceRight
const reduceRight = arr.reduceRight((intial, curr) => intial * curr, 1);
// console.log(reduceRight);


//fill
// arr.fill(100);
// console.log(arr);


// find
const find = arr.find(el => el === 4);//4
const find2 = arr.find(el => el === 44);//undefined
 

//indexOf
const indexOf = arr.indexOf(4);//3
const indexOf2 = arr.indexOf(22);//-1
// console.log(indexOf2)


//lastIndexOf
const lastIndexOf = arr.lastIndexOf(3)//2
const lastIndexOf2 = arr.lastIndexOf(33)//-1


// findIndex
const findIndex = arr.findIndex(el => el > 3)//3
const findIndex2 = arr.findIndex(el => el < 1) // -1



// splice 

console.log(temp);
// const splice = temp.splice(2, 4);
// console.log(temp, splice);


