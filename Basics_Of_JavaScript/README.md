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

# Primitives and Non-Primitives Datatypes in JavaScript

## Primitive Datatype

In JavaScript, **primitive data types** are the most basic data types, representing single values. 

There are 7 primitive datatypes in JavaScript:

1. **Null**
2. **Number**
3. **Boolean**
4. **BigInt**
5. **String**
6. **Symbol**
7. **Undefined**

## What is a Type in JavaScript?

In JavaScript, the `typeof` operator is used to determine the type of a given operand.

## Non-Primitive Datatype

In JavaScript, **non-primitive data types** (also known as reference types) are types that store collections of values or more complex entities. Unlike primitive data types, which are immutable and stored by value, non-primitive types are mutable and stored by reference.

### Key Non-Primitive Data Types in JavaScript

1. **Object**:
   - An object is a collection of key-value pairs where each key is a string (or symbol) and the value can be any type, including other objects.
   - Objects can represent more complex data structures like arrays, functions, dates, and more.

2. **Array**:
   - Arrays are special types of objects that are used to store ordered collections of values. These values can be of any type, and arrays are zero-indexed.

3. **Function**:
   - In JavaScript, functions are also objects. A function can be assigned to a variable, passed as an argument, and returned from another function.

4. **Date**:
   - The `Date` object is used to work with dates and times.

## Example Code

You can find an example of primitive and non-primitive datatypes in JavaScript in the following file:

[Primitives_Non-Primitives.js](https://github.com/muskanqed/Learning_JavaScript_From_Scratch/blob/main/Basics_Of_JavaScript/Primitives_Non-Primitives.js)
