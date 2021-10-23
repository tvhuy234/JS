# JS Tutorial 
[JavaScript Where To](#javascript-where-to)

[JavaScript Output](#javascript-output)

[JavaScript Statements](#javascript-statements)

[JavaScript Syntax](#javascript-syntax)

[JavaScript Comments
](#javascript-comments
)

[JavaScript Variables](#javascript-variables)

[JavaScript Operators
](#javascript-operators
)

[JavaScript Arithmetic
](#javascript-arithmetic
)

[JavaScript Assignment
](#javascript-assignment
)

[JavaScript Data Types
](#javascript-data-types
)

[JavaScript Functions
](#javascript-functions
)

[JavaScript Objects](#javascript-objects)

[JavaScript Events
](#javascript-events
)

[JavaScript Strings
](#javascript-strings
)

[JavaScript Strings Methods](#javascript-strings-methods)

[JavaScript Search](#javascript-search)

[JavaScript Templates](#javascript-templates)

[JavaScript Numbers
](#javascript-numbers
)

[JavaScript Number Methods
](#javascript-number-methods
)

[JavaScript Arrays](#javascript-arrays)

[JavaScript Arrays Methods](#javascript-arrays-methods)

[JavaScript Array Sort](#javascript-array-sort)

[JavaScript Array Iteration
](#javascript-array-iteration
)

[JavaScript Array Const
](#javascript-array-const
)

[JavaScript Dates](#javascript-dates)

[JavaScript Date Format](#javascript-date-format)


[JavaScript Date Get Methods](#javascript-date-get-methods)

[JavaScript Date Set Methods](#javascript-date-set-methods)

# JavaScript Where To

The `<script>` Tag
In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.


### **External JavaScript:**

*Example*:

`<script src="myScript.js"></script>`

*Advantages:*

&nbsp;
It separates HTML and code

&nbsp;
It makes HTML and JavaScript easier to read and maintain

&nbsp;
Cached JavaScript files can speed up page loads

# JavaScript Output 

&nbsp;
JavaScript can "display" data in different ways:

### **Writing into an HTML element, using innerHTML.**

*Example:*

`<p id="demo"></p>`

`<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
`

### **Writing into the HTML output using document.write().** 

&nbsp;
The document.write() method should only be used for testing.



*Example:*

`<script>
document.write(5 + 6);
</script>`

### **Writing into an alert box, using window.alert(). Use an alert box to display data.**

*Example:*

`<script>
window.alert(5 + 6);
</script>
`

&nbsp;
Can skip the window keyword.


### **Writing into the browser console, using console.log() for debugging purposes to display data.**

# JavaScript Statements

**JavaScript statements are composed of:**

&nbsp;
Operators, Expressions, Keywords, and Comments.

**Semicolons ;**

&nbsp;
Add a semicolon at the end of each executable statement.

&nbsp;
When separated by semicolons, multiple statements on one line are allowed.

**White Space**

JavaScript ignores multiple spaces. Can add white space to make it more readable.

**Line Length and Line Breaks**

The best place to break a long code is after an operator.

**Code Blocks**

**Keywords**


# JavaScript Syntax
Is the set of rules, how JavaScript programs are constructed.




**Values:**
- Fixed values(Literals)
- Variable values (Variables)

**Literals:**
- Numbers
- Strings
  
**Variables:**
Used to store data values.

# JavaScript Comments
Single Line Comments: 
start with // and end with //

Multi-line Comments: start with /* and end with */

# JavaScript Variables
There are 3 ways to declare a JavaScript variable:

- **Using var**
 
&nbsp;
Can use the variable before it is declared.
- **Using let**
  
&nbsp;
Variables defined with let cannot be Redeclared.

&nbsp;
Variables defined with let must be Declared before use.

&nbsp;
Variables defined with let have Block Scope.
- **Using const**
  
&nbsp;
Variables defined with const cannot be Redeclared.

&nbsp;
Variables defined with const cannot be Reassigned.

&nbsp;
Variables defined with const have Block Scope.

# JavaScript Operators

# JavaScript Arithmetic

# JavaScript Assignment

# JavaScript Data Types

When adding a number and a string, JavaScript will treat the number as a string.

*Example:*
- &nbsp; let x = 16 + "Volvo";

&nbsp; Result: 16Volvo

JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
- &nbsp; let x = 16 + 4 + "Volvo";

&nbsp; Result: 20Volvo

Since the first operand is a string, all operands are treated as strings.
- &nbsp; let x = "Volvo" + 16 + 4;
 
&nbsp; Result: Volvo164


# JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

**Function Syntax**
&nbsp; function name(parameter1, parameter2, parameter3) {

  // code to be executed
}


**Why Functions?**

&nbsp; Can reuse code: Define the code once, and use it many times.

&nbsp; Can use the same code many times with different arguments, to produce different results.

**Local Variables**

&nbsp; Can only be accessed from within the function.



# JavaScript Objects

**Object Definition**
&nbsp; Define (and create) a JavaScript object with an object literal:

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

**Object Properties**

The name:values pairs in JavaScript objects are called properties:

    Property    Property Value

    firstName   John

    lastName    Doe

**Accessing Object Properties**

&nbsp; Can access object properties in two ways:
- objectName.propertyName 
*Example:* person.lastName;

- objectName["propertyName"]
*Example:* person["lastName"];

**Object Methods**

&nbsp; Methods are stored in properties as function definitions.

**The this Keyword**

&nbsp; this refers to the "owner" of the function.

*Example:*

    const person = {

        firstName: "John",

        lastName : "Doe",

        id: 5566,

        fullName : function() {

          return this.firstName + " " + this.lastName;
     }
    };

**Accessing Object Methods**

objectName.methodName()

*Example:* name = person.fullName();


# JavaScript Events

HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

**HTML Events**

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked
  
*Example*:

    <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

**Common HTML Events**


Here is a list of some common HTML events:

    Event	    Description
    onchange    An HTML element has been changed
    onclick	    The user clicks an HTML element
    onmouseover	The user moves the mouse over an HTML element
    onmouseout	The user moves the mouse away from an HTML element
    onkeydown	The user pushes a keyboard key
    onload	The browser has finished loading the pagerings

# JavaScript Strings

**Escape Character**

    Code	Result	Description
    \'	    '	    Single quote
    \"	    "	    Double quote
    \\	    \	    Backslash
Six other escape sequences are valid in JavaScript:

    Code	Result
    \b	    Backspace
    \f	    Form Feed
    \n	    New Line
    \r	    Carriage Return
    \t	    Horizontal Tabulator
    \v	    Vertical Tabulator

**Breaking Long Code Lines**

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

*Example:*

    document.getElementById("demo").innerHTML =
    "Hello Dolly!";

Can also break up a code line within a text string with a single backslash:

*Example:*

    document.getElementById("demo").innerHTML = "Hello \
    Dolly!";
A safer way to break up a string, is to use string addition:

*Example:*

        document.getElementById("demo").innerHTML = "Hello " +
    "Dolly!";

**Strings Can be Objects**

*Example:*

    let x = "John";
    let y = new String("John");

    // typeof x will return string
    // typeof y will return object

When using the == operator, equal strings are equal.

When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.

*Example:*

    let x = "John";             
    let y = new String("John");

    // (x === y) is false because x and y have different types (string and object)

Comparing two JavaScript objects will always return false.

# JavaScript Strings Methods
There are 3 methods for extracting a part of a string:

- slice(start, end)
  
        let str = "Apple, Banana, Kiwi";
        str.slice(7, 13);  
        str.slice(-12, -6); 
        // Both return Banana

        str.slice(7); 
        str.slice(-12);  
        // Returns Banana,Kiwi


- substring(start, end): is similar to slice(), cannot accept negative indexes.

- substr(start, length): s similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
    
        let str = "Apple, Banana, Kiwi";
        str.substr(7, 6)   
        // Returns Banana
       
        str.substr(7)   
        // Returns Banana,Kiwi
     
        str.substr(-4)   
        // Returns Kiwi

**Replacing String Content**

    let text = "Please visit Microsoft and Microsoft!!";
    let newText = text.replace("Microsoft", "W3Schools");
    // Please visit W3Schools and Microsoft!!
To replace case insensitive, use a regular expression with an /i flag (insensitive):

    let text = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/i, "W3Schools");
    // Please visit W3Schools!!

To replace all matches, use a regular expression with a /g flag (global match):

    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools");
    // Please visit W3Schools and W3Schools!

**Converting to Upper and Lower Case**

    let text1 = "Hello World!";       
    let text2 = text1.toUpperCase();
    //HELLO WORLD!

    let text3 = text1.toLowerCase();
    //hello world!

**The concat() Method**

    let text1 = "Hello";
    let text2 = "World!";
    let text3 = text1.concat(" ",text2);    
    //Hello World!

**String.trim()**

    let text = "       Hello World!        ";
    text.trim()    
    //"Hello World!"

**JavaScript String Padding**  

    let text = "5";
    text.padStart(4,0)   
    //0005   

    text.padEnd(4,0)     
    //5000
**Extracting String Characters**

There are 3 methods for extracting string characters:
- The charAt() Method
- The charCodeAt() Method
- Property Access
 
        let text = "HELLO WORLD";
        text.charAt(0) // 0
        text.charCodeAt(0) // 72     
        text[0] //H

**Converting a String to an Array**

    
    text.split(",") // Split on commas
    text.split(" ") // Split on spaces
    text.split("|") // Split on pipe
    text.split("") // Split in characters

# JavaScript Search

**String.indexOf()**

**String.lastIndexOf()**

**String.startsWith()**

**String.endsWith()**

    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate") // 7
    str.lastIndexOf("locate") // 21
    str.lastIndexOf("John") //-1
    str.indexOf("locate", 15) // 21
    str.lastIndexOf("locate", 15) // 7
    str.search("locate") // 7

**String.match()**

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/g) // Returns an array [ain,ain,ain]
    text.match(/ain/gi) // Returns an array [ain,AIN,ain,ain]

**String.includes()**

The includes() method returns true if a string contains a specified value.

    let text = "Hello world, welcome to the universe.";
    text.includes("world")    // Returns true


**String.startsWith()**

The startsWith() method returns true if a string begins with a specified value, otherwise false:

    let text = "Hello world, welcome to the universe.";
    text.startsWith("Hello")   // Returns true

**String.endsWith()**

    var text = "John Doe";
    text.endsWith("Doe")    // Returns true


# JavaScript Templates

**Back-Tics Syntax**

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

    let text = `Hello World!`;

**Quotes Inside Strings**

Quotes Inside Strings

    let text = `He's often called "Johnny"`;

**Multiline Strings**

    let text =
    `The quick
    brown fox
    jumps over
    the lazy dog`;

**Interpolation**

Template literals provide an easy way to interpolate variables and expressions into strings.

    ${...}

**Variable Substitutions**

    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;
    // Welcome John, Doe!

**Expression Substitution**

    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    // 12.50

**HTML Templates**

# JavaScript Numbers

    let x = 3.14;    // A number with decimals
    let y = 3;       // A number without decimals

Extra large or extra small numbers can be written with scientific (exponent) notation:

    let x = 123e5;    // 12300000
    let y = 123e-5;   // 0.00123

**Precision**

    let x = 999999999999999;   // x will be 999999999999999
    let y = 9999999999999999;  // y will be 10000000000000000

The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

    let x = 0.2 + 0.1;         // x will be 0.30000000000000004

To solve the problem above, it helps to multiply and divide:


    let x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3


# JavaScript Number Methods

**The toString() Method**

    let x = 123;
    x.toString();            // returns 123 from variable x
    (123).toString();        // returns 123 from literal 123
    (100 + 23).toString();   // returns 123 from expression 100 + 23

**The toExponential() Method**

toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:


    let x = 9.656;
    x.toExponential(2);     // returns 9.66e+0
    x.toExponential(4);     // returns 9.6560e+0
    x.toExponential(6);     // returns 9.656000e+0

**The toFixed() Method**

    let x = 9.656;
    x.toFixed(0);           // returns 10
    x.toFixed(2);           // returns 9.66
    x.toFixed(4);           // returns 9.6560
    x.toFixed(6);           // returns 9.656000

**The toPrecision() Method**

    let x = 9.656;
    x.toPrecision();        // returns 9.656
    x.toPrecision(2);       // returns 9.7
    x.toPrecision(4);       // returns 9.656
    x.toPrecision(6);       // returns 9.65600

**The valueOf() Method**

    let x = 123;
    x.valueOf();            // returns 123 from variable x
    (123).valueOf();        // returns 123 from literal 123
    (100 + 23).valueOf();   // returns 123 from expression 100 + 23

**Converting Variables to Numbers**

There are 3 JavaScript methods that can be used to convert variables to numbers:

- The Number() method
- The parseInt() method
- The parseFloat() method
  
These methods are not number methods, but global JavaScript methods.

**Global JavaScript Methods**

These are the most relevant methods, when working with numbers:

    Method	        Description
    Number()	    Returns a number, converted from its argument.
    parseFloat()    Parses its argument and returns a floating point number
    parseInt()      Parses its argument and returns an integer

**The Number() Method**

    Number(true);          // returns 1
    Number(false);         // returns 0
    Number("10");          // returns 10
    Number("  10");        // returns 10
    Number("10  ");        // returns 10
    Number(" 10  ");       // returns 10
    Number("10.33");       // returns 10.33
    Number("10,33");       // returns NaN
    Number("10 33");       // returns NaN
    Number("John");        // returns NaN

**The Number() Method Used on Dates**

    // This returns 0:
    Number(new Date("1970-01-01"))

The Number() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

    // This returns 86400000
    Number(new Date("1970-01-02"))
    // This returns 1506729600000
    Number(new Date("2017-09-30"))

**The parseInt() Method**

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:


    parseInt("-10");        // returns -10
    parseInt("-10.33");     // returns -10
    parseInt("10");         // returns 10
    parseInt("10.33");      // returns 10
    parseInt("10 20 30");   // returns 10
    parseInt("10 years");   // returns 10
    parseInt("years 10");   // returns NaN 

**The parseFloat() Method**

    parseFloat("10");        // returns 10
    parseFloat("10.33");     // returns 10.33
    parseFloat("10 20 30");  // returns 10
    parseFloat("10 years");  // returns 10
    parseFloat("years 10");  // returns NaN

**JavaScript MIN_VALUE and MAX_VALUE**

MAX_VALUE returns the largest possible number in JavaScript.

    let x = Number.MAX_VALUE;

MIN_VALUE returns the lowest possible number in JavaScript.

    let x = Number.MIN_VALUE;

**JavaScript POSITIVE_INFINITY**

    let x = Number.POSITIVE_INFINITY;
    // Infinity
POSITIVE_INFINITY is returned on overflow:

    let x = 1 / 0;
    // Infinity

**JavaScript NEGATIVE_INFINITY
**

    let x = -1 / 0;
    // -Infinity

**JavaScript NaN - Not a Number**

    let x = Number.NaN;
    //NaN
    let x = 100 / "Apple";  // x will be NaN (Not a Number)
**Number Properties Cannot be Used on Variables**

    let x = 6;
    x.MAX_VALUE    // returns undefined


# JavaScript Arrays

Syntax:

    const array_name = [item1, item2, ...];      

**Arrays are Objects**

Arrays use numbers to access its "elements". In this example, person[0] returns John:

    const person = ["John", "Doe", 46];

Objects use names to access its "members". In this example, person.firstName returns John:

    const person = {firstName:"John", lastName:"Doe", age:46};

**Array Elements Can Be Objects**

**The Difference Between Arrays and Objects**

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.


**How to Recognize an Array**

Solution 1:

    Array.isArray(fruits);   // returns true

Solution 2:

    const fruits = ["Banana", "Orange", "Apple"];

    fruits instanceof Array;   // returns true

# JavaScript Array Methods

**Converting Arrays to Strings**

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.toString();
    // Banana,Orange,Apple,Mango
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

    fruits.join(" * ");
    // Banana * Orange * Apple * Mango

**Popping and Pushing**

The pop() method removes the last element from an array.
The push() method adds a new element to an array (at the end).



    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let x = fruits.pop();  // x = "Mango"
    let x = fruits.push("Kiwi");   //  x = 5

**Shifting Elements**

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let x = fruits.shift();    // x = "Banana"
    fruits.unshift("Lemon");    // Returns 5

**Splicing an Array**
The splice() method can be used to add new items to an array:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    // Banana,Orange,Lemon,Kiwi,Apple,Mango

**Using splice() to Remove Elements**

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);   // Removes the first element

**Merging (Concatenating) Arrays**

    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    // Concatenate (join) myGirls and myBoys
    const myChildren = myGirls.concat(myBoys);
    // Cecilie,Lone,Emil,Tobias,Linus

The concat() method does not change the existing arrays. It always returns a new array.

    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter"); 

**Slicing an Array**

The slice() method slices out a piece of an array into a new array.

    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
    // Orange,Lemon,Apple,Mango
    const citrus = fruits.slice(1, 3);
    // Orange,Lemon
    const citrus = fruits.slice(2);
    // Lemon,Apple,Mango

**Automatic toString()**

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // Banana,Orange,Apple,Mango



# JavaScript Array Sort

**Sorting an Array**
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort(); 

**Reversing an Array**

    fruits.reverse();

**Numeric Sort**

    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    // 1,5,10,25,40,100
    points.sort(function(a, b){return b - a});
    // 100,40,25,10,5,1

**Sorting an Array in Random Order**

    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});

**Using Math.max() on an Array**

**Using Math.min() on an Array**

    Math.max(1, 3, 2)
    // 3
    const array1 = [1, 3, 2];
    Math.max(...array1); // 3
    Math.min(...array); // 1

**Sorting Object Arrays**

    const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
    ];  
    cars.sort(function(a, b){return a.year - b.year});
    // Saab     2001
    // BMW      2010
    // Volvo    2016

# JavaScript Array Iteration

**Array.forEach()**

The forEach() method calls a function (a callback function) once for each array element.

    onst numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
    txt += value + "<br>";
    }

The function takes 3 arguments:

- The item value
- The item index
- The array itself

**Array.map()**

The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction);

    function myFunction(value, index, array) {
        return value * 2;
    }

**Array.filter()**

The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:


    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    // 45, 25

**Array.reduce()**

The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:


    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);

    function myFunction(total, value, index, array) {
     return total + value;
    }
    // 99


    let sum = numbers.reduce(myFunction, 100);

    function myFunction(total, value) {
      return total + value;
    }
    // 199

**Array.reduceRight()**
    The same as array.reduce() but works from right-to-left in the array.

**Array.every()**

The every() method check if all array values pass a test.

    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    // All over 18 is false

**Array.some()**
The some() method check if some array values pass a test.

    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    // Some over 18 is true

**Array.indexOf()**

    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.indexOf("Apple") + 1;
    // 1

**Array.lastIndexOf()**

Returns the position of the last occurrence of the specified element.

**Array.includes()**

Check if an element is present in an array

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.includes("Mango"); // is true

**Array.find()**

The find() method returns the value of the first array element that passes a test function.

    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    // 25

**Array.findIndex()**
The findIndex() method returns the index of the first array element that passes a test function.

    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    // 3

**Array.from()**
The Array.from() method returns an Array object from any object with a length property or any iterable object.

    Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

**Array.Keys()**
The Array.keys() method returns an Array Iterator object with the keys of an array.

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    for (let x of keys) {
        text += x + "<br>";
    }
    // 0
    // 1
    // 2
    // 3


# Javascript Array Const

**Cannot be Reassigned**

    const cars = ["Saab", "Volvo", "BMW"];
    cars = ["Toyota", "Volvo", "Audi"];    // ERROR
**Arrays are Not Constants**

**Elements Can be Reassigned**

    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    // Toyota,Volvo,BMW,Audi

**Assigned when Declared**

Using const without initializing the array is a syntax error.

This will not work:

    const cars;
    cars = ["Saab", "Volvo", "BMW"];

This is OK:

    cars = ["Saab", "Volvo", "BMW"];
    var cars;

**Const Block Scope**

    const cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"
    {
    const cars = ["Toyota", "Volvo", "BMW"];
     // Here cars[0] is "Toyota"
    }
    // Here cars[0] is "Saab"

An array declared with var does not have block scope:

    var cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"
    {
     var cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
    }
    // Here cars[0] is "Toyota"

**Redeclaring Arrays**

    var cars = ["Volvo", "BMW"];   // Allowed
    var cars = ["Toyota", "BMW"];  // Allowed
    cars = ["Volvo", "Saab"];      // Allowed


Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:


    var cars = ["Volvo", "BMW"];         // Allowed
    const cars = ["Volvo", "BMW"];       // Not allowed
    {
      var cars = ["Volvo", "BMW"];         // Allowed
      const cars = ["Volvo", "BMW"];       // Not allowed
    }
    
Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:

    const cars = ["Volvo", "BMW"];       // Allowed
    const cars = ["Volvo", "BMW"];       // Not allowed
    var cars = ["Volvo", "BMW"];         // Not allowed
    cars = ["Volvo", "BMW"];             // Not allowed

    {
    const cars = ["Volvo", "BMW"];     // Allowed
    const cars = ["Volvo", "BMW"];     // Not allowed
    var cars = ["Volvo", "BMW"];       // Not allowed
    cars = ["Volvo", "BMW"];           // Not allowed
    }

Redeclaring an array with const, in another scope, or in another block, is allowed:

    const cars = ["Volvo", "BMW"];       // Allowed
    {
      const cars = ["Volvo", "BMW"];     // Allowed
    }
    {
      const cars = ["Volvo", "BMW"];     // Allowed
    }

# JavaScript Dates

Note: JavaScript counts months from 0 to 11:

January = 0.

December = 11.

    const d = new Date();
    // Sat Oct 23 2021 10:32:02 GMT+0700 (Indochina Time)

**Creating Date Objects**

There are 4 ways to create a new date object:

    new Date()
    // creates a new date object with the current date and time
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    //creates a new date object with a specified date and time
    new Date(milliseconds)
    // creates a new date object as zero time plus milliseconds
    new Date(date string)
    // creates a new date object from a date string

# JavaScript Date Format

    Type	      Example
    ISO Date    "2015-03-25" (The International Standard)
    Short Date	"03/25/2015"
    Long Date	  "Mar 25 2015" or "25 Mar 2015"

# JavaScript Date Get Methods

    Method            Description
    getFullYear()	    Get the year as a four digit number (yyyy)
    getMonth()	      Get the month as a number (0-11)
    getDate()	        Get the day as a number (1-31)
    getHours()  	    Get the hour (0-23)
    getMinutes()	    Get the minute (0-59)
    getSeconds()	    Get the second (0-59)
    getMilliseconds()	Get the millisecond (0-999)
    getTime()	        Get the time (milliseconds since January 1, 1970)
    getDay()	        Get the weekday as a number (0-6)
    Date.now()	      Get the time. ECMAScript 5.


# JavaScript Date Set Methods

# JavaScript Math

# JavaScript Random

# JavaScript Booleans

# JavaScript Comparisons

# JavaScript Conditions

# JavaScript Switch

# JavaScript Loop For

# JavaScript Loop In

# JavaScript Loop Of

# JavaScript Loop While

# JavaScript Break

# JavaScript Iterables

# JavaScript Sets

# JavaScript Maps

# JavaScript Typeof 

# JavaScript Type Conversion

# JavaScript Bitwise

# JavaScript RegExp

# JavaScript Errors

# JavaScript Scope

# JavaScript Hoisting

# JavaScript Strict Mode

# JavaScript this Keyword

# JavaScript Arrow Function

# JavaScript Classes

# JavaScript JSON

# JavaScript Debugging

# JavaScript Style Guide

# JavaScript Best Practices

# JavaScript Mistakes

# JavaScript Performance

# JavaScript Reserved Words



















