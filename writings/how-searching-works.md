---
title: "How Search System Works Part I"
description: "Searching happens so often and so quickly that we hardly get time to know what actually happens under the hood. When we type something on Google, an instant search takes place behind the scenes."
date: "2021-09-10"
---

Searching happens so often and so quickly that we hardly get time to know what actually happens under the hood. When we type something on Google, an instant search takes place behind the scenes. It is really helpful to see a red underline when we write some words with wrong spelling in a word processing application. But have you wondered how the software instantly knows the same? That’s also an instant search behind the scenes. And besides all these, we have the ultimate achievement: the Web. The Web is so large that we can only guess its true size, and despite that web search engines can find relevant web pages in a fraction of seconds.

> How does the search engine find what we want so fast ?

# Understanding the Search Problem

To understand the search problem, at first, we need to know the terminologies and here it goes :

1.  Data collection: A collection of data.
2.  Record: Each item in data collection is called a record.
3.  Key: Every record is uniquely identified by a key.

For instance, when you use a dictionary the word you’re looking up is key, and the definition of that word is the record and the dictionary is obviously our data collection in this case.

The main objective of the search is to find the right record at a blazing fast speed because no one is gonna wait for minutes while searching for something on Google. So let’s dig deeper and learn how we achieve speed as well as accuracy while developing search engines.

**The search mechanism needs these many steps to achieve accuracy and speed:**

1.  Organization of Data (Sorting)
2.  Searching
3.  Indexing
4.  Hashing

Now, let's start to know each one in more detail.

## Organizing the data

Well-organized data is a must for efficient search. When you visit a bookstore and if the books are organized alphabetically by the author names. It’s easy to know where to look for, like our dictionary example. If the bookstore has no such organization of books then it will be harder for us to know where to look for. So to solve this problem we may start from one end and keep looking till the end of the shelves until we find that particular book. This process can also be called a sequential search and is not efficient. Therefore, it is really important to keep our data in an organized form which in computer science terms is known as sorting of data. There are numerous ways to sorting and each one of them is useful in some or other use case. The most commonly used sorting algorithm is quick sort and merge sort, while there are many other sorting methods like selection, insertion, bubble sort, etc. Comparing the selection sort and quick sort, on a particular computer a selection sort of 1,000,000 records would take around 3 hours, while a quick sort would take only about 11 minutes. That’s really amazing.

## A simple search method: Binary Search

When data is in order, the software can find a particular record easily. Binary search is a simple search method where we search some particular key by choosing between two alternatives. Each step in a binary search eliminates half of the records from consideration which means it scales very well. In a linear search doubling the size of data doubles the time needed for an average search while in a binary search doubling the data just adds one more step. A linear search on average will examine 500,000 records while searching in a data of 1,000,000 whereas a binary search will examine no more than 20 for the same data size.

## Indexing and Why it is necessary?

To keep things simple, our examples to this point have used just record keys but in practice, the rest of the records has to be stored somewhere else, and this can cause problems. To see why we have to dig deeper to understand the choice software faces when allocating storage space for data, whether in main memory, on a hard drive, or anywhere else.

**—Fixed-size storage allocation**: Fixed-size allocation assigns each record the same amount of space and it is commonly used for data that always has the same size or has a small maximum size. For example Credit Card number of 16 digits or allocation for a customer name of a maximum of 20 letters. So if the name is less than 20 the space is wasted but since the allocated space is small that doesn’t bother much.

**— Variable size storage allocation:** Variable size allocation exactly fits the data. For example a collection of MP3 files we allocate variable memory for that. The longer the song, the larger the MP3 file. This is because a short pop song would be of 3–4 MB while a rock song might be as large as 20MB. We will never want to allocate 20 MB for each song as a fixed allocation as it will waste a lot of memory. Hence we allocate variable storage for these.

Although from the above example we have seen variable allocation uses space efficiently, but for an efficient search method, fixed storage allocation is required. This is because storage locations are nothing but numerical _addresses._ Every byte in a digital storage — whether in computer’s main memory, hard disk, etc. can be precisely located by its _addresses._

> For a method like binary search it is essential to find the record quickly which can only be achieved when we have a fixed size records. Without fixed-size record , the only way to find a record in particular position is to count the records, which is just a linear search and it totally defeats the point of efficiency.

> Hence choosing between fixed memory allocation and variable memory allocation means choosing between **efficient search** and **efficient storage.**

To solve this problem a technique called indexing is used which gives us both, i.e., **an efficient search** as well as **efficient storage.** Indexing just separates the keys from the rest of the records, much as a library card catalog allows readers to search for books on cards before actually retrieving the books from the shelves. **_An index is nothing but a table of records keys and addresses._ **The address themselves are stored as binary with a fixed number of digits. The index of the data is stored in the main memory e.g. in Microsoft “32-bit” and “64-bit” it has 32 and 64 bit as the main memory and hence it helps you refer to the particular address to search efficiently using something like a binary search. The rest of the record data is stored in a variable size allocation. This eventually produces data that is efficient for storage as well as for searching. We can have multiple indexes for different search criteria, and because the main record is just referenced by an address, having multiple indexes doesn’t greatly affect the total storage. For example, we can have data collection of songs where we can create multiple indexes based on different parameters like an artist, name of song, singer, genre, etc. And this eventually offers efficient storage as well as efficient search too.

_In the next part, we’ll learn about_ **_hashing_ **_and how it works under the hood, we’ll also learn about_ **_Web Search_** _and how Google and other_ **_search engine rank_** _their result, how they use their index effectively and what possibilities are there in the future for the search problem._

**I hope you’ve learned something good from here for sure. Thanks for the read.**
