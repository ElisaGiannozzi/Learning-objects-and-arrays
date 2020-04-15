// Write a program that lists the properties of an object.

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

}



//Write a function to get a copy of the object where the keys have become the values and the values become the keys.//

let person = {
    name: 'Alex',
    lastname: 'Doe',
    age: 25,
  };