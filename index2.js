var book={
    "title":"revolution",
    "author":"chethan",
    "yearpublished":"2011"
}
console.log(book)
//Accessing the author property and printing it.
console.log(book['author'])
//modifying year published
book['yearpublished']="2022"
console.log(book)
//Adding a new property genre to the book object with the value “Fiction
book['genre']="Fiction"
//Deleting the title property from the book object.
delete book['title'];
console.log(book)

var employee={
    "name":"nikhitha",
    "age":"24",
   "position":"teamleader",
   "salary":"400000"
}
console.log(employee)
//Accessing the position property and printing it.
console.log(employee['position'])
//modifying salary property
employee['salary']="50000"
console.log(employee)
//Adding a new property department to the book object with the value 50000
employee['department']="HR"
//Delete the age property from the employee object
delete employee['age'];
console.log(employee)

var product={
    "id":"4",
    "name":"whitetone",
    "price":"100",
    "category":"makeup"
}
console.log(product)
//Accessing the price property and printing it.
console.log(product['price'])
//Modify the category property to “Electronics”
product['category']="Electronics";
console.log(product)
//Add a new property inStock to the product object with the value true
product['instock']=true
//Delete the id property from the product object
delete product['id'];
console.log(product)

//You are given an object car with the properties make, model, year, and color. Perform the following operations:
var car={
    "make":"mahindra",
    "model":"thar",
    "year":"2020",
    "colour":"red"
}
console.log(car)
//Accessing the make property and printing it
console.log(car['make']);
//Modifying the color property to “Black”.
car['colour']="black";
//Adding a new property engineType to the car object with the value “V6”
car['engineType']="V6";
//Deleting the year property from the car object
delete car['year'];
console.log(car)

//You are given an object student with the properties name, age, grade, and school. Perform the following operations
var student={
    "name":"yogitha",
    "age":"16",
    "grade":"9.0",
    "school":"sssm"
}
console.log(student)
//Accessing the school property and printing it
console.log(student['school']);
//Modifying the grade property to 95
student['grade']="95";
//Add a new property hobbies to the student object with the value ["reading", "sports"]
student['hobbies']=["reading","sports"];
//Deleting the age property from the student object
delete student['age'];

//you are given an object user with the following structure:
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user)
  //Accessing the city property from the address object and print it
  console.log(user['profile']['address']['city']);
  //Modifying the theme property in the preferences object to “light”
 user['preferences']['theme']="light";
 console.log(user)
 //Adding a new property phone to the profile object with the value “555-9876”
 user['profile']['phone']="555-9876";
 console.log(user)
//Delete the zip property from the address object.
 delete user['profile']['address']['zip'];
 console.log(user);

 //You are given an object company with the following structure
 const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
            email: "alice@tech.com",
            phone: "555-2345"
          }
        },
        {
          name: "Bob",
          position: "Manager",
          contact: {
            email: "bob@tech.com",
            phone: "555-6789"
          }
        }
      ],
      location: "New York"
    };
console.log(company)      
//Accessing the email of the second employee (Bob) and print it
//the elements are in the array ,so we have to give index
console.log(company['employees'][1]['contact']['email']);
//Modify the phone number of Alice to “555-1111”
company['employees'][0]['contact']['phone']="555-1111";
//Add a new property department with the value “Engineering” to the first employee (Alice)
company['employees'][0]['department']="Engineering";
//Delete the location property from the company object.
delete company['location'];