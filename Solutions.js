PROBLEM SET 2:
You are given an collection based on your language, write a few functions that perform operations on this collection. Determine with the time complexity is for each solution.


1) indexOf: given a collection and a target value, return the index in 
which the value at the index matches the target value. If there is no
match, return -1.



var indexOf = function (arr, target){
  for(var i = 0; i < arr.length; i++){   // linear
    if(arr[i] == target){
     return i                          // constant
    }
  }
  return -1                         //constant
};

indexOf([1,2,3,12,4,6,7], 12)


Analysis 

Time Cost: O(n)
Memory Cost: none



Second Solution

var indexOf = function (arr, target){
  let i = 0;                                    //constant
  while( i < arr.length){                       //constant
    if(arr[i] == target){                       //constant
      return i
    }
    i++;                                        //constant
  }
  return -1;                                    //constant
};

indexOf([1,2,3,12,4,6,7], 12)


Analysis 

Time Cost: O(1)
Memory Cost: none



2) evens: given a collection of integers, return only the even 
values in a new copy of the collection.


var evens = function (arr){
  
let numEvns = new Array();                  //constant

for(var i = 0; i < arr.length; i++){        //linear
    if(arr[i] % 2 == 0){                    //constant             
    numEvns.push(arr[i])
    }
  }
  return numEvns                            //constant
}


evens([2, 45, 77, 82, 25, 4, 12, 110, 39])


Analysis 

Time Cost: O(n)
Memory Cost: none



Second Solution


var evens = function(arr){
  evens_arr = arr.filter(function(val){   //constant memory and constant runtime
    if(val % 2 == 0){                     // constant
        return val
      }
  });
  return evens_arr                          //constant
}


evens([2, 45, 77, 82, 25, 4, 12, 110, 39])


Analysis 

Time Cost: O(1)
Memory Cost: O(1)



3) split: given a string of characters, return a collection with 
each character separated into its own separate item.



var split = function(string){
  return string.split('')
}

split("hungryhungryhippo")

Analysis 

Time Cost: O(1)
Memory Cost: none



Second Solution

var split = function(string){
  return string.split(/(?!$)/g)
}

split("hungryhungryhippo")


Analysis 

Time Cost: O(1)
Memory Cost: none


4) sum: given a collection of integers, return the sum of them.

var array = [4,5,6,7,8];
var singleVal = 0;                                  //constant
var singleVal = array.reduce(function(previousVal, currentVal) {        //constant
  return previousVal + currentVal;                  //constant
}, 0);


Analysis 

Time Cost: O(1)
Memory Cost: O(1)


Second Solution

var array = [4,5,6,7,8];
var singleVal = 0;                              //constant
for(var i = 0; i < array.length; i++){          //linear
  var singleVal = singleVal += array[i];        //constant
}


Analysis 

Time Cost: O(n)
Memory Cost: O(1)


