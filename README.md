# Intro to Algorithms

## Purpose
The main goal of this guide is to get developers started with algorithms.  This guide will serve as a roadmap for developers who do not have not taken an introductory algorithms course or need a refresher on basic algorithm design. 

*In addition, this guide will also prepare developers for the [Outco program](http://outco.io) and their admissions fundamentals check.*

## Commitment and Requirements
This guide can take between **25-100 hours** to complete depending on your exposure to algorithms.  Please allow for ample time to practice up to **2-4 weeks** to allow the concepts to be internalized. It is best to follow through with the recommended structure in the order given. 

**Minimum Requirements**: 
 
* Fluency in a programming language (e.g., Java, JavaScript, Python, Ruby, PHP, Objective-C, C++, C)
* Strong knowledge of looping constructs like `for` and `while` loops.
* Strong knowledge of control flow `if`, `else`, `and`, `or`
* Array: access, deletion, iteration.
* Object (Hashtables): lookup, looping, insertion, removal
* Language specific built-in methods
* Mathematics: Algebra (e.g., logarithms, exponentials, primes, powers)


If you are missing some of the minimum requirements, then take a refresher here:  

* **JavaScript** [Codecademy](https://www.codecademy.com/learn/learn-javascript) Sections 1-4, no need for PRO material
* **JavaScript** [Eloquent JavaScript](http://eloquentjavascript.net/): Chapters 1-4
* **Ruby** [Codecademy](https://www.codecademy.com/learn/learn-ruby) Sections 1-5
* **Python** [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)
* **Java** [Java Tutorial for Complete Beginners](https://www.udemy.com/java-tutorial/#curriculum)


## Strategy

The strategy to use follows a few steps as shown below.  It is important to balance acquiring knowledge, applying concepts, and testing one's understand of the concepts.  

1. Learn to evaluate efficiency (complexity) of algorithms
2. Learn basic algorithm patterns
3. Learn basic data structures
4. Develop a process for problem solving
5. Put into practice
6. Start simple and progress harder
7. Track and measure

Lets cover each one of those areas step by step.

## 1. Evaluating Efficiency

Evaluating the efficiency of algorithms is the first step to really developing the ability solve challenging algorithms.  If one cannot measure the efficiency of an algorithm, how can one compare the scalability of different approaches.

So lets start with time and space complexity. **Time complexity measures the amount of computations** required to solve the algorithm, relative to the input size. **Space complexity measures the amount of memory** needed to perform the algorithm, relative to the input size. In both time and space, we are measuring against the **size of the input**.

We use Big-O notation to measure complexity. It is a mathematical way to gauge the rate in which something grows. Big-O refers to the worse case scenario. That means, if we chose the worse possible input for the algorithm, how long would it take?

Before we dive further into how to analyze for Big-O, lets focus on the input first.

### 1a. Determining What is Scaling
First, get you need to understanding and determining what is actually scaling. 

--- 

Q: Say we have the following code below, the first question you should ask is what is scaling?

```javascript

// Take in an integer and print its value 
function printInteger(num) {
	console.log(num);
}
 
```

A: This is pretty straightforward, **magnitude** of ```num``` that is what is scaling. ```num`` can grow from `0` to `100` to `1000000`.

---

Lets try a different problem ,  but what about if you have an ```array``` as an input, what is scaling then? 

```javascript

// Print the first item in the array
function printFirst(arr) {
	console.log(arr[0]);
}
 
```

A: most often, **its the length of the array** but it can vary depending on the problem, and the contents of the array.

---

It can get tricky with different types of inputs, here are some of the input types and common factors that are scaling:

| Input | Common Factor that is Scaling |
|---|---|
|Integer| Magnitude of number|
|String| Length of String|
|Array| Length of Array| 
|LinkedList| Number of nodes| 
|Tree| Number of nodes| 
|Hashtable| Number of key-value pairs| 
|Matrix| Width and height of matrix|
|Graph| Number of vertices and edges| 

Keep in mind, these are 'common' factors that scale.  Sometimes there might be less obvious factors that scale.


### 1b. Units of Time and Space
To help you begin to analyze for complexity you need to get a sense of what a unit of time is, and what a unit of space is.

**One Unit of Time**  

* A unit of time can be one arithmetic operation: ```5 + 7;```
* Or printing something: ```console.log('hello')```
* Or instantiating a new variable: ```var name = 'foo';```
* Or accessing an item in an Array: ```arr[5];```
* Or returning something: ```return 'foobar';```

**One Unit of Space**  

* A unit of space can be creating a new variable: ```var i = 1;```
* Or creating an empty array: ```var list = [];```
* Or adding a new item to your list: ```list.push('foo');```
* Or adding a key-value pair into a hashtable: ```obj[foo] = 'bar';```


### 1c. Analyze Line by Line

When you are just starting out in analyzing for complexity, try going line by line and determining the complexity for each line.  Then sum up the complexity of each line.


Lets start with time complexity. See if you can determine why the first print state took two operations and the second one took 3 operations.

```javascript
// print the first and last item in the array
function printFirstLast(arr) {
	console.log(arr[0]); // 2 
	console.log(arr[arr.length-1]); // 4
}

// total = 2 + 4 = 6
```

The answer is for the second print statement, accessing the length, subtracting to the length, accessing the index, and printing the value can each be counted as one operation. We aren't done yet! Read the next section to complete this analysis.

### 1d. Drop Coefficients and Lower Order Terms 

With complexity analysis, we need to do two things after finding the total amount of operations or memory:

1. Drop lower order terms
2. Drop coefficients in front of the leading term.

This is because for Big-O analysis we only care about the magnitude order.  For the previous example, 6 operations becomes 1 because 

1. 6 is the lowest (and only term) 
2. 6 itself is a coefficient one the constant term, thus it gets reduced to 1 

So the time complexity for the function above is **O(1) or constant time**. What does O(1) time mean? Well it means the amount of operations the algorithm takes to execute as the input scales remains constant. This makes sense, because no matter how large the input array gets, the function ```printFirstLast``` will still take the same time to execute.

Lets get some more practice look at the following 10 totals and reduce it to the magnitude order for Big-O. You may have to look up some power laws. Also check out [Big-O Cheetsheet](http://bigocheatsheet.com/) if you are unsure how logarithmic terms compare to other terms.

```
PROBLEM SET 1:
Reduce the following to it Big-O magnitude:
1) 5 + n
2) n + n^2
3) 15n + 13n
4) 10000
5) log(n) + 1
6) log(n) * 3 + 14n + 3
7) nlog(n) + 3n^2
8) n^3 + log(n^4)
9) n! + 180000n^2 
10) 300n^5 + 15002^n + 3n
```
Scroll to the bottom to get the answers to this problem set. 


### 1e. Looping are Often Linear but not Always

See if you can determine why the operations for a loop has a linear order magnitude. When there is a loop we have to multiply the operations inside the loop by the number of times it runs.

```javascript
// print the first and last item in the array
function printAll(arr) {
											// initiating i is 1 operation
											// n iterations
	for(let i = 0; i < arr.length; i++) { 		// 2 operations per break condition check
		console.log(arr[i]); 					// 2 operations to print
	}
}

