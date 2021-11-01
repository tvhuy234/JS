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

[CSS Height and Width
](#css-height-and-width
)

[CSS Box Model
](#css-box-model
)


[CSS Outline
](#css-outline
)

[CSS Text](#css-text)

[CSS Fonts
](#css-fonts
)

[CSS Icons
](#css-icons
)

[CSS Links
](#css-links
)

[CSS Lists
](#css-lists
)


[CSS Tables
](#css-tables
)

[CSS Display](#css-display)

[CSS Position](#css-position)


[CSS Z-index](#css-z-index)

[CSS Overflow](#css-overflow)

[CSS Float](#css-float)

[CSS Inline-block](#css-inline-block)

[CSS Align](#css-align)

[CSS Combinators](#css-combinators)

[CSS Pseudo-classes
](#css-pseudo-classes
)

[CSS Image Sprites
](#css-image-sprites
)

[CSS Attribute Selectors
](#css-attribute-selectors
)

[CSS Units
](#css-units)

[CSS !important](#css-!important)

[CSS Math Functions](#css-math-functions)

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

# CSS Height and Width

The CSS height and width properties are used to set the height and width of an element.

**CSS Setting height and width**

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

**CSS height and width Values**

- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm etc.
- % - Defines the height/width in percent of the containing block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value

# CSS Box Model

**The CSS Box Model**

Explanation of the different parts:

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

**Width and Height of an Element**

    //This <div> element will have a total width of 350px: 

    div {
     width: 320px;
     padding: 10px;
     border: 5px solid gray;
     margin: 0;
    }

# CSS Outline

**Outline**

An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".

CSS has the following outline properties:

- outline-style
- outline-color
- outline-width
- outline-offset
- outline

**Outline Style**

The outline-style property specifies the style of the outline, and can have one of the following values:

- dotted - Defines a dotted outline
- dashed - Defines a dashed outline
- solid - Defines a solid outline
- double - Defines a double outline
- groove - Defines a 3D grooved outline
- ridge - Defines a 3D ridged outline
- inset - Defines a 3D inset outline
- outset - Defines a 3D outset outline
- none - Defines no outline
- hidden - Defines a hidden outline


        p.dotted {outline-style: dotted;}
        p.dashed {outline-style: dashed;}
        p.solid {outline-style: solid;}
        p.double {outline-style: double;}
        p.groove {outline-style: groove;}
        p.ridge {outline-style: ridge;}
        p.inset {outline-style: inset;}
        p.outset {outline-style: outset;}

**Outline Width**

The outline-width property specifies the width of the outline, and can have one of the following values:

- thin (typically 1px)
- medium (typically 3px)
- thick (typically 5px)
- A specific size (in px, pt, cm, em, etc)


        p.ex1 {
         border: 1px solid black;
         outline-style: solid;
         outline-color: red;
         outline-width: thin;
        }

**Outline Color**

The color can be set by:

- name - specify a color name, like "red"
- HEX - specify a hex value, like "#ff0000"
- RGB - specify a RGB value, like "rgb(255,0,0)"
- HSL - specify a HSL value, like "hsl(0, 100%, 50%)"
- invert - performs a color inversion (which ensures that the outline is visible, regardless of color background)

**Outline Shorthand**

    p.ex4 {outline: thick ridge pink;}

**Outline Offset**

The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.

    p {
     margin: 30px;
     border: 1px solid black;
     outline: 1px solid red;
     outline-offset: 15px;
    }

# CSS Text

    color	Sets the color of text
    direction	Specifies the text direction/writing direction
    letter-spacing	Increases or decreases the space between characters in a text
    line-height	Sets the line height
    text-align	Specifies the horizontal alignment of text
    text-decoration	Specifies the decoration added to text
    text-indent	Specifies the indentation of the first line in a text-block
    text-shadow	Specifies the shadow effect added to text
    text-transform	Controls the capitalization of text
    text-overflow	Specifies how overflowed content that is not displayed should be signaled to the user
    unicode-bidi	Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document
    vertical-align	Sets the vertical alignment of an element
    white-space	Specifies how white-space inside an element is handled
    word-spacing	Increases or decreases the space between words in a text

# CSS Fonts

Some Font Examples

    Generic Font Family	Examples of Font Names
    Serif	            Times New Roman
    Georgia
    Garamond
    Sans-serif	        Arial
    Verdana
    Helvetica
    Monospace	        Courier New
    Lucida Console
    Monaco
    Cursive	            Brush Script MT
    Lucida Handwriting
    Fantasy	            Copperplate
    Papyrus

**The CSS font-family Property**

    .p1 {
     font-family: "Times New Roman", Times, serif;
    }

    .p2 {
     font-family: Arial, Helvetica, sans-serif;
    }

**CSS Web Safe Fonts**

Web safe fonts are fonts that are universally installed across all browsers and devices.

*Fallback Fonts*

There is always a chance that a font is not found or is not installed properly.

Therefore, it is very important to always use fallback fonts.

    //Here, there are three font types: Tahoma, Verdana, and sans-serif. The second and third fonts are backups, in case the first one is not found.

    p {
    font-family: Tahoma, Verdana, sans-serif;
    }

**Best Web Safe Fonts for HTML and CSS**

The following list are the best web safe fonts for HTML and CSS:

    Arial (sans-serif)
    Verdana (sans-serif)
    Helvetica (sans-serif)
    Tahoma (sans-serif)
    Trebuchet MS (sans-serif)
    Times New Roman (serif)
    Georgia (serif)
    Garamond (serif)
    Courier New (monospace)
    Brush Script MT (cursive)

*Commonly Used Font Fallbacks:*
- Serif
- Sans-serif
- Monospace
- Cursive
- Fantasy

All CSS Font Properties:

    font	Sets all the font properties in one declaration
    font-family	Specifies the font family for text
    font-size	Specifies the font size of text
    font-style	Specifies the font style for text
    font-variant	Specifies whether or not a text should be displayed in a small-caps font
    font-weight	Specifies the weight of a font

# CSS Icons

**Font Awesome Icons**

Get a code to add in the <head> section of your HTML page:

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

**Bootstrap Icons**

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

**Google Icons**

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

# CSS Links

**Styling Links**

    a {
     color: hotpink;
    }

*The four links states are:*

- a:link - a normal, unvisited link
- a:visited - a link the user has visited
- a:hover - a link when the user mouses over it
- a:active - a link the moment it is clicked

# CSS Lists


    list-style	Sets all the properties for a list in one declaration
    list-style-image	Specifies an image as the list-item marker
    list-style-position	Specifies the position of the list-item markers (bullet points)
    list-style-type	Specifies the type of list-item marker

# CSS Tables

    CSS Table       Properties
    Property	    Description
    border	        Sets all the border properties in one declaration
    border-collapse	Specifies whether or not table borders should be collapsed
    border-spacing	Specifies the distance between the borders of adjacent cells
    caption-side	Specifies the placement of a table caption
    empty-cells	    Specifies whether or not to display borders and background on empty cells in a table
    table-layout	Sets the layout algorithm to be used for a table

# CSS Display

**The display Property**

The display property specifies if/how an element is displayed.

**Block-level Elements**

Examples of block-level elements:

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

        <div>
        <h1> - <h6>
        <p>
        <form>
        <header>
        <footer>
        <section>


**Inline Elements**

An inline element does not start on a new line and only takes up as much width as necessary.

Examples of inline elements:

        <span>
        <a>
        <img>

# CSS Position 

**The position Property**

There are five different position values:

- static: HTML elements are positioned static by default.
- relative: HTML element is positioned relative to its normal position.
- fixed: HTML element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
- absolute: HTML element is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- sticky: HTML element is positioned based on the user's scroll position.

# CSS Z-index
The z-index property specifies the stack order of an element.

**The z-index Property**

    img {
     position: absolute;
     left: 0px;
     top: 0px;
     z-index: -1;
    }

*Note*: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).

# CSS Overflow

The CSS overflow property controls what happens to content that is too big to fit into an area.


**overflow: visible**

By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:

    div {
     width: 200px;
     height: 50px;
     background-color: #eee;
     overflow: visible;
    }

**overflow: hidden**

With the hidden value, the overflow is clipped, and the rest of the content is hidden:

**overflow: scroll**
**overflow: auto**
**overflow-x and overflow-y**

- overflow-x specifies what to do with the left/right edges of the content.
- overflow-y specifies what to do with the top/bottom edges of the content.
 
        div {
         overflow-x: hidden; /* Hide horizontal scrollbar */
         overflow-y: scroll; /* Add vertical scrollbar */
        }

# CSS Float

**The float Property**

The float property can have one of the following values:

- left - The element floats to the left of its container
- right - The element floats to the right of its container
- none - The element does not float (will be displayed just where it occurs in the text). This is default
- inherit - The element inherits the float value of its parent

**The clear Property**

The clear property can have one of the following values:

- none - The element is not pushed below left or right floated elements. This is default
- left - The element is pushed below left floated elements
- right - The element is pushed below right floated elements
- both - The element is pushed below both left and right floated elements
- inherit - The element inherits the clear value from its parent

**The clearfix Hack**

If a floated element is taller than the containing element, it will "overflow" outside of its container. We can then add a clearfix hack to solve this problem.

# CSS Inline-block

# CSS Align

**Center Align Elements**

To horizontally center a block element, use 

    margin: auto;

**Center Align Text**

    .center {
     text-align: center;
     border: 3px solid green;
    }

**Center an Image**

To center an image, set left and right margin to auto and make it into a block element:

    img {
     display: block;
     margin-left: auto;
     margin-right: auto;
     width: 40%;
    }

**Left and Right Align - Using position**

    .right {
     position: absolute;
     right: 0px;
     width: 300px;
     border: 3px solid #73AD21;
     padding: 10px;
    }

**Left and Right Align - Using float**

    .right {
     float: right;
     width: 300px;
     border: 3px solid #73AD21;
     padding: 10px;
    }


# CSS Combinators

**Descendant Selector**

The descendant selector matches all elements that are descendants of a specified element.

    //Selects all <p> elements inside <div> elements: 

    div p {
    background-color: yellow;
    }

**Child Selector (>)**

The child selector selects all elements that are the children of a specified element.

    //Selects all <p> elements that are children of a <div> element:

    div > p {
    background-color: yellow;
    }

**Adjacent Sibling Selector (+)**

The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

    //Selects the first <p> element that are placed immediately after <div> elements:

    div + p {
    background-color: yellow;
    }

**General Sibling Selector (~)**
The general sibling selector selects all elements that are next siblings of a specified element.

# CSS Pseudo-classes
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus
 
All CSS Pseudo Classes

    Selector	Example	Example description
    :active	a:active	Selects the active link
    :checked	input:checked	Selects every checked <input> element
    :disabled	input:disabled	Selects every disabled <input> element
    :empty	p:empty	Selects every <p> element that has no children
    :enabled	input:enabled	Selects every enabled <input> element
    :first-child	p:first-child	Selects every <p> elements that is the first child of its parent
    :first-of-type	p:first-of-type	Selects every <p> element that is the first <p> element of its parent
    :focus	input:focus	Selects the <input> element that has focus
    :hover	a:hover	Selects links on mouse over
    :in-range	input:in-range	Selects <input> elements with a value within a specified range
    :invalid	input:invalid	Selects all <input> elements with an invalid value
    :lang(language)	p:lang(it)	Selects every <p> element with a lang attribute value starting with "it"
    :last-child	p:last-child	Selects every <p> elements that is the last child of its parent
    :last-of-type	p:last-of-type	Selects every <p> element that is the last <p> element of its parent
    :link	a:link	Selects all unvisited links
    :not(selector)	:not(p)	Selects every element that is not a <p> element
    :nth-child(n)	p:nth-child(2)	Selects every <p> element that is the second child of its parent
    :nth-last-child(n)	p:nth-last-child(2)	Selects every <p> element that is the second child of its parent, counting from the last child
    :nth-last-of-type(n)	p:nth-last-of-type(2)	Selects every <p> element that is the second <p> element of its parent, counting from the last child
    :nth-of-type(n)	p:nth-of-type(2)	Selects every <p> element that is the second <p> element of its parent
    :only-of-type	p:only-of-type	Selects every <p> element that is the only <p> element of its parent
    :only-child	p:only-child	Selects every <p> element that is the only child of its parent
    :optional	input:optional	Selects <input> elements with no "required" attribute
    :out-of-range	input:out-of-range	Selects <input> elements with a value outside a specified range
    :read-only	input:read-only	Selects <input> elements with a "readonly" attribute specified
    :read-write	input:read-write	Selects <input> elements with no "readonly" attribute
    :required	input:required	Selects <input> elements with a "required" attribute specified
    :root	root	Selects the document's root element
    :target	#news:target	Selects the current active #news element (clicked on a URL containing that anchor name)
    :valid	input:valid	Selects all <input> elements with a valid value
    :visited	a:visited	Selects all visited links

All CSS Pseudo Elements

    ::after	p::after	Insert content after every <p> element
    ::before	p::before	Insert content before every <p> element
    ::first-letter	p::first-letter	Selects the first letter of every <p> element
    ::first-line	p::first-line	Selects the first line of every <p> element
    ::selection	p::selection	Selects the portion of an element that is selected by a user

# CSS Image Sprites

An image sprite is a collection of images put into a single image.

A web page with many images can take a long time to load and generates multiple server requests.

Using image sprites will reduce the number of server requests and save bandwidth.

# CSS Attribute Selectors

**CSS [attribute] Selector**

The [attribute] selector is used to select elements with a specified attribute.

    //Selects all <a> elements with a target attribute:

    a[target] {
     background-color: yellow;
    }

**CSS [attribute="value"] Selector**

    //Selects all <a> elements with a target="_blank" attribute:

    a[target="_blank"] {
    background-color: yellow;
    }

**CSS [attribute~="value"] Selector**

Select elements with an attribute value containing a specified word.


    [title~="flower"] {
    border: 5px solid yellow;
    }

**CSS [attribute|="value"] Selector**

Sselect elements with the specified attribute starting with the specified value.


    [class|="top"] {
     background: yellow;
    }

    //The value has to be a whole word, either alone, like class="top", or followed by a hyphen( - ), like class="top-text"! 

**CSS [attribute^="value"] Selector**

    //Select elements whose attribute value begins with a specified value.
    [class^="top"] {
     background: yellow;
    }

**CSS [attribute$="value"] Selector**

    //Select elements whose attribute value ends with a specified value.
    
**CSS `[attribute*="value"]` Selector**

    //select elements whose attribute value contains a specified value.

# CSS Units

**Absolute Lengths**

    cm	    centimeters
    mm	    millimeters
    in	    inches (1in = 96px = 2.54cm)
    px *    pixels (1px = 1/96th of 1in)
    pt	    points (1pt = 1/72 of 1in)
    pc	    picas (1pc = 12 pt)

# CSS !important
The !important rule in CSS is used to add more importance to a property/value than normal.

# CSS Math Functions

**The calc() Function**

The calc() function performs a calculation to be used as the property value.

    //Use calc() to calculate the width of a <div> element:

    #div1 {
     position: absolute;
     left: 50px;
     width: calc(100% - 100px);
     border: 1px solid black;
     background-color: yellow;
     padding: 5px;
    }

**The max() Function**

The max() function uses the largest value, from a comma-separated list of values, as the property value.

    //Use max() to set the width of #div1 to whichever value is largest, 50% or 300px:

    #div1 {
     background-color: yellow;
     height: 100px;
     width: max(50%, 300px);
    }

**The min() Function**

The min() function uses the smallest value, from a comma-separated list of values, as the property value.

