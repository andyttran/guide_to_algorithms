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
* Array: lookup, insertion, looping
* Object (Hashtables): lookup, looping, insertion
* Language specific built-in methods
* Mathematics: Algebra (e.g., logarithms, exponentials, primes, powers)

If you are missing some of the minimum requirements, then I recommend taking a refresher course. Here are some suggestions that are pleasant to digest:

* **JavaScript** [Codecademy](https://www.codecademy.com/learn/learn-javascript) Sections 1-4, no need for PRO material
* **JavaScript** [Eloquent JavaScript](http://eloquentjavascript.net/): Chapters 1-4
* **Ruby** [Codecademy](https://www.codecademy.com/learn/learn-ruby) Sections 1-5
* **Python** [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)
* **Java** [Java Tutorial for Complete Beginners](https://www.udemy.com/java-tutorial/#curriculum)


## Strategy

The strategy to develop your algorithm skills revolves around a few extremely important concepts that need to be repeated consistently.  They are: 1) acquiring **knowledge**, 2) **applying** concepts, and 3) **testing** one's understand of the concepts.  

But there is a structured approach to algorithms that will make your life easier to learn faster.  In math, you have prerequisites that you should take before taking a more advanced class.  These prerequisites are laid out in an organized fashion so you do not get overwhelmed skipping over foundational concepts before moving on.

Same with algorithms and data structures.  There is a structure to the topics that you can learn that will greatly improve your understanding if you progress through the algorithms. Here are the steps I suggest you follow:

1. Learn to evaluate efficiency (complexity) of algorithms
2. Develop a process for problem solving
3. Learn basic algorithm patterns
4. Learn basic data structures
5. Put into practice
6. Start easy and progress harder
7. Track and measure

Lets cover each one of those areas step by step.

## 1. Evaluating Efficiency

Evaluating the efficiency of algorithms is the first step to really developing the ability solve challenging algorithms.  If you cannot measure the efficiency of an algorithm, how can one compare the scalability of one approach to another.

So lets start with time and space complexity. 

**Time complexity** - measures the amount of computations  
**Space complexity** - measures the amount of memory

The amount of computations or memory required to solve the algorithm is measured relative to the input size as the input scales up. Remember, for both time and space complexity, we are measuring against the **size of the input**.

We use **Big-O notation** to measure time and space complexity. Big-O is a mathematical way to gauge the rate in which something grows. Big-O refers to the worse case scenario. That means, if we chose the worse possible input for the algorithm, how long would it take? There is a bunch more technical details on Big-O, how it is accessed in academia vs industry, but for now, we should wait for later to explore this topic more.

Before we dive further into how to analyze for Big-O, lets focus on the input first. 

### 1a. Determining What is Scaling
When you are trying to access the time or space complexity of an algorithm, always ask yourself: *what about my input is scaling?*

--- 

**Q:** For the following code below, what is scaling?

```javascript

// Take in an integer and print its value 
function printInteger(num) {
	console.log(num);
}
 
```

**A:** If your answer was the **value** of ```num``` then you are correct. We would be scaling the value of ```num``` itself.  

---

Lets try another problem:  
**Q:** For the following code below, what is scaling?

```javascript

// Print the first item in the array
function printFirst(arr) {
	console.log(arr[0]);
}
 
```

A: In this case, its the **length of the array**. If you are given an array as input, it usually is the length of the array.

---

It can get tricky with different types of inputs, here are some of the input types and common factors that are scaling:

| Input 		| Common Factor that is Scaling |
|---			|---|
| Integer		| Magnitude of number|
| String		| Length of String|
| Array		| Length of Array| 
| LinkedList	| Number of nodes| 
| Tree			| Number of nodes| 
| Hashtable	| Number of key-value pairs| 
| Matrix		| Width and height of matrix|
| Graph 		| Number of vertices and edges| 

*Disclaimer: These are 'common' factors that scale.  Sometimes with particular problems there might be less obvious factors that scale.*


### 1b. Units of Time and Space
To help you begin to analyze for complexity you need to get a sense of what a unit of time and a unit of space is.

**One Unit of Time**  

* A unit of time can be one arithmetic operation: ```5 + 7;```
* Or printing something: ```console.log('hello')```
* Or instantiating a new variable: ```var name = 'foo';```
* Or accessing an item in an Array: ```arr[5];```
* Or returning something: ```return 'foobar';```

**One Unit of Space**  

* A unit of space can be creating a single new variable: ```var i = 1;```
* Or creating an empty array: ```var list = [];```
* Or adding a new item to your list: ```list.push('foo');```
* Or adding a key-value pair into a hashtable: ```obj[foo] = 'bar';```


### 1c. Analyze Line by Line

When you are just starting out in analyzing for complexity, try evaluating the complexity line by line and determining the complexity for each line.  Then sum up the complexity of each line to get the total. 

Lets start with time complexity for now. 

---
**Q:** Answer these two questions for the code below:

1. What is scaling?
2. What is the amount of operations for each line?

```javascript
// print the first and last item in the array
function printFirstLast(arr) {
	console.log(arr[0]);
	console.log(arr[arr.length-1]);
}
```
---
**A:**

1. The length of the input array is scaling
2. The first ```print``` statement has 2 operations and the second ```print``` statement has has 4 operations. Do you know why?

Here is how we could mark the computations line by line:

```javascript
// print the first and last item in the array
function printFirstLast(arr) {
	console.log(arr[0]); // 2 
	console.log(arr[arr.length-1]); // 4
}

// total = 2 + 4 = 6
```

The first print statement has an array access and then a printing to the console, so its 2 operations. The second print statement involves: accessing the length, subtracting to the length, accessing the index, and printing to the console. Thats a total of 4 for the second print statement. 

We aren't done yet! Read the next section to complete this analysis.

### 1d. Drop Lower Order Terms and Coefficients

With complexity analysis, we need to do two things after finding the total amount of operations or memory:

1. Drop lower order terms
2. Drop coefficients in front of the leading term.

This is because for Big-O analysis we only care about the largest order of magnitude. As the input size scales extremely large, the lower terms make less of an impact. Furthermore, since the magnitude is what we care about, we don't include the coefficients in front of the leading term.

---
**Q:** For the previous example, we determined the algorithm has 6 operations, reduce it using the two conditions above.

**A:**
1. 6 is the lowest (and only term) 
2. 6 itself is a coefficient of the constant term, thus it gets reduced to 1. 

So the time complexity for the function above is **O(1) or constant time**. 

---

What does O(1) time mean? Well it means the amount of operations the algorithm takes to execute as the input scales remains constant. This makes sense, because no matter how large the input array gets, the function ```printFirstLast``` will still take roughly the same time to execute.

Lets get some more practice looking at the following 10 totals and reduce it to the magnitude order for Big-O. You may have to look up some power laws. Also check out [Big-O Cheetsheet](http://bigocheatsheet.com/) if you are unsure how logarithmic terms compare to other terms.

```
PROBLEM SET 1:
Reduce the following to it Big-O magnitude:
1) 5 + N
2) N + N^2
3) 15N + 13N
4) 10000
5) log(N) + 1
6) log(N) * 3 + 14N + 3
7) Nlog(N) + 3N^2
8) N^3 + log(N^4)
9) N! + 180000N^2 
10) 300N^5 + 15002^N + 3N
```

(Scroll to the bottom to get the answers to this problem set.)

### 1e. Looping are Often Linear but not Always

**For Loops:** Lets explore looping.

**Q:** Determine the time complexity of this algorithm below

```javascript
// Print each item in the array.
function printAll(arr) {
	for(let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
```

**A:**
You may have guessed that it is **linear** time or **O(N)**. And yes, that would be correct. 

---

To determine why the operations for a loop has a linear order magnitude. Lets explore it in more detail line by line. When there is a loop we have to multiply the operations inside the loop by the total number of iteration the loop runs.

```javascript
// Print each item in the array.
function printAll(arr) {
											// 1 (initiating i to 0 is an operation)
											// the loop runs N iterations
	for(let i = 0; i < arr.length; i++) { 		// 2 operations per break condition check
		console.log(arr[i]); 					// 2 operations to print
	}
}

// total = 1 + N * (2 + 2) = 4N + 1 
// reduce down to O(N) or linear time complexity
```

**While Loops** Sometimes loops can be tricky, especially with ```while``` loops. You have to really evaluate the code to see how many times the loops runs and if it is proportional to the input.

---

**Q:** Evaluate the following code for time complexity.

```javascript
// print the first and last item in the array
function firstTen(arr) {
	let i = 0;
	while(i < 10 && i < arr.length) {
		console.log(arr[10]); 
	}
}
```

**A:** Lets explore the code line by line, keep in mind we have 


```javascript
// print the first and last item in the array
function firstTen(arr) {
	let i = 0; 						// 1
									// maximum of 10 iterations
	while(i < 10 && i < arr.length){ 	// 3 operations for each break condition check
		console.log(arr[10]); 			// 2 operations to print
		i++;								// 1 to increment
	}
}

// total = 1 + 10 * (3 + 2 + 1) = 61 
// reduce down to O(1) or constant time complexity
```
---

### 1f. Analyze by Chunks

Analyzing line by line is good for when you are starting out. But you may quickly learn that it isn't always necessary. We did a lot of work to compute the exact number of operations only to reduce it down later. 

Knowing that lower order terms and coefficients will get dropped anyway, you can speed up your analysis by looking at **chunks** of code at a time, and evaluating based on **magnitude**. 

Lets try this out on a few problems.

---
**Q:** Evaluate the following prblem for time complexity.

```javascript
// Given an array of integers, return all the even items.
function evens(arr){
	let results = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			results.push(arr[i]);
		}
	}
	return result;
}
```
**A:** Lets separate this into chunks and use magnitudes. 

```javascript
// Given an array of integers, return all the even items.
function evens(arr){
	let results = [];						// constant
	for(let i = 0; i < arr.length; i++) {	// linear
		if(arr[i] % 2 === 0) {					// constant 
			results.push(arr[i]);		
		}
	return result;							// constant
}

```
The loop is a linear chunk of operations because everything inside of it is constant.  A linear term is the largest and therefore we have **O(N) time**.

---

### 1g. Nested vs Un-nested Loops

The simple thing you should remember here is:

* **nested loops multiply.**
* **un-nested loops add.**

(I'll expand on this a bit more later)  
***Under construction*** 


### 1h. Understand Complexity of Native Methods

If your language has a native sorting method, do you know what happening behind the scenes? Take sure you take the time to research and look up what sorting method your language is using.  Then loop up the time and space complexity requirements of that sorting function.

The native methods of your language have inherent time and space complexity that you need to understand. One good way you can learn more about the time and space complexity of these functions is to code some of them out yourself.

Here is an example list for JavaScript arrays:

* Array - indexOf
* Array - map
* Array - forEach
* Array - reverse
* Array - sort

In other languages you may look up methods for:

* Java - ArrayList, HashMap
* Python - List, Dictionary
* Ruby - Array, Object

Many of the methods associated with these data structures are going to be more costly than time O(1) and some create a new copy which can lead to O(N) space.

(I'll add a few problems to work on here later.)

***Under construction*** 

### 1i. Understand Complexity of Data Structure Methods

For now go to this website: [Big-O Cheatsheet](http://bigocheatsheet.com/) and take a look through it. For sorting and data structures, it is important to take note of the *average* time complexity. The **average case will be the commonly used if you are apply these sorting methods and data structures in a larger algorithm.

Why suddenly say *average* if we 

***Under construction***

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


### 1j. Leveling Up on Complexity Analysis

Learn more by doing. Work to analyze problems and evaluate the code you have written out. Go through these two tutorials to get more practice on some problems.

[Asymptotic Notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation) by Khan Academy 

[Intro to Big-O Notation](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-big-o-notation) by Rithm School

[Big-O notation explained by a self-taught programmer](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)

[How to Calculate Big-O](https://justin.abrah.ms/computer-science/how-to-calculate-big-o.html)


## 2. Learn Basic Algorithm Patterns

The basic list of algorithm patterns will help you progress throughout the first series of algorithms.  The basic algorithms will require understanding how to use arrays and hashtables, nest loops, and a strong logic controls (```if```, ```if-else```, ```and```, ```or```).


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

*After completing these problems, you should have a good shot at passing Outco's fundamentals check. If you are looking to apply/re-apply please reach out to the [Outco Outreach team](https://outco.io).*

## 6. Progress to Intermediate Concepts

If you want to progress more, then these concepts are what you should tackle next. They are common enough on interviews that having a solid understanding of these concepts is critical to progressing past technical screens involving algorithms.

### Algorithm Patterns

* Pure Recursion
	* ***under construction***
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