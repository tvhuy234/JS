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

[CSS Borders
](#css-borders
)

[CSS Margins
](#css-margins
)

[CSS Padding
](#css-padding
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

# CSS Borders

**CSS Border Style**

The border-style property specifies what kind of border to display.

The following values are allowed:

dotted - Defines a dotted border

dashed - Defines a dashed border

solid - Defines a solid border

double - Defines a double border

groove - Defines a 3D grooved border. The effect depends on the border-color value

ridge - Defines a 3D ridged border. The effect depends on the border-color value

inset - Defines a 3D inset border. The effect depends on the border-color value

outset - Defines a 3D outset border. The effect depends on the border-color value

none - Defines no border
hidden - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).



    p.dotted {border-style: dotted;}
    p.dashed {border-style: dashed;}
    p.solid {border-style: solid;}
    p.double {border-style: double;}
    p.groove {border-style: groove;}
    p.ridge {border-style: ridge;}
    p.inset {border-style: inset;}
    p.outset {border-style: outset;}
    p.none {border-style: none;}
    p.hidden {border-style: hidden;}
    p.mix {border-style: dotted dashed solid double;}

**CSS Border Width**

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

    p.one {
     border-style: solid;
     border-width: 5px;
    }

    p.two {
     border-style: solid;
     border-width: medium;
    }

    p.three {
     border-style: dotted;
     border-width: 2px;
    }

    p.four {
     border-style: dotted;
     border-width: thick;
    }

**Specific Side Widths**

    p.one {
     border-style: solid;
     border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
    }

    p.two {
     border-style: solid;
     border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
    }

    p.three {
     border-style: solid;
     border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
    }

**CSS Border Color**

The color can be set by:

    name - specify a color name, like "red"
    HEX - specify a HEX value, like "#ff0000"
    RGB - specify a RGB value, like "rgb(255,0,0)"
    HSL - specify a HSL value, like "hsl(0, 100%, 50%)"
    transparent

**Specific Side Colors**

    p.one {
     border-style: solid;
     border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
    }

**CSS Border - Individual Sides**

    p {
     border-top-style: dotted;
     border-right-style: solid;
     border-bottom-style: dotted;
     border-left-style: solid;
    }

**CSS Border - Shorthand Property**

The border property is a shorthand property for the following individual border properties:

- border-width
- border-style (required)
- border-color
 
 
        p {
         border-bottom: 6px solid red;
         background-color: lightgrey;
        }

**CSS Rounded Borders**

    p {
     border: 2px solid red;
     border-radius: 5px;
    }

# CSS Margins

Margins are used to create space around elements, outside of any defined borders.

    //Set different margins for all four sides of a <p> element:

    p {
     margin-top: 100px;
     margin-bottom: 100px;
     margin-right: 150px;
     margin-left: 80px;
    }

    //Shorthand:
    p {
     margin: 25px 50px 75px 100px;
    }
**The auto Value**

 Set the margin property to auto to horizontally center the element within its container.

    div {
     width: 300px;
     margin: auto;
     border: 1px solid red;
    }

**The inherit Value**

    This example lets the left margin of the <p class="ex1"> element be inherited from the parent element (<div>):

    div {
     border: 1px solid red;
     margin-left: 100px;
    }

    p.ex1 {
     margin-left: inherit;
    }

**Margin Collapse**

Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

    h1 {
     margin: 0 0 50px 0;
    }

    h2 {
     margin: 20px 0 0 0;
    }

# CSS Padding

Padding is used to create space around an element's content, inside of any defined borders.

**Padding - Individual Sides**

    div {
     padding-top: 50px;
     padding-right: 30px;
     padding-bottom: 50px;
     padding-left: 80px;
    }

    //Shorthand Property:
    div {
     padding: 25px 50px 75px 100px;
    }

**Padding and Element Width**