// total = 1 + n * (2 + 2) = 4n + 1 
// reduce down to O(N) or linear time complexity
```

Sometimes loops can be tricky, especially with ```while``` loops. You have to really evaluate the code to see how many times the loops runs and if it is proportional to the input.

```javascript
// print the first and last item in the array
function firstTen(arr) {
	let i = 0; 						// 1
									// maximum of 10 iterations
	while(i < 10 && i < arr.length){ 	// 2 operations each break condition check
	console.log(arr[10]); 				// 2 operations to print
	}
}

// total = 1 + 10 * (2 + 2) = 41 
// reduce down to O(1) or linear time complexity
```
***Under construction*** 

### 1e. Analyze by Chunks

Analyzing line by line is good for when you are starting out. But you may quickly learn that it isn't always necessary.  Understanding that lower order terms and coefficients will get dropped anyway, you can speed up your analysis by looking at chunks of code at a time.

***Under construction***


### 1f. Understand Complexity of Native Methods

***Under construction*** 

If your language has a native sorting method, do you know what happening behind the scenes? Take sure you take the time to research and look up what sorting method your language is using.  

The native methods of your language have inherent time and space complexity that you need to understand.

Here is an example list for JavaScript arrays:

* Array - indexOf
* Array - map
* Array - forEach
* Array - reverse
* Array - sort


### 1g. Understand Complexity of Data Structure Methods

***Under construction***

For now do to this website: [Big-O Cheatsheet](http://bigocheatsheet.com/).
Take note of the *average* time complexity of the data structure operations, these will be the commonly used magnitude.

### 1h. Recognize Common Orders of Magnitudes

*Disclaimer: these examples highly depend on the input that is scaling.*

| Input | Common Examples |
|---|---|
|Constant: O(1)| Array access, arithmetic operators|
|Logarithmic: O(log(N))| Binary search, binary search tree retrieval/insertion (balanced)|
|Linear: O(N)| Looping through an array or hashtable| 
|Quasilinear: O(Nlog(N))| Quicksort, mergesort, heapsort| 
|Quadratic: O(N^2)| Nested loops | 
|Polynomial: O(N^C)| Deeply nested loops|
|Exponential: O(C^N)| Multiple-recursion | 
|Factorial: O(!N)| Permutations |


### 1i. Leveling Up on Complexity Analysis

Learn more by doing. Work to analyze problems and evaluate the code you have written out. Go through these two tutorials to get more practice on some problems.

[Asymptotic Notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation) by Khan Academy 

[Intro to Big-O Notation](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-big-o-notation) by Rithm School

[Big-O notation explained by a self-taught programmer](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)

[How to Calculate Big-O](https://justin.abrah.ms/computer-science/how-to-calculate-big-o.html)


## 2. Learn Basic Algorithm Patterns

The basic list of algorithms will help you progress throughout the 


* Linear Search
	* [Open My Mind - Immplementation](http://algorithms.openmymind.net/search/linear.html)
* Multiple Pointers
	* [Outco - Reading on Multiple Pointers](http://class.outco.io/courses/technical/lectures/1950839)
	* [Leetcode - Reading and Practice Problems](https://leetcode.com/articles/two-pointer-technique/)
	* [Interview Bit - Reading and Practice Problems](https://www.interviewbit.com/courses/programming/topics/two-pointers/)	
* Frequency Count
	* [Outco - Reading on Frequency Count](http://class.outco.io/courses/technical/lectures/2025015)
* Decrease and Conquer
	* [Outco - Reading on Decrease & Conquer](http://class.outco.io/courses/technical/lectures/2067856)
	* [OpenMyMind - Binary Search](http://algorithms.openmymind.net/search/binarysearch.html)
* Basic Sorting (Insertion, Selection, Bubble)
	* [Youtube - Visualize Bubble and Insertion Sort](https://www.youtube.com/watch?v=WaNLJf8xzC4&t=114s)
	* [Khan Academy - Selection, Insertion](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
	* [OpenMyMind - Bubble Sort](http://algorithms.openmymind.net/sort/bubblesort.html)
	* [OpenMyMind - Insertion Sort](http://algorithms.openmymind.net/sort/insertionsort.html)
	* [Visualgo - Visualize Sorting Algorithms](https://visualgo.net/sorting)
* Recursion (helper method recursion)
	* [Khan Academy - Recursive Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/p/challenge-recursive-powers)
	* [Eloquent JavaScript - Recursion Section](http://eloquentjavascript.net/03_functions.html) 
	* [Rithm School - Intro to Recursion](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion)

## 3. Learn Basic Data Structures

* Arrays and Dynamic Arrays
	* 	[OpenMyMind - Arrays and Dynamic Arrays](http://algorithms.openmymind.net/structures/arrays.html)
* Linked Lists, Stacks, and Queues
	* [MyCodeSchool - LinkedList](https://www.youtube.com/watch?v=NobHlGUjV3g&t)
	* [Gayle McDowell - LinkedList](https://www.youtube.com/watch?v=njTh_OwMljA)
	* [Visualgo - LinkedList, Stacks, Queues](https://visualgo.net/list)
	* [Gayle McDowell - Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)


## 4. Develop a Process for Problem Solving

***Under construction***

1. Understand the problem
2. Diagram
3. Pseudocode
4. Code
5. Test


## 5. Put in Practice

Practice easy level algorithms to get into the groove of things. Remember the steps from the previous section.  Grab a notepad and pencil and prepare to diagram things out if necessary. Collectively, you should work on at least 15 problems from these resources:

* [Leetcode - Do Easy Problems with Over 55% Acceptance Rate](https://leetcode.com/problemset/algorithms/)
* [Codewars Kata 7-8 problems](https://www.codewars.com/)
* [10 Easy problems on Coderbyte](https://coderbyte.com/challenges#easyChals)

*After completing these problems, you should have a good shot at passing Outco's fundamentals check. If you are looking to apply/re-apply please reach out to the [Outco Outreach team](https://outco.io)*

## 6. Progress to Intermediate Concepts

If you want to progress more, then these concepts are what you should tackle next. They are common enough on interviews that having a solid understanding of these concepts is critical to progressing past technical screens involving algorithms.

### Algorithm Patterns

* Pure Recursion
* Divide and Conquer, Quicksort, Mergesort
	* [Chand John - What's the fastest way to alphabetize your bookshelf?](https://www.youtube.com/watch?v=WaNLJf8xzC4&t=114s)
	* [Khan Academy - Mergesort](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)
	* [Khan Academy - Quicksort](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)
	* [Visualgo - Quicksort, MergeSort](https://visualgo.net/sorting)
* Tree and Graph Traversals
	* [Geeks for Geeks - Tree Traversals](http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
	* [Khan Academy - Breadth First Search](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/breadth-first-search-and-its-uses)
	* [Geeks for Geeks - Depth First Search of Graphs](http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

### Data Structures

* Binary Search Trees
	*  [Hacker Earth - Binary Search Trees](https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/tutorial/)
	*  [MyCodeSchool - Binary Search Trees](https://www.youtube.com/watch?v=pYT9F8_LFTM)
* Graphs
	* [Khan Academy - Graphs](https://www.khanacademy.org/computing/computer-science/algorithms#graph-representation)

### Practice 
Do at the minimum 20 problems of the level of difficulty listed here:

* [Leetcode - Do Problems 45-55% Acceptance Rate](https://leetcode.com/problemset/algorithms/)
* [Codewars Kata 6-7 problems](https://www.codewars.com/)


## 7. Track and Measure

***Under Construction***

If you are interviewing, you need to evaluate your ability to solve algorithms under  a set amount of time and possibly with someone on the other end. Get yourself into to pressure setting that interviews by doing mock interviews. 

Here are a few resources that you can use to test yourself:

* [Leetcode Mock Interview](https://leetcode.com/mockinterview/)
* [Pramp - practice with others live](https://pramp.com/)

## 8. Final Notes
Algorithms is not something anyone learns overnight, it takes practice and consistency.  I hope you found this as a useful starting point. I will be expanding on this resource  in the days to come.  Please reach out to me if you have any questions.

**If you found this guide helpful, please feel free to share it with anyone that would get value from this guide.**


## Solutions
```
SOLUTIONS TO PROBLEM SET 1:
Reduce the following to it Big-O magnitude:

1) 5 + n 					// O(N)
2) n + n^2					// O(n^2)
3) 15n + 13n				// O(n) 
4) 10000					// O(1)
5) log(n) + 1				// O(log(n))
6) log(n) * 3 + 14n + 3		// O(n)
7) nlog(n) + 3n^2			// O(n^2)
8) n^3 + log(n^4)			// O(n^3)
9) n! + 180000n^2 			// O(n!)
10) 300n^5 + 15002^n + 3n	// O(n^5)
```