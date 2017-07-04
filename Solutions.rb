PROBLEM SET 2:
You are given an collection based on your language, write a few functions that perform operations on this collection. Determine with the time complexity is for each solution.


1) indexOf: given a collection and a target value, return the index in 
which the value at the index matches the target value. If there is no
match, return -1.


def indexOf(arr, target)
  arr.detect.with_index do |num, i|  #linear
    if num == target      #constant
      return i  
    end
  end 
  return -1               #constant
end 

indexOf([1,2,3,12,4,6,7], 12)

Analysis 

Time Cost: 0(n)
Memory Cost: none


Second solution

def indexOf(arr, target)

i = 0                       #constant

  while i < arr.length      #constant
    if arr[i] == target
      return i
    end 
    i = i + 1               #constant
  end
  return -1                 #constant
end 

indexOf([1,2,3,12,4,6,7], 12)

Analysis 

Time Cost: 0(1)
Memory Cost: none



2) evens: given a collection of integers, return only the even 
values in a new copy of the collection.


def evens?(arr)
num_even = []               #constant
 arr.select do |num|        #linear
   if num % 2 == 0          #constant
     num_even << num
   end 
 end 
 num_even                   #constant
end 

evens?([2, 45, 77, 82, 25, 4, 12, 110, 39])


Analysis 

Time Cost: 0(n)
Memory Cost: 0(1)



Second Solution

def evens?(arr)
num_even = arr.map do |num|         #constant memory and linear runtime
   if num.even?                     #constant
     num                            #constant
   end 
 end 
 num_even.compact                   #linear
end 

Analysis 

Time Cost: 0(n^2)
Memory Cost: 0(1)


evens?([2, 45, 77, 82, 25, 4, 12, 110, 39])




3) split: given a string of characters, return a collection with 
each character separated into its own separate item.

def split(string)
  string.chars
end 


split("abbbbccdgghlk")


Analysis 

Time Cost: 0(1)
Memory Cost: none


Second Solution

def split(string)
  string.split(//)
end 


split("abbbbccdgghlk")



Analysis 

Time Cost: 0(1)
Memory Cost: none


4) sum: given a collection of integers, return the sum of them


def sum(arr)
  arr.inject(:+)
end 


sum([2, 4, 15, 99, 113, 10, 23, 35, 52])

Analysis 

Time Cost: 0(n)
Memory Cost: none


Second Solution

def sum(arr)

total = 0                               #constant
  arr.each do |num|                     #linear
    total += num                        #constant
  end
  total                                 #constant
end 


sum([2, 4, 15, 99, 113, 10, 23, 35, 52])


Analysis 

Time Cost: 0(n)
Memory Cost: none
