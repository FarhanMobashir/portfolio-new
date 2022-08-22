---
title: "Types and Coercion in JS"
date: "2020-01-02"
---

Most of you are familiar with the saying everyone quotes, which is “Everything in Javascript are Objects”. What if I tell you that’s not entirely true? In this blog, we will be taking a deep dive into types in Javascript. People try to stay away from types, especially in dynamically typed language but sometimes not knowing about types can cause some real bugs in your code. We often experience some weird behavior from our program as shown below.

```jsx
true + true; // 2
[] + ![]; // false
```

We see this kind of joke all around the internet and people say how poorly javascript is designed and all those stuff. But does that really make sense? The reason for making fun of that is basically we don’t know enough about javascript behavior and we see them as some magic or black box. What our response should be as a developer is to know our tools effectively and know the corner cases of them and henceforth avoid them while writing our code. There are corner cases in every big system and they can’t be avoided at all. The reason we don’t know about all these corner cases is that we hardly know what is actually being done by the javascript and rather we make some assumptions. If you want to look at corner cases of some other programming language visit here [https://codeblog.jonskeet.uk/2005/10/02/corner-cases-in-java-and-c/](https://codeblog.jonskeet.uk/2005/10/02/corner-cases-in-java-and-c/).

### Note

There will be a lot of new and weird things you will notice throughout the blog and it is sure that you will not get all the concepts by reading it once. What I will suggest is to learn slowly and try to look at all the code snippets shared below. Also, check all the links for the specs to get a clearer insight.

Let’s get back to the quote

<aside>
💡 Everything is Javascript are objects

</aside>

However in the spec we can clearly see Javascript has types also called as primitive types

Link: [https://262.ecma-international.org/9.0/#sec-ecmascript-language-types](https://262.ecma-international.org/9.0/#sec-ecmascript-language-types)

### Let’s dig into the primitive types

The Spec defines the following primitive types as follows

1. `undefined`: it has only one value that is undefined and any variable that has not been assigned a value has the value `undefined`
2. `null`: it has only one value that is null and it represents the intentional absence of any object value
3. `boolean`: The boolean type represents a bool value that is either true of false
4. `string`: The string type is the set of all ordered sequences of zero or more 16-bit unsigned [integer](https://262.ecma-international.org/11.0/#integer) values (“elements”) up to a maximum length of 2 raise to the power 53 - 1 elements.
5. `number`: a set of all possible Number values including the special “Not-a-Number” (NaN) value, positive infinity, and negative infinity. And number value is a primitive value corresponding to a double-precision 64-bit binary format [IEEE 754-2019](https://262.ecma-international.org/11.0/#sec-bibliography) value
6. `object`: An Object is logically a collection of properties. Each property is either a data property or an accessor property like dot notation and so on.
7. `bigInt`: a set of all possible BigInt values that is a primitive value corresponding to an arbitrary-precision [integer](https://262.ecma-international.org/11.0/#integer) value
8. `symbol`: The Symbol type is the set of all non-String values that may be used as the key of an Object property. It is less used in normal development and is usually used in frameworks and library

That’s a lot of academic kind of stuff up there so let’s see some code to know the types of variables using the `typeof` operator.

```jsx
let v;
console.log(typeof v); // undefined
v = "1";
console.log(typeof v); // string
v = 2;
console.log(typeof v); // number
v = true;
console.log(typeof v); // boolean
v = {};
console.log(typeof v); // object
v = Symbol();
console.log(typeof v); // symbol
v = [1, 2, 3, 4];
console.log(typeof v); // object
v = () => "hello";
console.log(typeof v); // function
v = null;
console.log(typeof v); // object
v = 16n;
console.log(typeof v); // bigint
// corner case
v = null;
console.log(typeof null); // object
```

<aside>
💡 null is an object: Is is because null is used to represent an intentional absence of an object value. Due to this reason the `typeof` null returns object. It is also called a historical bug in Javascript but it has its uses.

</aside>

## Kinds of Emptiness

Let’s see about the kind of emptiness javascript offers:

- undeclared: a variable that has never been created in any scope

```jsx
console.log(typeof m); // undefined
// here in this case m doesn't even exist and still we get undefined becuase of javascript
// pretend as if you can declare the variable after and is currently undeclared
```

- undefined : there is a variable and at the moment it has no value

```jsx
let v;
console.log(typeof v); // undefined
```

- uninitialized: for block scope variables they are not initialized or set to undefined and you cannot allow touching (tdz) and hence are in an uninitialized position. Learn more : [https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/](https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/)

### Some Special Value

### NaN (`not a number`)

- NaN is called as `not a number` but if talking more specifically we can say it tells us about not a valid number according to IEEE 764: https://en.wikipedia.org/wiki/IEEE_754
- Here in the below example, we are doing a subtract operation with a string and a number which results in `NaN` and one most important property of `NaN` is that they are not equal to itself which is kind of weird but that’s how it is.
- Here in the example we also see that the `typeof NaN` returns a number. Hence we can conclude that `NaN` is a type of number but an invalid number.

```jsx
// IEEE 764 : https://en.wikipedia.org/wiki/IEEE_754
let totalApples = 10;
let applesDistributed = "five";
let remainingApple = totalApples - applesDistributed;

console.log(remainingApple); // NaN
console.log(remainingApple === remainingApple); // false
console.log(typeof remainingApple); // number
```

- To check whether a value is `NaN` we have two functions, one is called `isNaN()` and the other is `Number.isNan()`. Let’s see what we get using `isNaN()`

```jsx
let greet = "Hello world";

// using isNan
console.log(typeof greet); // string
console.log(isNaN(greet)); // true
```

- In the above example, we can see that typeof greet is string however in the next line when we use isNaN on it returns true as if the greet is a `NaN` value. That’s weird. Isn’t it?
- Let’s see why it happens to link to the spec: [https://262.ecma-international.org/11.0/#sec-isnan-number](https://262.ecma-international.org/11.0/#sec-isnan-number) . As we can see that in spec it tells us that it first performs an abstract operation which we will learn about in a bit called ToNumber and then whatever value is returned is checked whether it is not equal to itself or not. If it is not equal to itself then we can conclude that the number is `NaN`. Let’s see it in action by writing our own isNaN()

```jsx
function myIsNaN(num) {
  if (typeof num !== "number") {
    num = Number(num);
    console.log(num);
    return num !== num;
  }
}

let greet = "Hello world";

// using isNan
console.log(typeof greet); // string
console.log(isNaN(greet)); // true

// using myIsNaN
console.log(myIsNaN(greet)); // true
```

- You can clearly see why it treat string as `NaN` due to the abstract ToNumber operation.
- In order to fix this we get another utility function in Javascript called as `Number.isNaN` let's use it to learn its behavior

```jsx
// IEEE 764 : https://en.wikipedia.org/wiki/IEEE_754
let totalApples = 10;
let applesDistributed = "five";
let remainingApple = totalApples - applesDistributed;

console.log(remainingApple); // NaN
console.log(remainingApple === remainingApple); // false
console.log(typeof remainingApple); // number

// using Number.isNaN()
console.log(Number.isNaN(applesDistributed)); // false
console.log(Number.isNaN(remainingApple)); // true
```

- Here we see that as it is written in the specs that [https://262.ecma-international.org/11.0/#sec-number.isnan](https://262.ecma-international.org/11.0/#sec-number.isnan) and it shows that it doesn’t coerce the thing which is not a number type and directly return false.

### Negative Zero `-0`

We also have another special value which is `-0` and it also has some weird corner cases. Let’s see them through code

```jsx
let trendRate = -0;

console.log(trendRate === -0); // true
console.log(trendRate.toString()); // 0
console.log(trendRate === 0); // true
console.log(trendRate < 0); // false
console.log(trendRate > 0); // false

// to check negative zero we can use Object.is()
console.log(Object.is(trendRate, -0)); // true
console.log(Object.is(trendRate, 0)); // false

// using Math.sign()
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0)); // 0
console.log(Math.sign(-3)); // -1
console.log(Math.sign(3)); // 1
```

Here in the above example, we can see how weird it behaves while working with `-0` and how to handle that corner case.

We also see that `Math.sign()` also return weird result in case of `0` and `-0` .

## Abstract operation

The operations fundamentally perform the task of type coercion. They are not a specific type of function or something like that but they are a conceptual thing that let us understand coercion thing. Link for the specs here: [https://262.ecma-international.org/11.0/#sec-abstract-operations](https://262.ecma-international.org/11.0/#sec-abstract-operations) . There is a bunch of abstract operation that is performed on certain cases but we will look at a few that are more important to know in our day-to-day programming. We will use typecasting to demonstrate the abstract operation

1. **ToNumber(value)**: This operation converts the argument value to the type of number according to this table [https://262.ecma-international.org/11.0/#table-11](https://262.ecma-international.org/11.0/#table-11)

```jsx
// here we are using the build-in object to do the typecast
console.log(Number("")); // 0
console.log(Number("0")); // 0
console.log(Number("-0")); // -0
console.log(Number("009")); // 9
console.log(Number("3.14")); // 3.14
console.log(Number("0.")); // 0
console.log(Number(".0")); // 0
console.log(Number(".")); // NaN
console.log(Number("0xaf")); // 175
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number([""])); // 0
console.log(Number({})); // NaN
console.log(Number([1, 2])); // NaN
console.log(Number({ a: "hello" })); // NaN
```

1. **ToPrimitve(value, hint)**: This operation is performed to covert any not primitive value to a primitive value and does it in two steps. First, it checks valueOf(), and then it converts it to ToString() to get the desired result. Link for further reading [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
2. ToString(value): This operation converts the argument value to the type of number according to this table [https://262.ecma-international.org/11.0/#table-12](https://262.ecma-international.org/11.0/#table-12). Below represents some corner cases that create some exceptions when we will look into the equality and coercion section of the blog.

```jsx
let c = -0;
let arr = [1, 2, 3, 4];
let arr1 = [null, undefined, true, 1, "1"];
let obj = { apple: "red" };
console.log(arr.toString()); // "1,2,3,4"
console.log(c.toString()); // "0"
console.log(arr1.toString()); // ",,true,1,1" | undefined and null are ignored
console.log(obj.toString()); // [object Object]
```

1. ToBoolean(value): This operation covert any value to boolean type and it basically just does a lookup to the table given below and if any of the value does fall in the falsy side it returns false and every other thing will return true.

```jsx
console.log(Boolean("")); // false
console.log(Boolean("   \n")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
```

| falsy     | truthy       |
| --------- | ------------ |
| “”        | “foo”        |
| 0,-0      | 23           |
| null      | {a:1}        |
| NaN       | [1,3]        |
| false     | true         |
| undefined | function(){} |

### Equality and Coercion

Usually, we say that in order to not deal with coercion we always use `===` everywhere and hence we don’t need to think about coercion ever. Is it really true or we are just being ignorant about it? Let’s see.

- We are all familiar with the template literal syntax from the es6 and we use it all over the place. Let’s consider an example to illustrate more

```jsx
let numOfStudents = 15;
console.log(`Total students are ${numOfStudents}`); // Total students are 15
numOfStudents = {};
console.log(`Total students are ${numOfStudents}`); // Total students are [object Object]
```

- In the code above also the template literal is being coerced to string type by doing the `ToString` operation and when we see that due to `numOfStudents` reassigned as `object` we see the log as `[object Object]`

```jsx
let numOfStudents = 15;
let newStudents = "4";
let newTotal = numOfStudents + newStudents;

console.log(newTotal); // 154
```

- The `+` operator whenever seeing any of the two elements as a string it prefers string concatenation.
- There are more such places where there is implicit coercion and sometimes we embrace that without even noticing that coercion is taking place and sometimes we make fun of that. However ideal response should be to learn about the language properly rather than thinking it of as some magic.

Before going let’s look at the code snippet below to see some kind of corner case in javascript and try to find some conclusion base on the idea of abstract operation that we’ve read above.

```jsx
console.log(Number("")); // 0
console.log(Number("  \t")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number([])); // 0
console.log(Number([1, 2, 3])); // NaN
console.log(Number([null])); // 0
console.log(Number([undefined])); // 0
console.log(Number({})); // NaN

console.log(String(-0)); // 0
console.log(String(null)); // null
console.log(String(undefined)); // undefined
console.log(String([null])); // ""
console.log(String([undefined])); // ""

console.log(Boolean(new Boolean(false))); // true

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(1 < 2); // true
console.log(2 < 3); // true
console.log(1 < 2 < 3); // true

console.log(1 < 2 < 3); // true
console.log(true < 3); // true
console.log(1 < 3); // true

console.log(3 > 2); // true
console.log(2 > 1); // true
console.log(3 > 2 > 1); // false

console.log(3 > 2 > 1); // false
console.log(true > 1); // false
console.log(1 > 1); // false
```

By keeping in mind the corner cases shown below we will see how we can easily learn the difference between `==` and `===`.

### Equality (`==` vs `===`)

The most common place where we notice coercion is when we use double equal `==` and hence due to that we have a notion to use `===` everywhere to **avoid coercion**.

- We have a notion that `==` checks value or we can call loose equality check whereas `===` check value as well as the type which is strict equality check
- However, this notion is not totally true. Let’s see how.
- We people have a feeling that implicit mechanism is kind of magical and we tend to equate magic as bad or evil. However, we can think about implicitness as an abstraction.
- Spec for the link: [https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison)
- When the types match the `===` and the `==` are the same
- For `===` if the types are different then it return false
- The basic difference then when we are using `==` and `===` is whether we allow coercion to happen or not
- It also denotes that both `==` and `===` check the type but one allows coercion while the other doesn’t
- In the case of two objects having the same value neither `==` nor the `===` will return true because they are two different objects at different memory locations and despite having the same type still they return false.
- In the case of `==` if it is null and undefined then they are equal

```jsx
let a = null;
let b = undefined;

console.log(a == b); // due to array stringifying
```

- `==` prefers a numeric comparison
- `==` always compares two primitive values and if they don’t get a primitive value in either of the two then it does the toPrimitive() operation which first does valueOf() and then toString() to get the result
- We should try to make comparisons mostly by making the type the same whenever it is possible.

**Corner Cases of `==`**

```jsx
let a = 14;
let b = [14];

console.log(a == b); // due to array stringifying

console.log([] == ![]); // true
// however we never do such comparison in our real program only place we do in JS is while
// checking a NaN value or something

// Using Booleans we should not use double equals
let arr = [];

console.log(arr == true); // false
console.log(arr == false); // true
console.log(arr === true); // false
```

### Summary

- Avoid `==` with 0 or `“”` or even `“ "`
- Avoid using `==` with non-primitives
- Don’t use `==` to `true` and `false`
- `==` is not about comparisons with unknown types
- Always use `==` when you know the types and optionally if you need to have coercion
- When the types are the same then `==` is the same as `===`
- If the types are different, the equivalent of one `==` would be two (or more) `===` (i.e, slower)
- If you don’t know about the types then to make it an obvious comparison to the reader that there are uncertainty we can use `===`
- Making types known and obvious leads to better code. If types are known, `==` is best. Otherwise ,fall back to `===`

### Credits :

- Deep JS Foundation: [https://frontendmasters.com/courses/deep-javascript-v3/](https://frontendmasters.com/courses/deep-javascript-v3/)

### Links and Resources for further reading

1. Specs for Language Types: [https://262.ecma-international.org/11.0/#sec-ecmascript-language-types](https://262.ecma-international.org/11.0/#sec-ecmascript-language-types)
2. Specs for Strict Equality Comparison: [https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison)
3. ToPrimitive : [https://262.ecma-international.org/11.0/#sec-toprimitive](https://262.ecma-international.org/11.0/#sec-toprimitive)
4. Corner Cases in other languages: [https://codeblog.jonskeet.uk/2005/10/02/corner-cases-in-java-and-c/](https://codeblog.jonskeet.uk/2005/10/02/corner-cases-in-java-and-c/).
5. valueOf() : [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
6. isNaN : [https://262.ecma-international.org/11.0/#sec-isnan-number](https://262.ecma-international.org/11.0/#sec-isnan-number)
7. Number.isNaN : [https://262.ecma-international.org/11.0/#sec-number.isnan](https://262.ecma-international.org/11.0/#sec-number.isnan)
8. A great video showing some weird js behavior that we’ve read above: [https://www.youtube.com/watch?v=et8xNAc2ic8](https://www.youtube.com/watch?v=et8xNAc2ic8)
9. A website containing a lot of weird corner cases of javascript: [https://wtfjs.com/](https://wtfjs.com/)

> If you have any suggestions for improvement please reach out to me at [Twitter](https://twitter.com/MobashirFarhan)
