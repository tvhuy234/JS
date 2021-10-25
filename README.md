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

[JavaScript Math](#javascript-math)

[JavaScript Random](#javascript-random)

[JavaScript Booleans
](#javascript-booleans
)

[JavaScript Comparisons
](#javascript-comparisons
)

[JavaScript Conditions](#javascript-conditions)

[JavaScript Switch](#javascript-switch)

[JavaScript Loop](#javascript-loop)

[JavaScript Break Continue](#javascript-break-and-continue)

[JavaScript Sets](#javascript-sets)

[JavaScript Maps
](#javascript-maps
)

[JavaScript typeof
](#javascript-typeof
)

[JavaScript Type Conversion
](#javascript-type-conversion
)

[JavaScript Bitwise](#javascript-bitwise)

[JavaScript Regular Expressions
](#javascript-regular-expressions
)

[JavaScript Errors](#javascript-errors)

[JavaScript Scope](#javascrip-scope)

[JavaScript Hoisting
](#javascript-hoisting
)

[JavaScript Strict Mode](#javascript-strict-mode)



[JavaScript this Keyword](#javascript-this-keyword)

[JavaScript Arrow Function
](#javascript-arrow-function
)

[JavaScript Classes
](#javascript-classes
)

[JavaScript JSON
](#javascript-json
)

[JavaScript Debugging
](#javascript-debugging
)

[JavaScript Style Guide
](#javascript-style-guide
)

[JavaScript Mistakes](#javascript-mistakes)


[JavaScript Performance
](#javascript-performance
)

[JavaScript Reserved Words
](javascript-reserved-words
)



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
    ISO Date      "2015-03-25" (The International Standard)
    Short Date	  "03/25/2015"
    Long Date	  "Mar 25 2015" or "25 Mar 2015"

# JavaScript Date Get Methods

    Method              Description
    getFullYear()	    Get the year as a four digit number (yyyy)
    getMonth()	        Get the month as a number (0-11)
    getDate()	        Get the day as a number (1-31)
    getHours()  	    Get the hour (0-23)
    getMinutes()	    Get the minute (0-59)
    getSeconds()	    Get the second (0-59)
    getMilliseconds()	Get the millisecond (0-999)
    getTime()	        Get the time (milliseconds since January 1, 1970)
    getDay()	        Get the weekday as a number (0-6)
    Date.now()	        Get the time. ECMAScript 5.


# JavaScript Date Set Methods
    setDate()	        Set the day as a number (1-31)
    setFullYear()	    Set the year (optionally month and day)
    setHours()	        Set the hour (0-23)
    setMilliseconds()	Set the milliseconds (0-999)
    setMinutes()	    Set the minutes (0-59)
    setMonth()	        Set the month (0-11)
    setSeconds()	    Set the seconds (0-59)
    setTime()	        Set the time (milliseconds since January 1, 1970)

# JavaScript Math

**Math Properties (Constants)**

    Math.E        // returns Euler's number
    Math.PI       // returns PI
    Math.SQRT2    // returns the square root of 2
    Math.SQRT1_2  // returns the square root of 1/2
    Math.LN2      // returns the natural logarithm of 2
    Math.LN10     // returns the natural logarithm of 10
    Math.LOG2E    // returns base 2 logarithm of E
    Math.LOG10E   // returns base 10 logarithm of E

**Math.round()**

Math.round(x) returns the nearest integer:

    Math.round(4.9);    // returns 5
    Math.round(4.7);    // returns 5
    Math.round(4.4);    // returns 4
    Math.round(4.2);    // returns 4
    Math.round(-4.2);    // returns -4

**Math.ceil()**

Math.ceil(x) returns the value of x rounded up to its nearest integer:


    Math.ceil(4.9);     // returns 5
    Math.ceil(4.7);     // returns 5
    Math.ceil(4.4);     // returns 5
    Math.ceil(4.2);     // returns 5
    Math.ceil(-4.2);     // returns -4

**Math.floor()**

Math.floor(x) returns the value of x rounded down to its nearest integer:

    Math.floor(4.9);    // returns 4
    Math.floor(4.7);    // returns 4
    Math.floor(4.4);    // returns 4
    Math.floor(4.2);    // returns 4
    Math.floor(-4.2);    // returns -5

**Math.trunc()**

Math.trunc(x) returns the integer part of x:


    Math.trunc(4.9);    // returns 4
    Math.trunc(4.7);    // returns 4
    Math.trunc(4.4);    // returns 4
    Math.trunc(4.2);    // returns 4
    Math.trunc(-4.2);    // returns -4
**Math.sign()**

Math.sign(x) returns if x is negative, null or positive:


    Math.sign(-4);    // returns -1
    Math.sign(0);    // returns 0
    Math.sign(4);    // returns 1


**Math.pow()**

Math.pow(x, y) returns the value of x to the power of y:


    Math.pow(8, 2);      // returns 64
**Math.sqrt()**

Math.sqrt(x) returns the square root of x:


    Math.sqrt(64);      // returns 8
**Math.abs()**

Math.abs(x) returns the absolute (positive) value of x:


    Math.abs(-4.7);     // returns 4.7
**Math.sin()**

Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.


    Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

**Math.cos()**

Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.


    Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
**Math.min() and Math.max()**

**Math.random()**

**The Math.log() Method**

Math.log(x) returns the natural logarithm of x:

    Math.log(1);    // returns 0
    The natural logarithm returns the time needed to reach a certain level of growth.

Math.E and Math.log() are twins.

How many times must we multiply Math.E to get 10?


    Math.log(10);    // returns 2.302585092994046

**The Math.log2() Method**

Math.log2(x) returns the base 2 logarithm of x.

How many times must we multiply 2 to get 8?


    Math.log2(8);    // returns 3
**The Math.log10() Method**
Math.log10(x) returns the base 10 logarithm of x.

How many times must we multiply 10 to get 1000?


    Math.log10(1000);    // returns 3


# JavaScript Random
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

    Math.random();

**JavaScript Random Integers**
Math.random() used with Math.floor() can be used to return random integers.

    
    // Returns a random integer from 0 to 9:
    Math.floor(Math.random() * 10);
    // Returns a random integer from 0 to 100:
    Math.floor(Math.random() * 101);
    // Returns a random integer from 1 to 10:
    Math.floor(Math.random() * 10) + 1;


# JavaScript Booleans

    Boolean(10 > 9)        // returns true
    (10 > 9)              // also returns true
    10 > 9                // also returns true

**Everything With a "Value" is True**

    100 is true
    3.14 is true
    -15 is true
    Any (not empty) string is true
    Even the string 'false' is true
    Any expression (except zero) is true
**Everything Without a "Value" is False**

    let x = 0; // False
    let x = -0; // False
    let x = ""; // False
    let x; // False
    let x = null; // False
    let x = false; // False
    let x = 10 / "Hallo"; // False

**Booleans Can be Objects**

  let x = false;
  let y = new Boolean(false);

  // typeof x returns boolean
  // typeof y returns object

    let x = false;             
    let y = new Boolean(false);

    // (x == y) is true because x and y have equal values

    let x = false;             
    let y = new Boolean(false);

    // (x === y) is false because x and y have different types

# JavaScript Comparisons

Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax


    variablename = (condition) ? value1:value2 

    let voteable = (age < 18) ? "Too young":"Old enough";

# JavaScript Conditions

    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }

# JavaScript Switch

Syntax:

    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }

**The default Keyword**

The default keyword specifies the code to run if there is no case match. The default case does not have to be the last case in a switch block:

    switch (new Date().getDay()) {
      default:
        text = "Looking forward to the Weekend";
        break;
      case 6:
        text = "Today is Saturday";
        break;
      case 0:
        text = "Today is Sunday";
    }

**Common Code Blocks**

    switch (new Date().getDay()) {
      case 4:
      case 5:
        text = "Soon it is Weekend";
        break;
      case 0:
      case 6:
        text = "It is Weekend";
        break;
      default:
        text = "Looking forward to the Weekend";
    }


# JavaScript Loop 

**For Loop**

    for (statement 1; statement 2; statement 3) {
    // code block to be executed
    }

**Loop Scope**

Using var in a loop:

    var i = 5;

    for (var i = 0; i < 10; i++) {
    // some code
    }

    // Here i is 10

Using let in a loop:

    let i = 5;

    for (let i = 0; i < 10; i++) {
    // some code
    }

    // Here i is 5

**The For In Loop**

Syntax:

    for (key in object) {
    // code block to be executed
    }

*Example:*

    const person = {fname:"John", lname:"Doe", age:25};

    let text = "";
    for (let x in person) {
    text += person[x];
    }

**Array.forEach()**

The forEach() method calls a function (a callback function) once for each array element.


    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
    txt += value;
    }

**The For Of Loop**

Looping over an Array:

    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
    text += x;
    }

Looping over a String:

    let language = "JavaScript";

    let text = "";
    for (let x of language) {
    text += x;
    }

**The While Loop**

    while (i < 10) {
    text += "The number is " + i;
    i++;
    }


**The Do While Loop**

    do {
    text += "The number is " + i;
    i++;
    }
    while (i < 10);


# JavaScript Break and Continue

Break Statement used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop:

    for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    }

**The Continue Statement**

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 3:

    for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }

# JavaScript Sets

**Essential Set Methods**

    Method	Description
    new Set()	Creates a new Set
    add()	    Adds a new element to the Set
    delete()	Removes an element from a Set
    has()	    Returns true if a value exists in the Set
    forEach()	Invokes a callback for each element in the Set
    values()	Returns an iterator with all the values in a Set
    Property	Description
    size	    Returns the number of elements in a Set


**How to Create a Set**
- Passing an Array to new Set()
- Create a new Set and use add() to add values
- Create a new Set and use add() to add variables


Create a Set:

    const letters = new Set(["a","b","c"]);
    letters.add("d");

**The forEach() Method**

    // Create a Set
    const letters = new Set(["a","b","c"]);

    // List all Elements
    let text = "";
    letters.forEach (function(value) {
    text += value;
    })

**The values() Method**

    letters.values()   // Returns [object Set Iterator]

# JavaScript Maps

**Essensial Map Methods**

Method	Description

    new Map()	Creates a new Map
    const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);

    set()	    Sets the value for a key in a Map
    // Create a Map
    const fruits = new Map();
    // Set Map Values
    fruits.set("apples", 500);
    

    get()	    Gets the value for a key in a Map
    fruits.get("apples");    // Returns 500

    delete()	Removes a Map element specified by the key
    has()	    Returns true if a key exists in a Map
    fruits.has("apples");

    forEach()	Calls a function for each key/value pair in a Map
    entries()	Returns an iterator with the [key, value] pairs in a Map
    Property	Description
    size	    Returns the number of elements in a Map

**How to Create a Map**
- Passing an Array to new Map()
- Create a Map and use Map.set()

**The forEach() Method**

The forEach() method calls a function for each key/value pair in a Map:

*Example:*

    // List all entries
    let text = "";
    fruits.forEach (function(value, key) {
    text += key + ' = ' + value;
    })
    // apples = 500
    // bananas = 300
    // oranges = 200

**The entries() Method**

The entries() method returns an iterator object with the [key, values] in a Map:

*Example:*

    // List all entries
    let text = "";
    for (const x of fruits.entries()) {
    text += x;
    }
    // apples,500
    // bananas,300
    // oranges,200
# JavaScript typeof 
In JavaScript there are 5 different data types that can contain values:

- string
- number
- boolean
- object
- function
 
There are 6 types of objects:

- Object
- Date
- Array
- String
- Number
- Boolean
 
And 2 data types that cannot contain values:

- null
- undefined

**The typeof Operator**

    typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof myCar                  // Returns "undefined" *
    typeof null                   // Returns "object"

**Note:**

- The data type of NaN is number
- The data type of an array is object
- The data type of a date is object
- The data type of null is object
- The data type of an undefined variable is undefined *
- The data type of a variable that has not been assigned a value is also undefined *
  
**Primitive Data**

A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:
- string
- number
- boolean
- undefined

        typeof "John"              // Returns "string"
        typeof 3.14                // Returns "number"
        typeof true                // Returns "boolean"
        typeof false               // Returns "boolean"
        typeof x                   // Returns "undefined" (if x has no value)

**Complex Data**

The typeof operator can return one of two complex types:
- function
- object
 
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.

    typeof {name:'John', age:34} // Returns "object"
    typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
    typeof null                  // Returns "object"
    typeof function myFunc(){}   // Returns "function"

**The constructor Property**

    "John".constructor                // Returns function String()  {[native code]}
    (3.14).constructor                // Returns function Number()  {[native code]}
    false.constructor                 // Returns function Boolean() {[native code]}
    [1,2,3,4].constructor             // Returns function Array()   {[native code]}
    {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
    new Date().constructor            // Returns function Date()    {[native code]}
    function () {}.constructor        // Returns function Function(){[native code]}

**Undefined**

In JavaScript, a variable without a value, has the value undefined. The type is also undefined. Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

    let car;    // Value is undefined, type is undefined
    car = undefined;    // Value is undefined, type is undefined

**Empty Values**

    let car = "";    // The value is "", the typeof is "string"

**null**

In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

The data type of null is an object.

    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null;    // Now value is null, but type is still an object

    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = undefined;   // Now both value and type is undefined

**Difference Between Undefined and Null**

    typeof undefined           // undefined
    typeof null                // object

    null === undefined         // false
    null == undefined          // true
# JavaScript Type Conversion

**Converting Strings to Numbers**

    Number("3.14")    // returns 3.14
    Number(" ")       // returns 0
    Number("")        // returns 0
    Number("99 88")   // returns NaN

**Number Methods**

    Number()	    Returns a number, converted from its argument
    parseFloat()	Parses a string and returns a floating point number
    parseInt()	    Parses a string and returns an integer

**The Unary + Operator**

    let y = "5";      // y is a string
    let x = + y;      // x is a number

If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

    let y = "John";   // y is a string
    let x = + y;      // x is a number (NaN)
# JavaScript Bitwise

# JavaScript Regular Expressions

**Using String search() With a String**

    let text = "Visit W3Schools!";
    let n = text.search("W3Schools");
    // 6

**Using String search() With a Regular Expression**

    let text = "Visit W3Schools";
    let n = text.search(/w3schools/i);
    // 6

# JavaScript Errors

The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.

**JavaScript try and catch**

    try {
    Block of code to try
    }
    catch(err) {
    Block of code to handle errors
    }

**JavaScript Throws Errors**

When an error occurs, JavaScript will normally stop and generate an error message.

**The throw Statement**

The throw statement allows you to create a custom error.

Technically you can throw an exception (throw an error).

The exception can be a JavaScript String, a Number, a Boolean or an Object:

    throw "Too big";    // throw a text
    throw 500;          // throw a number

**Input Validation Example**

    <!DOCTYPE html>
    <html>
    <body>

    <p>Please input a number between 5 and 10:</p>

    <input id="demo" type="text">
    <button type="button" onclick="myFunction()">Test Input</button>
    <p id="p01"></p>

    <script>
    function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
    }
    </script>

    </body>
    </html>

**The finally Statement**

    try {
    Block of code to try
    }
    catch(err) {
    Block of code to handle errors
    }
    finally {
    Block of code to be executed regardless of the try / catch result
    }

*Example*

    function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
    }

# JavaScript Scope
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:
- Block scope
- Function scope
- Global scope
 
**Block scope**
 
        {
        let x = 2;
        }
        // x can NOT be used here

        {
        var x = 2;
        }
        // x CAN be used here
**Local Scope**

Variables declared within a JavaScript function, become LOCAL to the function.

    // code here can NOT use carName

    function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    }

    // code here can NOT use carName

**Function Scope**

 Each function creates a new scope.

    function myFunction() {
    var carName = "Volvo";   // Function Scope
    }

**Global JavaScript Variables**

A variable declared outside a function, becomes GLOBAL.

    let carName = "Volvo";
    // code here can use carName

    function myFunction() {
    // code here can also use carName
    }

**Global Scope**

Variables declared Globally (outside any function) have Global Scope.

    var x = 2;       // Global scope
    let x = 2;       // Global scope
    const x = 2;       // Global scope

# JavaScript Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top.

**JavaScript Declarations are Hoisted**

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

Example 1 gives the same result as Example 2:

*Example 1:*

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

*Example 2:*

    var x; // Declare x
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

**The let and const Keywords**

    carName = "Volvo";
    let carName;
    // ReferenceError:


    carName = "Volvo";
    const carName;
    // This code will not run.

**JavaScript Initializations are Not Hoisted**

JavaScript only hoists declarations, not initializations.

Example 1 does not give the same result as Example 2:

*Example 1:*

    var x = 5; // Initialize x
    var y = 7; // Initialize y

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y


*Example 2:*

    var x = 5; // Initialize x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y

    var y = 7; // Initialize y
    // x is 5 and y is undefined 


# JavaScript Strict Mode
"use strict"; Defines that JavaScript code should be executed in "strict mode".

The "use strict" directive is only recognized at the beginning of a script or a function.


**Declaring Strict Mode**

    "use strict";
    x = 3.14;       // This will cause an error because x is not declared

    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
    }

**Not Allowed in Strict Mode**

Using a variable, without declaring it, is not allowed:

    "use strict";
    x = 3.14;                // This will cause an error

Using an object, without declaring it, is not allowed:

    "use strict";
    x = {p1:10, p2:20};      // This will cause an error

Deleting a variable (or object) is not allowed.

    "use strict";
    let x = 3.14;
    delete x;                // This will cause an error

Deleting a function is not allowed.

    "use strict";
    function x(p1, p2) {};
    delete x;                // This will cause an error 

Duplicating a parameter name is not allowed:

    "use strict";
    function x(p1, p1) {};   // This will cause an error

Octal numeric literals are not allowed:

    "use strict";
    let x = 010;             // This will cause an error

Octal escape characters are not allowed:

    "use strict";
    let x = "\010";            // This will cause an error

Writing to a read-only property is not allowed:

    "use strict";
    const obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    obj.x = 3.14;            // This will cause an error

Writing to a get-only property is not allowed:

    "use strict";
    const obj = {get x() {return 0} };

    obj.x = 3.14;            // This will cause an error

Deleting an undeletable property is not allowed:

    "use strict";
    delete Object.prototype; // This will cause an error

The word eval cannot be used as a variable:

    "use strict";
    let eval = 3.14;         // This will cause an error

The word arguments cannot be used as a variable:

    "use strict";
    let arguments = 3.14;    // This will cause an error

The with statement is not allowed:

    "use strict";
    with (Math){x = cos(2)}; // This will cause an error

For security reasons, eval() is not allowed to create variables in the scope from which it was called:

    "use strict";
    eval ("let x = 2");
    alert (x);             // This will cause an error

The this keyword in functions behaves differently in strict mode.

The this keyword refers to the object that called the function.

If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

    "use strict";
    function myFunction() {
    alert(this); // will alert "undefined"
    }
    myFunction();

**Future Proof!**

Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode:

- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield


# JavaScript this Keyword

In a method, this refers to the owner object.

Alone, this refers to the global object.

In a function, this refers to the global object.

In a function, in strict mode, this is undefined.

In an event, this refers to the element that received the event.

Methods like call(), and apply() can refer this to any object.


**this in a Method**

    fullName : function() {
    return this.firstName + " " + this.lastName;
    }

**this Alone**

When used alone, the owner is the Global object, so this refers to the Global object.

In a browser window the Global object is [object Window]:


    let x = this;
    // [object Window]

**this in a Function (Default)**

    function myFunction() {
    return this;
    }

**this in a Function (Strict)**

When used in a function, in strict mode, this is undefined.

    "use strict";
    function myFunction() {
    return this;
    }

**this in Event Handlers**

    <button onclick="this.style.display='none'">
    Click to Remove Me!
    </button>

**Object Method Binding**

    const person = {
        firstName  : "John",
        lastName   : "Doe",
        id         : 5566,
        myFunction : function() {
            return this;
        }
    };

**Explicit Function Binding**

    const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    }
    const person2 = {
    firstName:"John",
    lastName: "Doe",
    }
    person1.fullName.call(person2);  // Will return "John Doe"




# JavaScript Arrow Function

Arrow functions allow us to write shorter function syntax:

    hello = function() {
    return "Hello World!";
    }

    // With Arrow Function:
    hello = () => {
    return "Hello World!";
    }

    // Arrow Functions Return Value by Default:
    hello = () => "Hello World!";

    // Arrow Function With Parameters:
    hello = (val) => "Hello " + val;

    // Arrow Function Without Parentheses:
    hello = val => "Hello " + val;

With arrow functions the this keyword always represents the object that defined the arrow function.







# JavaScript Classes
JavaScript Classes are templates for JavaScript Objects.


Use the keyword class to create a class.

Always add a method named constructor():

    class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    }

**Using a Class**

When you have a class, you can use the class to create objects:


    let myCar1 = new Car("Ford", 2014);
    let myCar2 = new Car("Audi", 2019);

**Class Methods** 
    class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    }

    let myCar = new Car("Ford", 2014);
    document.getElementById("demo").innerHTML =
    "My car is " + myCar.age() + " years old.";
    // My car is 7 years old.

