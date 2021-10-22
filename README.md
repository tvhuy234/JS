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

# JavaScript Where To

The `<script>` Tag
In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.


### **External JavaScript:**

*Example*:

`<script src="myScript.js"></script>`

*Advantages:*
It separates HTML and code

It makes HTML and JavaScript easier to read and maintain

Cached JavaScript files can speed up page loads

# JavaScript Output 

JavaScript can "display" data in different ways:

### **Writing into an HTML element, using innerHTML.**

*Example:*

`<p id="demo"></p>`

`<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
`

### **Writing into the HTML output using document.write().** 

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

Can skip the window keyword.


### **Writing into the browser console, using console.log() for debugging purposes to display data.**

# JavaScript Statements

**JavaScript statements are composed of:**

Values, Operators, Expressions, Keywords, and Comments.

**Semicolons ;**

Add a semicolon at the end of each executable statement.

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
    Can use the variable before it is declared.
- **Using let**
  
    Variables defined with let cannot be Redeclared.

    Variables defined with let must be Declared before use.

    Variables defined with let have Block Scope.
- **Using const**
  
    Variables defined with const cannot be Redeclared.

    Variables defined with const cannot be Reassigned.

    Variables defined with const have Block Scope.

# JavaScript Operators

# JavaScript Arithmetic

# JavaScript Assignment












