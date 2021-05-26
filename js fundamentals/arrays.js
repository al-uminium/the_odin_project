//* Convert Arrays to Strings -- toString(), join()

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

//* join() accepts a separator argument.
console.log(fruits.join(" and "))

//Popping and Pushing

//* pop() removes last element from an array and returns it -- returns `undefined` if array is empty. 
let poppedfruit = fruits.pop();
console.log(poppedfruit, fruits)

//* push() adds new element to the end of an array -- returns array length
let fruitslength = fruits.push("Kiwi");
console.log(fruits, fruitslength)

//* shift() removes 1st element, and shifts all other elements to a lower index
//* unshift() adds element for 1st position, and shifts all others to a higher index
let shiftedfruit = fruits.shift();
console.log(shiftedfruit, fruits);
fruits.unshift(shiftedfruit);
console.log(fruits)

//* delete can be used to delete elements --> changes element to undefined
delete fruits[1]
console.log(fruits)

//* splice(position, elementsRemoved, elements...) can be used to add new items to an array or remove items from an array. 
//* position arg --> where elements should be added
//* elementsRemoved arg --> how many elements to remove
//* elements arg --> elements to be added in, can be multiple. 
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwi"); // add elements
console.log(fruits) // returns [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
fruits.splice(0,2); // remove banana and orange
console.log(fruits)

//* Concatenating Arrays -- concat()
// Creates new arrays by concatenating existing arrays. Does not mutate original arrays
// Syntax -> arr0.concat(arr1, arr2, arr3, ... arrn)
// Can take strings as arguments as well. 
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren)

//* Slicing arrays -- slice()
// arr.slice(startpos, endpos) returns new array (up to the endpos, not including). If endpos not included, will slice out rest of the array. e.g. arr[1:]
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);
console.log(citrus)