# JavaScript JSON
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

**JSON Example**

    {
    "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
    ]
    }
    
**JSON Data - A Name and a Value**
    "firstName":"John"

**JSON Objects**

    {"firstName":"John", "lastName":"Doe"}

**JSON Arrays**

    "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
    ]
**Converting a JSON Text to a JavaScript Object**

First, create a JavaScript string containing JSON syntax:

    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

    const obj = JSON.parse(text);

# JavaScript Debugging
**The console.log() Method**
**Setting Breakpoints**
**The debugger Keyword**
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

With the debugger turned on, this code will stop executing before it executes the third line:

    let x = 15 * 5;
    debugger;
    document.getElementById("demo").innerHTML = x;
# JavaScript Style Guide
Always use the same coding conventions for all your JavaScript projects.


# JavaScript Best Practices
Avoid global variables, avoid new, avoid ==, avoid eval()

Always Declare Local Variables

Declarations on Top

Initialize Variables

Declare Objects with const

Declare Arrays with const

Don't Use new Object()

Use "" instead of new String()

Use 0 instead of new Number()

Use false instead of new Boolean()

Use {} instead of new Object()

Use [] instead of new Array()

Use /()/ instead of new RegExp()

Use function (){} instead of new Function()

**Use === Comparison**

    0 == "";        // true
    1 == "1";       // true
    1 == true;      // true

    0 === "";       // false
    1 === "1";      // false
    1 === true;     // false
