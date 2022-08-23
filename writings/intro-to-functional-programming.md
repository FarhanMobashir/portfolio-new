---
title: "Introduction to Functional Programming"
description: "Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data."
date: "2020-01-02"
---

### Introduction to Functional Programming

In computer science, functional programming is a programming paradigm more specifically a declarative paradigm where programs are constructed using functions and composing functions. In functional programming, functions are treated as values that can be passed to other functions as arguments. Languages support like Haskell, Clojure, Elm support functional patterns very well. Javascript, on the other hand, is not really a fully functional language however `functions` in Javascript are first-class citizens and hence we can use it to use functional programming in our code really well.

Functional programming has one simple and main idea of having pure functions which basically means it only takes its input in gives output back irrespective of what having outside of the world.

1. Pure functions don’t have any side effects and to know what is side-effects you can say them as the things which are done not as part of the function return value.
2. Pure functions are deterministic.

**Example of an impure function**

```bash

let name = "Mobashir";
function sayHello() {
  console.log(`Hello ${name}`);
}

sayHello(); // Mobashir
name = "Farhan";
sayHello(); //  Farhan
```

**Example of a pure function**

```jsx
function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello("Mobashir")); // Mobashir
console.log(sayHello("Mobashir")); // Mobashir
console.log(sayHello("Farhan")); // Farhan
```

In both examples, we can see the impure function gives unexpected results due to a change of name variable and hence it has some connection with the outside world, while the pure function just takes the input and gives the same output wherever we call it.

When we are doing functional programming we mostly take care of the computational aspect of the program and not the side effects like making an API call or logging some data to the console or database transaction.

So if we are writing a program in a functional pattern we basically remove all the side effects to the outside of the world and then the remaining part remains pure. This helps us to be a little bit more deterministic about the code and also helps us in unit testing.

**Why Functional Programming?**

1. Functional programs are more deterministic
2. They are a more kind of self-documented
3. They are easy to debug
4. Of course, they will always be easy to unit test and help us in the removal of mocking the program and all the complicated stuff to test our code.
5. Many folks have the notion that the functional paradigm is the best paradigm is not really the case as we know in computer science there is always a tradeoff and we will look at that as we go ahead.
6. Functional programming can be good in a lot of cases like data transformation, or we want to really be certain for some calculation or stuff like that, it is then a good choice.

We should not have our goal to learn functional programming and tend to look smart instead we should learn it in a deeper way which will help us to figure out how to write our code in a more efficient and self-documented way in which we test, debug and ship easily.

### What should we keep in mind while doing functional programming

1. We should do everything with the help of functions.
2. We thinking about writing our program instead of thinking about what my program will do we should think of what my program will take and what it will give back.
3. Functional programming works well with strongly typed data and functions
4. Example of imperative style

```jsx
// imperative style
let name = "John";
let score = 5;

console.log(`${name} scored ${score}`); // John scored 5
score = 10;
console.log(`${name} scored ${score}`); // John scored 10
```

In the above example, we cannot directly tell what are the input here and what are the outputs and we have to see all the imperative commands to actually know the result. However, in the example below let have a look at a more functional approach

```jsx
// functional way
function nameAndScore(name, score) {
  return `${name} score ${score}`;
}

console.log(nameAndScore("Naresh", 10)); // Naresh scored 10
console.log(nameAndScore("Ali", 7)); //  Ali scored 7
```

In the example above we can easily predict the input as well as the output of the program due to these pure functions.

### Recursion

Now we will look at the importance of recursion in functional programming and how it help us to stay out of using loop in our program and being more imperative

In the recursive approach, we will be calling the function from within itself. Here instead of handling state, we will just keep in mind the input that is going in the function and the output going out of the function.

> Iteration doesn’t really go well with functional programming and hence while doing functional programming we should think more about the recursive approach

Let’s compare a function with an iterative approach as well as a recursive approach

**Iterative approach**

```jsx
// iterative approach
function sum(arrayOfNums) {
  let sumTotal = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    sumTotal += arrayOfNums[i];
  }
  return sumTotal;
}

console.log(sum([1, 2, 3, 4, 5])); // 15
```

**Recursive approach**

```jsx
// recursive approach
function sum(arrayOfNums) {
  if (arrayOfNums.length === 1) {
    // base case
    return arrayOfNums[0];
  } else {
    // recursive function
    return arrayOfNums[0] + sum(arrayOfNums.slice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5])); // 15
```

While writing recursive functions we should keep two things in our mind:

1. Base Case: In our code the if block is the base case
2. Recursive Case: The else block is the recursive case
3. Recursion doesn’t ensure the function is a pure function.

**Let’s take another example of the recursive approach and iterative approach**

Iterative Fibonacci Sum

```jsx
// recursive approach
function iterativeFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

console.log(iterativeFibonacci(10)); // 55
```

Recursive fibonacci sum

```jsx
// recursive approach
function recursiveFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(recursiveFibonacci(10));
```

**Problems with recursion**

