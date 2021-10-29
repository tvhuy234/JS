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

[CSS Backgrounds
](#css-backgrounds
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

**CSS Text Color**

    <h1 style="color:Tomato;">Hello World</h1>

**CSS Border Color**

    <h1 style="border:2px solid Tomato;">Hello World</h1>

**CSS Color Values**

*RGB Value*

    <h2 style="background-color:rgb(255, 0, 0);">Hello World</h2>
*RGBA Value*

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

    <h2 style="background-color:rgba(255, 99, 71, 0);">Hello World</h2>

*HEX Value*

In CSS, a color can be specified using a hexadecimal value in the form:

    #rrggbb

    <h2 style="background-color:#3c3c3c;">Hello</h2>

*3 Digit HEX Value*

The 3-digit hex code is a shorthand for some 6-digit hex codes.

    #rgb

*HSL Value*

In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:

    hsl(hue, saturation, lightness)

    <h2 style="background-color:hsl(0, 100%, 50%);">Hello</h2>

*HSLA Value*

HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.

    hsla(hue, saturation, lightness, alpha)

# CSS Backgrounds

**CSS background-color**

The background color of a page is set like this:

    body {
     background-color: lightblue;
    }

Other Elements:
    h1 {
     background-color: green;
    }

    div {
     background-color: lightblue;
    }

**Opacity / Transparency**

The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:

    div {
     background-color: green;
     opacity: 0.3;
    }

**CSS background-image**

Set the background image for a page: 

    body {
     background-image: url("paper.gif");
    }

**CSS background-repeat**

    body {
     background-image: url("gradient_bg.png");
     background-repeat: repeat-x;
    }

Show the background image only once:

    body {
     background-image: url("img_tree.png");
     background-repeat: no-repeat;
    }

**CSS background-attachment**

Specify that the background image should be fixed:

    body {
     background-image: url("img_tree.png");
     background-repeat: no-repeat;
     background-position: right top;
     background-attachment: fixed;
    }
Specify that the background image should scroll with the rest of the page:

    body {
     background-image: url("img_tree.png");
     background-repeat: no-repeat;
     background-position: right top;
     background-attachment: scroll;
    }

**CSS Background Shorthand**

    body {
    background: #ffffff url("img_tree.png") no-repeat right top;
    }
When using the shorthand property the order of the property values is:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position
