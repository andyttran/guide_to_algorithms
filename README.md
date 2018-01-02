# Intro to Algorithms

## Purpose
The main goal of this guide is to get developers started with algorithms.  This guide will serve as a roadmap for developers who have not taken an introductory algorithms course or need a refresher on basic algorithm design. 

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

* A unit of time can be one arithmetic operation: ```5 + 7```
* Or printing something: ```console.log('hello')```
* Or instantiating a new variable: ```let name = 'foo';```
* Or accessing an item in an Array: ```arr[5]```
* Or returning something: ```return 'foobar';```

**One Unit of Space**  

* A unit of space can be creating a single new variable: ```var i = 1;```
* Or creating an empty array: ```var list = [];```
* Or adding a new item to your list: ```list.push('foo');```
* Or adding a key-value pair into a hashtable: ```obj[foo] = 'bar';```


### 1c. Analyze Line by Line

When you are starting out, try evaluating the complexity line by line and determine the complexity for each line.  Then sum up the complexity of each line to get the total. 

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

The first print statement has an array access and then a printing to the console, so thats 2 operations. The second print statement involves: accessing the length, subtracting from the length, accessing the index, and printing to the console. Thats a total of 4 for the second print statement. 

In total there are 6 computations, we would say this is O(1) time complexity. Read the next section to find out why.

### 1d. Drop Lower Order Terms and Coefficients

With complexity analysis, we need to do two things after finding the total amount of operations or memory:

1. Drop lower order terms
2. Drop coefficients in front of the leading term.

This is because for Big-O analysis we only care about the largest order of magnitude. As the input size scales extremely large, the lower terms make less of an impact. Furthermore, since the magnitude is what is used for Big-O, we don't include the coefficients in front of the leading term.

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

### 1e. Looping are Sometimes Linear but not Always

**For Loops:** Lets explore looping more. Most of the time, when we loop through a collection that also happens to be an input, then we would consider the loop to be O(N).

**Q:** Determine the time complexity of this algorithm below:

```javascript
// print each item in the array.
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
// print each item in the array.
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

**Q:** Evaluate the following code for time complexity:

```javascript
// print the first ten items in the array
function firstTen(arr) {
	let i = 0;
	while(i < 10 && i < arr.length) {
		console.log(arr[10]); 
		i++;
	}
}
```

**A:** Lets explore the code line by line, keep in mind we have 


```javascript
// print the first ten items in the array
function firstTen(arr) {
	let i = 0; 						// 1
									// maximum of 10 iterations
	while(i < 10 && i < arr.length){ 	// 4 operations for each break condition check
		console.log(arr[10]); 			// 2 operations to print
		i++;								// 1 to increment
	}
}

// total = 1 + 10 * (4 + 2 + 1) = 71 
// reduce down to O(1) or constant time complexity
```
---
**While Loop continued:** Lets evaluate a slight variation of the previous problem.

**Q:** Evaluate the following code for time complexity:

```javascript
// print from the 11th to the last items in the array.
function afterTen(arr) {
	let i = 11;
	while(i < arr.length) {
		console.log(arr[i]); 
		i++;
	}
}
```
**A:** Lets explore the code line by line, keep in mind we have 


```javascript
// print from the 11th to the last items in the array.
function afterTen(arr) {
	let i = 11; 					// 1
									// maximum of N-10 iterations
	while(i < arr.length){            // 2 operations for each break condition check
		console.log(arr[i]);          // 2 operations to print
		i++;                          // 1 to increment
	}
}

// total = 1 + (N - 10) * (2 + 2 + 1) = 5N + 51
// reduce down to O(N) or Linear time complexity
```

Notice how when the problem prints from index 11 to the end of the array, when the input gets larger, so does the amount of iterations in the while loop.  

---
### 1f. Analyze by Chunks

Analyzing line by line is good for when you are starting out. But you may quickly learn that it isn't always necessary. We did a lot of work to compute the exact number of operations only to reduce it back down. 

Knowing that lower order terms and coefficients will get dropped anyway, you can speed up your analysis by looking at **chunks** of code at a time, and evaluating based on **magnitude**. 

Lets try this out on a few problems.

---
**Q:** Evaluate the following problem for time complexity:

```javascript
// given an array of integers, return all the even items.
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
// given an array of integers, return all the even items.
function evens(arr){
	let results = [];						// constant
	for(let i = 0; i < arr.length; i++) {	// linear
		if(arr[i] % 2 === 0) {					// constant 
			results.push(arr[i]);		
		}
	return result;							// constant
}

```
The loop is a linear chunk of operations because there are a linear amount of iterations and everything inside of it is constant.  A linear chunk is the largest out of the entire algorithm and therefore we have **O(N) time**.

---

### 1g. Nested vs Un-nested Loops

Be careful not to mistakenly assume that just because there are multiple ```for-loops``` in an algorithm that it is automatically quadratic O(N^2) complexity or more. The simple rule you should remember here is:

* **nested loops multiply**
* **un-nested loops add**

Lets go over a few different examples and analyze problems to see how nested versus un-nested loops affect the overall complexity of the algorithm.

**Nested Loop** Lets take a look at a problem with a nested loop:

```javascript
// print all values that have a matching pairs
function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                console.log(i, 'is a pair');
            }
        }
    }
}
```
The problem here has a nested loop, lets evaluate this algorithm for time complexity:

```javascript
// print all values that have a matching pairs
function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {      // linear
        for (let j = i; j < arr.length; j++) {      // linear
            if(arr[i] === arr[j]) {                    // constant
                console.log(i, 'is a pair');
            }
        }
    }
}
```
Since there are two nested loops,  we multiply linear, linear, and constant together to make quadratic O(N^2 ) time complexity. Note how the second loop starts at index ```i``` and moves towards the end of the array.  The second loop is getting smaller and smaller each time.  We still consider the inner loop linear because on average the number of iterations will be about 0.5N. Since we drop coefficients anyway, the inner loop is simplified to linear.


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

Try rewritting some of the native methods yourself with these problems:

```
PROBLEM SET 2:
You are given an collection based on your language, write a few functions that perform operations on this collection. Determine with the time complexity is for each solution.