1. Many times we do the same calculation over and over again and the solution to this is memoization.
2. The second problem is the stack overflow when calling the recursive function with very large number like in Fibonacci and the solution to that is tail call recursion. It is a thing in js runtime that if we write our recursive function in a particular way it does optimization for us.
3. When doing recursion we are playing with call stack and hence debugging it is a little bit complicated.
4. Only safari supports tail call optimization properly. Chrome and V8 don’t.

### Higher Order Function `map`,`filter`,`reduce`

Javascript has a first-class function which means we can pass a function as the arguments to other functions.

Higher order functions are the functions that take in other functions as input. We will use higher-order functions more while working with functional programming in javascript. They are also the alternative to loop

All these `map`,`filer`,`reduce` are array methods and they work on the array.

1. Filter filters something from an array base on some condition.
2. Map takes an array and do some operation and then returns the operated array.
3. Reduce take an array and reduce it to one single value or some accumulated value.

**Let's learn more about these functions:**

1. Map and filter don’t mutate the array and can be called a pure function but your callback doesn’t ensure to be a pure function and it can have impurities.

### Filter

let us write our own basic filter function.

```jsx
function myFilter(array, cb) {
  let returnArr = [];
  array.forEach((item) => {
    if (cb(item)) {
      returnArr.push(item);
    }
  });
  return returnArr;
}

function isEven(item) {
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isGreaterThan5(item) {
  if (item > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(myFilter([1, 2, 3, 4, 5, 6], isEven)); // [2,4,6]
console.log(myFilter([1, 2, 3, 4, 5, 6], isGreaterThan5)); // [6]
```

Appraoch : Here we have followed these steps while creating the filter function

- First we made a function that will take an array and a callback function as arguments
- Then we make an empty array and returned it. This helps our data to be immutable
- Then we start looping through the array and checked it the return value from calling our callback function taking every item of the array as the arguments return true or false. If the result is true we pushed them into oor return array else we did nothing.
- This way we have made our own filter function.

### Map

Let us write our own mapping function similar to `Array.map()`

```jsx
function myMap(array, cb) {
  let returnArr = [];
  array.forEach((item) => {
    returnArr.push(cb(item));
  });
  return returnArr;
}

let myArray = [1, 2, 3, 4];

function doubleItem(item) {
  return item * 2;
}
console.log(myArray); // [1,2,3,4]
console.log(myMap(myArray, doubleItem)); // [2,4,6,8]
console.log(myArray); // [1,2,3,4]
```

Approach: We have followed the following steps while writing our own mapping function

- As we know map returns the same length array after doing some operation on the array and also doesn’t mutate the array.
- So the first step I have taken is to define our function which will take two arguments namely `array` and `callback function` .
- Then we declare an empty array and return the same array. This ensures immutability.
- Then we loop through every item of the array that will be passed as an argument and we keep pushing the return value of the callback function being called with the item to the return array.

### Reduce

Let us write our own mapping function similar to `Array.reduce()`

```jsx
function myReduce(array, cb, initialValue) {
  let accumulator = initialValue;
  array.forEach((item) => {
    accumulator = cb(accumulator, item);
  });
  return accumulator;
}

let myArray = [1, 2, 3, 4, 5];

let sum = myReduce(myArray, (acc, item) => acc + item, 0);
console.log(sum); // 15
let product = myReduce(myArray, (acc, item) => acc * item, 1);
console.log(product); // 120
```

Approach : We have followed the following steps while writing our own reduced function

- First, as we know reduce combine our array and reduce it on the basis of the reducer function being passed.
- The first step we took is defining our function which will take an array, a callback function, and an initial value.
- Then we made a local variable inside and assigned it to the value being passed as initialValue to the value of the accumulator.
- Then we loop over the array and keep assigning the accumulator to the value that came back as the return after calling the callback function with arguments as the accumulator and the item from the array.
- Finally, we return the accumulator

### Closure

Closure is one of the things which is very handy in functional programming. As we use higher order function it basically takes some input and returns output according to that. However, within the body of the function, we can also define another function and we can define it’s own value and variable inside it. And when we define inner function it has the access to the variable from the outer function. And when we return the inner function from the outer function an interesting thing happens which let us remember the value of the outer function if we call the inner function. This helps us to not pollute the global execution context. That’s a lot of words I think. Let’s learn the same through the code.

**Question:** Write a function which when called for the first three times returns “Hello World”and in the fourth call return “Call limit reached”.

**Approach 1:** Using a global variable

```jsx
let functionCallCount = 1;
function sayHelloTillThreeTimes() {
  if (functionCallCount <= 3) {
    functionCallCount += 1;
    return "Hello World";
  } else {
    return "Call Limit Reached";
  }
}

// calling the function
console.log(sayHelloTillThreeTimes()); // Hello World
console.log(sayHelloTillThreeTimes()); // Hello World
console.log(sayHelloTillThreeTimes()); // Hello World
console.log(sayHelloTillThreeTimes()); // Call Limit Reached
```

In the above, we have made the program work using the global variable which is not a good practice and we are polluting the global environment. So what we should do?

