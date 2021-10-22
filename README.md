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




# JavaScript Strings

# JavaScript Strings Methods

# JavaScript Search

# JavaScript Templates

# JavaScript Numbers

# JavaScript Number Methods

# JavaScript Array Sort

# JavaScript Array Iteration

# Javascript Array Const

# JavaScript Dates

# JavaScript Date Format

# JavaScript Date Get Methods

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



















