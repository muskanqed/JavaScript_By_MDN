# Introduction to JavaScript

## What is EcmaScript?

- EcmaScript is the standard on which JavaScript is based.
- EcmaScript and JavaScript are the same and are often used interchangeably.
- JavaScript is very flexible and liberal in its usage.

## How do I Execute JavaScript?

There are multiple ways to execute JavaScript:

1. **In Your Browser:**
   - You can execute JavaScript directly in your browser.
   - Right-click on the browser (e.g., Chrome), select **Inspect**, and then navigate to the **Console** tab.

2. **Using a Runtime Environment (e.g., Node.js):**
   - Install Node.js on your machine.
   - Create a `.js` file and run it using the following command:
   
     ```bash
     node index.js
     ```

3. **Embedding JavaScript in an HTML Document:**
   - You can embed JavaScript within an HTML document using the `<script>` tag:
   
     ```html
     <script>
       // Your JavaScript code here
     </script>
     ```

## Who Created the JavaScript Runtime (Node.js)?

Ryan Dahl created the JavaScript runtime, Node.js, by embedding the V8 engine of the Chrome browser into a C++ program. This allows JavaScript to be used outside of the browser environment.

# Variables in JavaScript

## What is a Variable?

- A variable is a container that stores a value.
- The value or datatype of a variable can be changed during program execution/runtime, as JavaScript is a dynamic programming language.

## Rules for Choosing Variable Names:

1. Letters, digits, underscores, and dollar signs are allowed.
2. You cannot use numbers at the beginning.
3. A variable must begin with a dollar sign (`$`), an underscore (`_`), or a letter.
4. JavaScript reserved words cannot be used as variable names.
5. JavaScript is case-sensitive.

## LET, CONST, and VAR: What Are They?

1. **`var`** is globally scoped, while **`let`** and **`const`** are block-scoped.
2. **`var`** can be updated and redeclared within its scope.
3. **`let`** can be updated, but not redeclared.
4. **`const`** can neither be updated nor redeclared.
5. **`var`** variables are initialized with `undefined`, whereas **`let`** and **`const`** variables are not initialized.
6. **`const`** must be initialized during declaration, unlike **`let`** and **`var`**.

## Example Code

You can find an example of variable declaration and usage in JavaScript in the following file:

[Variable_Declaration.js](https://github.com/muskanqed/Learning_JavaScript_From_Scratch/blob/main/Basics_Of_JavaScript/Variable_Declaration.js)

