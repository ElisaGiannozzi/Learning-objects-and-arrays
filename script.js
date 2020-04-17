// Write a program that lists the properties of an object. COMPLETED 

let student = {
    name: "Jane Rayy",
    class: "VI",
    age: 12,
  };

  for(let key in student) {
    console.log(key);
}


/*Create an object that holds information of your favorite recipe. 
It should have properties for title (a string), servings (a number), and ingredients
(a string, each ingredient separated by a comma). Display the recipe information on the webpage. 
Use heading for the title. Use paragraphs for other info.*/

let recipe = {
    name: 'Apple pie',
    servings: 2, 
    ingredients: ['apples', 'dough', 'cinnamon'],

  displayRecipe: function() {
    document.write(`<h1>${(this.name)}</h1>`); 
    document.write(`<p>Servings: ${(this.servings)}</p>`); 
    document.write(`<p>Ingredients: ${(this.ingredients)}</p>`); 
  }
}

recipe.displayRecipe(); 


//Write a function to get a copy of the object where the keys have become the values and the values become the keys. COMPLETED 

let person = {
    name: 'Alex',
    lastname: 'Doe',
    age: 25,
  };

  function invert(person) {
    let personCopy = {}; 
for (let key in person) {
  personCopy[person[key]] = key; 
  }
  return personCopy; 
}
console.log(invert(person)); 

/*Suppose we have this array: people = ["Alex", "Mary", "Devon", "James"]; Do the following manipulations with the array: COMPLETED 
1) Remove “James” from the array; 
2) Remove “Alex” from the array; 
3) Add your name to the beginning of the array; 
4) Add “Jane” to the end of the array; 
5) Using for-loop, write all names of the changed array to the webpage using document.write()*/

let names = ["Alex", "Mary", "Devon", "James"]; 
delete names[3]; 
console.log(names); 

let names2 = ["Alex", "Mary", "Devon", "James"]; 
delete names[0]; 
console.log(names2); 

let names3 = ["Alex", "Mary", "Devon", "James"]; 
names3.unshift("Elisa"); 
console.log(names3); 

let names4 = ["Alex", "Mary", "Devon", "James"]; 
names4.push("Jane"); 
console.log(names4);

let namesArray = new Array("Alex", "Mary", "Devon", "James","Jane"); 
let content = ''; 
for (let i = 0; i<namesArray.length; i++) {
  content = content + names4[i]; 
}

document.write(content); 

/*Write a function that accepts an array and returns a reversed version of it. Do not use the reverse() function. COMPLETED 
For example: ['a', 'b', 3, 'c', [], 10] will be [10, [], 'c', 3, 'b', 'a'] */

let array = ['a', 'b', 3, 'c', [], 10];

function reverseArray(array){
  let newArray = []; 
for (let i = array.length -1; i >= 0; i--) {
  newArray.push(array[i]); 
}
return newArray; 
}

console.log(reverseArray(array)); 


//Write a script that displays the reading status of the following books (either to the webpage or to the console).

let myLibrary = [ 
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      isRead: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      isRead: true
    },
    {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      isRead: false
  }];



  /*Write a simple function that joins all elements of an array and returns a string. 
  For example, join(["red", "green", "blue"], "+") will return "red+green+blue". Do not use join() function.*/ 

let colours = ["red", "green", "blue"]; 
function joinElements(colours, separator = "+") {
  let newArray = []; 
  for(let i = 0; i < colours.length; i++) {
    newArray = newArray + colours[i] + separator; 
  }
  return newArray; 
}
console.log(joinElements(colours)); 


//Write a function that accepts an array of years and returns the number of leap years in the array.


//Write a function that accepts an array and removes null, 0', "" (empty string), false, undefined and NaN values from the array and returns a new array without those values.