**Avoid Number, String, and Boolean as Objects**

# JavaScript Mistakes
**Expecting Loose Comparison**

    let x = 10;
    let y = "10";
    if (x == y)
    // true

    let x = 10;
    let y = "10";
    if (x === y)
    // false

**Confusing Addition & Concatenation**

Addition is about adding numbers.

Concatenation is about adding strings.
    let x = 10;
    x = 10 + 5;       // Now x is 15

    let y = 10;
    y += "5";        // Now y is "105"
    let x = 10;
    let y = 5;
    let z = x + y;     // Now z is 15

    let x = 10;
    let y = "5";
    let z = x + y;     // Now z is "105"

**Misunderstanding Floats**  

    let x = 0.1;
    let y = 0.2;
    let z = x + y            // the result in z will not be 0.3
    let z = (x * 10 + y * 10) / 10;       // z will be 0.3

**Accessing Arrays with Named Indexes**

    const person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    person.length;       // person.length will return 3
    person[0];           // person[0] will return "John"



    const person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    person.length;      // person.length will return 0
    person[0];          // person[0] will return undefined
# JavaScript Performance
**Reduce Activity in Loops**

    let l = arr.length;
    for (let i = 0; i < l; i++) {
**Reduce DOM Access**

If you expect to access a DOM element several times, access it once, and use it as a local variable:


    const obj = document.getElementById("demo");
    obj.innerHTML = "Hello";

**Avoid Using with**

Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

The with keyword is not allowed in strict mode.


# JavaScript Reserved Words



















