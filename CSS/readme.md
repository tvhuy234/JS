
# CSS Tutorial

[CSS Syntax
](#css-syntax
)

[CSS Selectors
](#css-selectors
)

[How To Add CSS](#how-to-add-css)

[CSS Comments
](#css-comments
)

[CSS Colors
](#css-colors
)

# CSS Syntax
A CSS rule consists of a selector and a declaration block.

    p   {
        color: red;
        text-align: center;
    }   
- p is a selector in CSS (it points to the HTML element you want to style: `<p>`).
- color is a property, and red is the property value
- text-align is a property, and center is the property value

# CSS Selectors

**The CSS element Selector**

Here, all <p> elements on the page will be center-aligned, with a red text color: 

    p {
        text-align: center;
        color: red;
    }

**The CSS id Selector**

    <p id="para1">Hello World!</p>

    // The CSS rule below will be applied to the HTML element with id="para1": 
    #para1   {
        text-align: 
        center;
        color: red;
    }

*Note*: An id name cannot start with a number!

**The CSS class Selector**

    <h1 class="center">Red and center-aligned heading</h1>
    <p class="center">Red and center-aligned paragraph.</p> 

    In this example all HTML elements with class="center" will be red and center-aligned: 

    .center {
        text-align: center;
        color: red;
    }

HTML elements can also refer to more than one class.

    <p class="center large">This paragraph refers to two classes.</p>

**The CSS Universal Selector**

The universal selector (*) selects all HTML elements on the page.

    * {
      text-align: center;
      color: blue;
      }
**The CSS Grouping Selector**

    h1, h2, p {
      text-align: center;
      color: red;
    }


# How To Add CSS

**External CSS**

    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="mystyle.css">
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>

**Internal CSS**

    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
    background-color: linen;
    }

    h1 {
    color: maroon;
    margin-left: 40px;
    }
    </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>

**Inline CSS**

    <!DOCTYPE html>
    <html>
    <body>

    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>

    </body>
    </html>

**Cascading Order**

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

- Inline style (inside an HTML element)
- External and internal style sheets (in the head section)
- Browser default

# CSS Comments

    /* This is a single-line comment */
    p {
     color: red;
    }
    /* This is
    a multi-line
    comment */

    p {
     color: red;
    }

# CSS Colors

**CSS Background Color**

    <h1 style="background-color:DodgerBlue;">Hello World</h1>

<h1 style="background-color:DodgerBlue;">Hello World</h1>