Based on your language, the collection will be in this format:
JavaScript: Array
Java: ArrayList
Python: List
Ruby: Array 
Other: Dynamic Array

1) indexOf: given a collection and a target value, return the index in 
which the value at the index matches the target value. If there is no
match, return -1.

2) evens: given a collection of integers, return only the even 
values in a new copy of the collection

3) split: given a string of characters, return a collection with 
each character separated into its own separate item.

4) sum: given a collection of integers, return the sum of them

```
***Solutions are Under construction*** 

### 1i. Understand Complexity of Data Structure Methods

For now go to this website: [Big-O Cheatsheet](http://bigocheatsheet.com/) and take a look through it. For sorting and data structures, it is important to take note of the *average* time complexity. The *average* case will be the commonly used if you are apply these sorting methods and data structures in a larger algorithm.

Why suddenly focus *average* if we have been focused on Big-O which is looking at the worse case senario? Its because when working on an algorithm that uses sorting/data structures methods, the worse case input for the entire algorithm typically does not coincide with the worse case input for the sorting/data structure methods.

We will expand more on this in the future, but for now when we evaluate algorithms, if using sorts and data structure methods as part of your solution, it is more common to use *average* case when evaluating for worse case. Otherwise everytime we lookup a key in a hashtable, it would be O(N) which only happens in ultra-rare senarios.

### 1h. Recognize Common Orders of Magnitudes

Below are some common examples of algorithms and patterns that lead to different magnitudes of time complexity. When problems have an associated constraint, use the constraints as clues to what the algorithm may end up being.

*Disclaimer: these examples highly depend on the actual input that is scaling.*

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

Learn more by doing. Work to analyze problems and evaluate the code you have written out. Go through these two tutorials to get more practice on some problems. Furthermore, from now on, every algorithm you write should be analyzed for complexity.

1. [Asymptotic Notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation) by Khan Academy 

2. [Intro to Big-O Notation](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-big-o-notation) by Rithm School

3. [How to Calculate Big-O](https://justin.abrah.ms/computer-science/how-to-calculate-big-o.html) by Justin Abrah


## 2. Learn Basic Algorithm Patterns

The basic list of algorithm patterns will help you progress throughout the first series of algorithms.  The basic algorithms will require understanding how to use arrays and hashtables, nest loops, and a strong logic controls (```if```, ```if-else```, ```and```, ```or```).


* **Linear Search:** The most basic search there is, this is a starting point to understand searching.
	* [Open My Mind - Implementation](http://algorithms.openmymind.net/search/linear.html)

* **Multiple Pointers:** Looping and using multiple pointers that start at different positions and sometimes travel at different speeds are important to ensure you can strengthen your looping game.
	* [Outco - Reading on Multiple Pointers](http://class.outco.io/courses/technical/lectures/1950839)
	
* **Frequency Count:** Learn to use hashtables to shave down time complexity on a lot of problems.  One class of problems involve knowing/tracking counts.
	* [Outco - Reading on Frequency Count](http://class.outco.io/courses/technical/lectures/2025015)
* **Decrease and Conquer:** Its cousin to the more popular Divide and Conquer algorithm, these class of problems are important because they can be solved easily without recursion. It uses a single subproblem which can be solved with a while loop.  As we begin on recursion later, converting these decrease and conquer problems to single recursion problems will help strengthen your understanding of recursion.
	* [Outco - Reading on Decrease & Conquer](http://class.outco.io/courses/technical/lectures/2067856)
	* [OpenMyMind - Binary Search](http://algorithms.openmymind.net/search/binarysearch.html)

* **Basic Sorting:** Insertion, Selection, and Bubble sort are basic sorts tha have O(N^2 ) time complexity.  Understanding that there are often many ways to solve the same problem, and looking at the advantages and disadvantages of them allows us to start making better algorithm design decisions.
	* [Youtube - Visualize Bubble and Insertion Sort](https://www.youtube.com/watch?v=WaNLJf8xzC4&t=114s)
	* [Khan Academy - Selection, Insertion](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
	* [OpenMyMind - Bubble Sort](http://algorithms.openmymind.net/sort/bubblesort.html)
	* [OpenMyMind - Insertion Sort](http://algorithms.openmymind.net/sort/insertionsort.html)
	* [Visualgo - Visualize Sorting Algorithms](https://visualgo.net/sorting)

* **Recursion** Finally, getting to recursion which can be a tough hump to get over for thosejust starting out.  We recommend using the Helper Method Recursion pattern which uses a helper method to actually do the recursion. One way to start is to replace simple loops with recursion. We will be posting simpler problems for you to start off soon.
	* [Khan Academy - Recursive Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/p/challenge-recursive-powers)
	* [Eloquent JavaScript - Recursion Section](http://eloquentjavascript.net/03_functions.html) 
	* [Rithm School - Intro to Recursion](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion)

***Under Construction***

## 3. Learn Linear Data Structures

* **Arrays and Dynamic Arrays:** Start here to learn more about arrays and dynamic arrays.  If you began your development journey learning Python, Ruby, or JavaScript, you may not have been exposed to primitive array data structures (continuous blocks of memory) because your language has abstracted the concept of arrays into a more powerful, more functional data structures. Lets jump back to the old times and find out what arrays really are under the hood.
	* 	[OpenMyMind - Arrays and Dynamic Arrays](http://algorithms.openmymind.net/structures/arrays.html)

* **Linked Lists, Stacks, and Queues** These linear data structures are often neglected as data structures in Python, Ruby, and JavaScript because Lists and Arrays in these languages has combined their functionality.  It is still important to understand how they are constructed, and how to nagivate through these more limited functionality data structures. Often we are given constraints, learning to work with these constraints make us more aware ways to tackle a problem.  That starts with really understanding these linear data structues.
	* [MyCodeSchool - LinkedList](https://www.youtube.com/watch?v=NobHlGUjV3g&t)
	* [Visualgo - LinkedList, Stacks, Queues](https://visualgo.net/list)
	* [Gayle McDowell - Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)

More problem sets to come for these problems.

*** Under Construction ***

## 4. Develop a Process for Problem Solving

Read the following 4 points and ask yourself if you ascribe to some or all of these challenges:

* I often find it difficult to understand what the problem is even asking.
* I can understand the problem, but am just not sure where to begin or I just blank out.
* I can jump into coding quickly, but when I find errors in my logic my algorithm seems to break down and I become stuck.
* I can come up with an algorithm in my head that I think might work, but I cannot seem to write it out correctly.

These are challenges that having a more structured process for problem solving would help. What you want to establish is a framework for solving problems. This framework will provide you with a list of steps and line items to check off to ensure:

 1. you properly understand the problem
 2. you are able to vocalize and visualize your code and talk over solutions at a high level
 3. you can analyze your solution to determine the validity of your algorithm 
 4. you are able to translate your algorithm into code you can verify

Here is an example framework which you can adopt and modify as needed to fit your style of problem solving:

1. **Understanding the problem**
    * Ask clarifying questions
    * Get the inputs, outputs, constraints (time/space)
    * Get example case, edge conditions
    * Clarify what functions/methods you have to work with
2. **Exploration of Solutions**
    * Communicate aloud (or with interviewer)
    * Diagramming (pencil/paper or on the whiteboard)
    * Explain the naive solution
    * Brainstorm
3. **Solution Analysis**
    * Complexity analysis to verify solutions
    * Verifying solution edge conditions
4. **Coding**
    * Pseudocoding
    * Coding out solution from pseudocode
    * Run example cases
    * Checking edge conditions

### Roadmap to develop a problem solving process

1. Adopt a framework and print out the steps for reference.
2. Select easier problems to practice your framework (two each day minimum). Focus on the process rather than the algorithm.
3. Follow the steps of your framework. Focus on applying each step before moving to the next.
4. Practice different formats: whiteboard, syntax highlighted text editor, and plain text editor.
5. Practice your framework daily until you can execute without the printed reference.


## 5. Put in Practice

Practice easy level algorithms to get into the groove of things. Remember the steps from the previous section.  Grab a notepad and pencil and prepare to diagram things out if necessary. Collectively, you should work on at least 15 problems from these resources:

* [Leetcode](https://leetcode.com/problemset/algorithms/) - Do Easy Problems with Over 55% Acceptance Rate
* [Codewars](https://www.codewars.com/) -  Kata 7-8 problems
* [Coderbyte](https://coderbyte.com/challenges#easyChals) - 10 Easy problems
* 

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

If you are interviewing, you need to evaluate your ability to solve algorithms under  a set amount of time and possibly with someone on the other end. Get yourself into to pressure setting that interviews by doing mock interviews. 

Here are a few resources that you can use to test yourself:

* [Leetcode Mock Interview](https://leetcode.com/mockinterview/)
* [Pramp - practice with others live](https://pramp.com/)

***Under Construction***

## 8. Final Notes
Algorithms is not something you learn overnight, it takes practice and consistency.  I hope you found this as a useful starting point. I will be expanding on this resource  in the weeks to come.  Please reach out to me if you have any questions.

**If you found this guide helpful, please feel free to star and share with anyone that would get value from this guide.**


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
