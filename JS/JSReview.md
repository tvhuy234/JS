
[Let](#let)

[Const](#const)

[Arrow Function
](#arrow-function
)

[For of loop
](#for-of-loop
)

[Spread attributes](#spread-attributes)

[Maps](#maps)

[Sets](#sets)

[Static methods
](#static-methods)

[Getters and Setters
](#getters-and-setters
)

[Promises](#promises)


[Async](#async)


[Array map](#array-map)

[Array Filter](#array-filter)

[Array Reduce](#array-reduce)


[Template Literals
](#template-literals
)

[Imports and Exports](#imports-and-exports)

# Let
- Similar to var. 
- let is only accessible in the block level.

     
        let a = 50;    
        if (true) {
        let a = 60;
        var c = 10;
        }
        console.log(a); // 50
        console.log(c); // 10

# Const
- assign a constant value to the variable, the value cannot be changed.
 
        const a = 50;
        a = 60; // error.

        const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
        LANGUAGES = "Javascript"; //  error.
        LANGUAGES.push('Java');
        console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']

# Arrow Function

        function oldOne() {
        console.log("Hello World..!");
        }

        var newOne = () => {
        console.log("Hello World..!");
        }

        let NewOneWithParameters = (a, b) => {
 console.log(a+b); // 30
}

# For of loop

-  iterates through list of elements

- returns the elements (not their index) one by one

        let arr = [2,3,4,1];
        for (let value of arr) {
        console.log(value);
        }
        //2 3 4 1

# Spread attributes
- converts a list of elements to an array and vice versa 

        let arr = [10, 20, 60];
        Math.max(...arr); // 60

        var mid = [3, 4];
        var arr1 = [1, 2, mid, 5, 6];
        //[1, 2, [3, 4], 5, 6]
        var arr2 = [1, 2, ...mid, 5, 6];
        //[1, 2, 3, 4, 5, 6]


# Maps
- holds key-value pairs
- similar to an array but we can define our own index. And indexes are unique in maps.

        var NewMap = new Map();
        NewMap.set('name', 'John'); 
        NewMap.set('id', 2345796);
        NewMap.get('name'); // John
        NewMap.get('id'); // 2345796

        NewMap.set('name', 'Andy');
        NewMap.get('name'); // Andy. John is replaced by Andy.
        NewMap.set(1, 'number one');
        NewMap.get(1); // number one
        NewMap.set(NaN, 'No value');
        NewMap.get(NaN); // No value

        NewMap.size; // 2. Returns the size of the map.

        NewMap.keys(); // outputs only the keys. 
        NewMap.values(); // outputs only the values.

        for (let key of NewMap.keys()) {
        console.log(key);
        }
        // name id


        for (let element of NewMap) {
        console.log(element);
        }
        //['name', 'John']
        ['id', 10]

        for (let [key, value] of map) {
        console.log(key+" - "+value);
        }
        // name - John id - 10

# Sets
- store the unique values of any type
  
        var sets = new Set();
        sets.add('a');
        sets.add('b');
        sets.add('a'); // We are adding duplicate value.

        for (let element of sets) {
        console.log(element);
        }
        // a b

Other useful methods:

        var sets = New Set([1,5,6,8,9]);
        sets.size; // returns 5. Size of the set.
        sets.has(1); // returns true. 
        sets.has(10); // returns false.

# Static methods

        class Example {
        static Callme() {
        console.log("Static method");
        }
        }
        Example.Callme();
        //Static method

## Getters and Setters

        class People {
                constructor(name) {
        this.name = name;
        }
        get Name() {
        return this.name;
        }
        set Name(name) {
        this.name = name;
        }
        }
        let person = new People("Jon Snow");
        console.log(person.Name);
        person.Name = "Dany";
        console.log(person.Name);
      
# Promises
-  make async operations such as API request, file handling, downloading images,

        const apiCall = new Promise(function(resolve, reject) {
        if ( API request to get some data ) {
        resolve("The request is successful and the response is "+ response);
        }
        else {
        reject("The request is not successful. The error is "+error);
        }
        });


        apiCall
        .then(function(x) {
        console.log(x); 
        })
        .catch(function(x) {
        console.log(x);
        }) 

- Promise is defined with new keyword with a function parameter. (resolve and reject)
- Function resolve should be called when the operation is successful.
- Function reject should be called when the operation is a failure.
- Then handler looks out for resolve function.
- Catch handler looks out for reject function.

# Async
- makes any function to return only promises.

        async function hello() {
         return "Hello Promise..!"
        }

        async function Max(a, b) {
        if (a > b) {
        return Promise.resolve("Success");
        }
        else {
        return Promise.reject("Error");
        }
        }

        Max(4, 10)
        .then(function(x) {
        console.log("Good " + x); 
        })
        .catch(function(x) {
        console.log("Oops " + x); 
        });
        //Oops Error

# Await
- makes the Javascript to wait till the operation is done
- can be used only inside async function.

        async function hello() {
        let response = await fetch('https://api.github.com/');
        // above line fetches the response from the given API endpoint.
        return response;
        }

# Array map

        let arr = [1,2,3,4,5];
        let modifiedArr = arr.map(function(element, index, arr) {
        return element * 10;
        });
        console.log(modifiedArr);
        //[10, 20, 30, 40, 50]

- the second and third parameter is only optional. Only the first parameter is mandatory.


# Array Filter
-  filter the whole array based on some condition
-  If the element passes the condition it keeps the element in the array else it removes the element.

        let arr = [1, 2, 3, 4, 5, 6]
        let modifiedArr = arr.filter(function(element, index, array) {
        return element % 2 == 0
        });
        console.log(modifiedArr);
        //[2, 4, 6]

# Array Reduce

- aggregate all the elements of an array and return a single value.
  
        let arr = [1,2,3,4,5,6]
        let total= arr.reduce(function(sum, element, index, array) {
        return sum + element;
        },0);
        console.log("total is "+total);
        // total is 21

- Unlike filter and map, the first two parameters are mandatory. Other two are optional.

# Template Literals

- execute any JS expressions

        let name = "Jon Snow";
        let msg = `My name is ${name}`;
        console.log(msg);
        //My name is Jon Snow
        let name = "Srebalaji";


        let languages = () => {return "Ruby, Js, Java, Python"}
        let msg = `My name is ${name}
        My age is ${20+3}
        And I code in ${languages()}`
        //My name is Srebalaji
        //My age is 23
        //And I code in Ruby, Js, Java, Python

# Imports and Exports
- Exports are used in modules to explicitly exporting some variables or functions or classes.
- Imports are used to import variable, functions, classes from other modules.

        app.js
        export let name = "Jon"
        export let age = 23
        index.js
        import {name, age} from './app'
        console.log(name);
        console.log(age);
        index.js
        import {name, age} from './app'
        console.log(name);
        console.log(age);
        Output:
        Jon
        23

# Destructuring objects and arrays
Destructure object.

        let person = {firstName: "Jon", lastName: "Snow", age: 23}


        const {firstName, lastName, age} = person
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        Output:
        Jon
        Snow
        23


        const {firstName: name, age} = person
        console.log(name);
        console.log(age);
        Output:
        Jon
        23

Destructure array:

        let arr [1, 2, 3, 4]
        const [a, b, c, d] = arr;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        Output:
        1
        2
        3
        4

# Extend and Super

- Extend is used to create sub-class from the main class. The sub-class inherits all the properties of the main class and can also modify the properties of the main class.

        class Person{
        constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        }
        displayName() {
        return `${this.firstName} - ${this.lastName}`;
        }
        }
        class Employee extends Person {
        constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age);
        this.salary = salary;
        }
        displaySalary() {
        return `${this.salary}`;
        }
        displayName() {
        return super.displayName();
        }
        displayAge() {
        return this.age;
        }
        }
        let manager = new Employee("Jon", "Snow", 23, 100);
        console.log(manager.displaySalary());
        console.log(manager.displayName());
        console.log(manager.displayAge());
        Output:
        100
        Jon Snow
        23

- We used extends to create a sub-class from the parent class.
- We used super to call the constructor of the parent class.
- We used super to call the method defined in the parent class.