---
title: "Debouncing and Throttling in JavaScript"
description: "A brief explanation of debouncing and throttling in JavaScript"
date: "2022-08-27"
---

In Javascript, we have basically two ways to schedule things. One is `setTimeout` and the other is `setInterval`. Suppose you have a scenario where you have to build a Search Autocomplete Component where once the user starts typing you can show thenm some auto-complete result based on the query. Now that seems easy as you can just add a `keyup` listener to the input and you can start firing the request to you backend. Suppose your search component searches for images by querying image description and a user type the query `a man sitting on a bench alone while it's raining` now guesses what will happen. As for every keystroke, we are firing requests and the above query’s length is 48, which means for every average query a search will call around 30 API calls. That’s obviously not very efficient. Isn’t it? So how can we solve the above problem by keeping in mind user experience as well as not making so many API calls? The answer is using `debounce` or using `throttling`. Let’s understand both by taking some examples

## Debouncing

It is a way to decide how often you want a certain function to be called. In debouncing we have a delay parameter. Now when we call our debounced function it fires on the first go but is executed after the delay. Suppose, we have an autocomplete search then what debounced function will do is as we keep typing some query it doesn’t fire any request, while once we stopped typing then after the delay time the request gets fired off. Hence when using search auto-complete suppose a user wanted to search for `laptop 4gb ram 256 ssd`. So when the user types `laptop` and then waits for the delay time then the first API call happens with `laptop`, and then it populates some auto complete result like `laptop i5`, or `laptop 4gb ram`. Then again it follows the same process once the user types some other follow-up query and hence we limit the number of API calls as well as give a good user experience too.

Let’s implement a debounce function now. We should keep in mind that while writing our debounce function we will use the idea of closure to let our debouce function return another function which is debounced and has the delay time passed beforehand. The function signature and the usage is shown below.

```jsx
// the function signature will look like this
function debounce(fn,time) : () => {}

const callApi = () => {
  console.log("api called");
}

const myDebouncedSearch = debounce(callApi,200);

// now we can use our debouncedSearch function by adding it to some event listener or stuff like that
```

After looking at the code snippet you have got some idea what we will be going to do. So without wasting time let’s write our debounce function

```jsx
function debounce(fn, time) {
  let timeoutId = null;
  return function (args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(args);
      timeoutId = null;
    }, time);
  };
}

const callApi = (name) => {
  console.log(name, "called");
};

const myDebouncedSearch = debounce(callApi, 200);
// now we can use our debouncedSearch function by adding it to some event listener or stuff like that
myDebouncedSearch("dog");
myDebouncedSearch("cat");
myDebouncedSearch("rat");
myDebouncedSearch("mat");
myDebouncedSearch("fat");
myDebouncedSearch("bat"); // bat called
```

Now let’s learn about the approach

1. First of all we have to just delay the function call for the given time so we used `setTimeout` for doing the same.
2. Now we have used the idea of closure to inject the delay time through our debounce function and then use it further by passing the arguments needed for the function call.
3. Now as we know in debounce only the last function is get called and all the previous one are get cancelled.
4. So keep a refrence of the function call we assigned our timer to some variable and then we check whether the variable is `null` or it is assigned some value. If there is some value for the timer varibble which is the `timerId` then we know some function is being executed and hence we clear that last function call by calling the `clearTimeout` and let the function call the last called function.
5. Finally we also set the variable storing timeoutId to `null` to preserve the intial state.

That’s all is for debouncing and you can clearly see how useful it is and there are so many usecase for it when we want to limit some function call.

### Throttling

Throttling is also a similar concept which is used to limit function calls. However it has a slight difference, as in case of debounce only the last function gets called, in throttling we call the first function and unless the delay time has passed we execute the next called function. If there afe function calls before the delay time it gets ignored and doesn’t get called. Throttle is useful where some event get called very frequently. Suppose you want to track the user movement on your platoform and you’ve added a `mousemove` event on the view and fire some request based on the mouse move event. But you’ll notice that for tiny mouse movement the event gets called a lot of time. Hence in order to limit the API calls here we can throttle the API call based on some delay time. There are many such other case where you want to throttle the function call to limit certain things. Enough of words now let’s look at some code and implement throttle function.

```jsx
// throttle function
function throttle(fn, time) {
  let timeoutId = null;
  return function (args) {
    if (timeoutId) {
      console.log("cancelled call", args); // added a log for testing
      return;
    }
    timeoutId = setTimeout(() => {
      fn(args);
      timeoutId = null;
    }, time);
  };
}

// for testing

const callApi = (name) => {
  console.log(name, "called");
};

const myThrottle = throttle(callApi, 200);

function simulateFiringEvents(num) {
  let i = 0;
  let interval = setInterval(() => {
    if (i === num) {
      clearInterval(interval);
      return;
    }
    myThrottle(i);
    i++;
  }, 5);
}

simulateFiringEvents(100);
```

Now let’s learn about the approach

1. Here in throttle we check wheter there is timeoutId is not `null`. If it is not `null` then it means there is some function already being called and hence we just return from there without calling the function.
2. Now in the setTimeout we assign the timeoutId to `null` once the function is executed and hence we are able to let new function get called, and the same process goes on limiting subsequent call during the delay time.

This is all for throttling and you can really see how useful it is for various usecases. However there is more better implementation of debounce and throttle in libraries like `lodash` or `underscore` and they handle all the edge cases.

You can look at the source code to get a more cleared idea : [https://github.com/lodash/lodash/blob/master/debounce.js](https://github.com/lodash/lodash/blob/master/debounce.js)

That’s all for today.

If you find this useful please share it or have some suggestion for improvement please react out to me on [Twitter](https://twitter.com/MobashirFarhan).
