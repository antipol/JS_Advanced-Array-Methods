// ADVANCED ARRAY METHODS

//1. sort-an-array-of-numbers
const sortArrNum = numArr => numArr.sort((x, y) => x - y);
console.log(sortArrNum([500, 34, 98, 2, 34]));
//[ 2, 34, 34, 98, 500 ]


//2. sort-an-array-of-strings
const sortArrStr = strArr => strArr.sort();
console.log(sortArrStr(["yes", "hello", "penguin"]));
//[ 'hello', 'penguin', 'yes' ]


//3. sort-a-string
const sortStr = unorderedStr => unorderedStr.split("").sort().join("");
console.log(sortStr("penguins are cool"));
//  aceegilnnooprsu


//4. reverse-an-array
const arrReverse = numArray => numArray.reverse();
console.log(arrReverse([1, 2, 3, 4, 5]));
//[ 5, 4, 3, 2, 1 ]


//5. reverse-string-2
const reverseStr = originalStr => originalStr.split("").reverse().join("");
console.log(reverseStr("penguin"));
//niugnep


//6. sort-objects
const peopleNames = [
  {name: 'lesane'},
  {name: 'sean'},
  {name: 'kendrick'},
  {name: 'christopher'},
  {name: 'young thug'}
];
const sortObjs = objArr => objArr.map(obj => obj.name).sort();
console.log(sortObjs(peopleNames));
//[ 'christopher', 'kendrick', 'lesane', 'sean', 'young thug' ]


//7. high-low-sort
const highLow = numbers => numbers.sort((x, y) => y - x);
console.log(highLow([2, 654, 45, 10]));
//[ 654, 45, 10, 2 ]


//8. legal-drinking-age
const canDrink = [
  {name: "Adrian", age: 13},
  {name: "Jojo", age: 23},
  {name: "Cornelius", age: 21}
]
const checkDrinkingAge = people => people.every(obj => obj.age >= 21);

console.log(checkDrinkingAge(canDrink));
//false


//9. implement-sort
const numbersArr = [2, 7, 3, 1, 10];
const sort = arr => {
  //run the inner loop .length times:
  for (let i = 0; i < arr.length; i++) {
    //run the loop .length amount of times:
    for (let j = 0; j < arr.length; j++) {
      //check if current value is larger than next value. If smaller (false), nothing happens, jumps to next value. If larger, if statement happens:
      if (arr[j] > arr[j + 1]) {
        //make variable to save current (higher) value:
        let tmp = arr[j];
        //reassign next, lower value to current value:
        arr[j] = arr[j + 1];
        //assign the higher value to next index:
        arr[j + 1] = tmp;
        //Repeat...
      }
    }
  }
  return arr;
}
console.log(sort(numbersArr));
//[ 1, 2, 3, 7, 10 ]
