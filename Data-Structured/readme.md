## What are "Data Structures".
* Data structures allow us to manage data.
* Examples: Arrays, Objects, Maps, Sets.
* Arrays: where we store a list of data, like couple of numbers or a couple of strings.
* Objects: group data together into one object.

## Different tasks require different data structure.s
* Ordered list of data, duplicates allowed. Example: Array ([1, 2, 3, 4, 5])
* unordered list of data, no duplicates wanted. Example: Set (new Set() ~ set.add("pizza))
* Key value pairs of unordered data. Example: Object ({name: "Max", age : 31}).
* key value pairs of ordered, iterable data. Example: Map (new Map() ~ map.set("loc","Germany")).

## Array - A closer Look.
* [1, 2, 3, 4, 5] this is array and list of comma separated data. we can create it by using square brackets ([]).
* Array characteristics:
1. insertion order is kept.
2. Element access via index.
3. iterable (we can use the for-of loop).
4. Size (length) adjusts dynamically.
5. Duplicate value are allowed.
6. Deletion and finding elements can require "extra work".

## Sets - A closer Look (list of data).
* insertion order is not stored / memorized.
* element access and extraction via method. 
* Iterable ( we can use the for-of loop).
* Size (length) adjusts dynamically.
* Duplicate values are not allowed (unique values only).
* Deletion and finding elements is trivial and fast.

## Array vs Sets.
* arrays: we can always use arrays.
* arrays: must-use if order matters and/or duplicates are wanted.
* sets: only usable if order does not matter and we only need unique values.
* sets: can simplify data access (finding, deletion) compared to arrays.

## Objects - A closer Look.
* unordered key-value pairs of data.
* element access via key (property name).
* not iterable (only with for-in)
* keys are unique, values are not (so, every key name must only appear one).
* keys have to be strings, numbers or symbols.
* can store data and "functionality" (methods).