**Approach 2:** Not using the global variable

```jsx
// not using global variable
function sayHelloThreeTimes() {
  let functionCallCount = 0;
  return function inner() {
    functionCallCount += 1;
    if (functionCallCount <= 3) {
      return "Hello World";
    } else {
      return "Call Limit Reached";
    }
  };
}

let useSayHelloThreeTimes = sayHelloThreeTimes();

// calling the function
console.log(useSayHelloThreeTimes()); // Hello World
console.log(useSayHelloThreeTimes()); // Hello World
console.log(useSayHelloThreeTimes()); // Hello World
console.log(useSayHelloThreeTimes()); // Call Limit Reached
```

- In the above example, we make an outer function and then initialize a count variable name inside of it.
- Then we have returned a function from that outer function in which we are checking the count variable and returning the value according to it.
- Now when we use the function then we have the access to the count variable when we call our function elsewhere and we can say after 3rd call it started returning “Call Limit Reached”
- This is what we call closure in javascript because javascript is lexically scoped

### Partial Application and Currying

Partial application is the notion of remembering some arguments of a function helping us to make reuse easily.

Currying is basically making a multi-arguments function into a series of single-argument functions.

Let’s look at some code to get a more clear understanding

```jsx
// normal function
function greet(greetWord, name) {
  return `${greetWord} ${name}`;
}

let greetInEnglish = greet("Hello", "John");
let greetItalian = greet("Ciao", "John");

console.log(greetInEnglish); // Hello John
console.log(greetItalian); // Ciao John
```

In the code above we have made a very basic greet function that takes in the greeting word and the name and then returns a greeting message. However, it looks very reusable but what if we want to greet 100 people in English . Then if you will look you will see we have to pass “Hello” as the greetword every time and that’s not a very good thing I think so. So how can we do better?

Let’s look at another code example

```jsx
// currying
function greet(greetWord) {
  return function (name) {
    return `${greetWord} ${name}`;
  };
}

let greetInEnglish = greet("Hello");
// calling function
console.log(greetInEnglish("John")); // Hello John
console.log(greetInEnglish("Sarah")); // Hello Sarah

let greetItalian = greet("Ciao");
// calling the function
console.log(greetItalian("John")); // Ciao John
console.log(greetItalian("Sarah")); // Ciao Sarah
```

In the above example, we have made a curried greet function that takes in the greet word and returns us a function that further takes in the name and then returns the greet message.

Since our curried function used the idea of closure and hence when we define our function greetEnglish it will always remember the greeting word as “Hello” and now if we want to greet a hundred people in English we can simply pass their names only. This is the idea behind currying and partial application

### Function Composition

Since the idea behind functional programming is we have input coming and we have output and that output can be passed as input to other functions as well and this creates a kind of pipeline you can say.

When we write our program in a functional way we look at how the data will be flowing inside our program through different functions.

Here comes the idea of function composition where we take smaller functions and compose them together to get our desired output.

Pipelining: Where we will make a function that takes any number of single argument functions and should return a single function representing their composition.

```jsx
// // // ---- using recursion --- ///
// helpers
function length(arr) {
  return arr.length;
}

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function pipeline(...functions) {
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) (input) => head(functions)(input);
  return function (input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}

// helpers
function makeLoweCase(str) {
  return str.toLowerCase();
}

function slugify(str) {
  return str.split("").join("-");
}

let slugit = pipeline(makeLoweCase, slugify);

console.log(slugit("HelloWorld"));
```

In piping function together we need to keep in mind that the order matters

Now let's write a pipe using reduce

```jsx
function pipe(initialValue, ...functions) {
  return functions.reduce((acc, item) => {
    return item(acc);
  }, initialValue);
  return initialValue;
}

function makeLoweCase(str) {
  return str.toLowerCase();
}

function slugify(str) {
  return str.split("").join("-");
}

let slugit = pipe("Hello", makeLoweCase, slugify);

console.log(slugit);
```

### Immutability

Immutability which means not mutating is a concept that really goes hand in hand in functional programming.

How to keep avoid immutability while writing our javascript programs

- Don’t change in place instead replace
- Make a copy of our data and return that modified data instead of changing
- Use higher-order functions like map and filter to get free immutability
- One thing to also keep in mind is that copying data is not very efficient and if we have very big data then it can cause performance issues while copying it at different places.
- We can also use some libraries like ImmutableJs and Immer to ensure immutability while writing our javascript program.

### Functional Javascript Utility

1. Lodash/FP: It is not the usual lodash , it has been implemented it in a functional programming way keeping in mind immutability and purity. Still, we need to look at the documentation before using any code to make sure all things go right.
2. Ramda: It is one of the most popular ones and it is good for beginners

Thanks to this

[https://observablehq.com/collection/@anjana/functional-javascript-first-steps](https://observablehq.com/collection/@anjana/functional-javascript-first-steps)

[https://frontendmasters.com/courses/functional-js-fundamentals/](https://frontendmasters.com/courses/functional-js-fundamentals/)
