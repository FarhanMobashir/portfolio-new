---
title: "Hardtail - A data fetching library for React"
description: "Hardtail is a data fetching library for React that allows you to fetch data in a declarative way."
date: "2020-01-02"
technology: ["React", "fetchApi", "Context API"]
liveLink: "https://hardtail.netlify.app/"
sourceCode: "https://github.com/FarhanMobashir/hardtail"
---

# Hardtail

Hardtail is a data fetching library for React. It's designed to be used with React Hooks.

I've used the context API to store the data and the fetch API to fetch the data. I've also used the useReducer hook to manage the state of the data.

We also get hooks for fetching data, updating data, deleting data and creating data.

## Usage

```js
const { data, error, isLoading } = useGetPosts(
  "https://jsonplaceholder.typicode.com/posts"
);
```

## Features

- Fetch data from an API
- Store the data in the context API
- Use the data in the components
