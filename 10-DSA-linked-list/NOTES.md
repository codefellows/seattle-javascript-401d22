 Class 10
==========
[X] Short Q&A
[ ] Review Big-O Notation
[ ] Review Arrays Insert / Delete
[ ] Introduce Linked Lists
[ ] Implement Linked List
[ ] White Board Challenge
[ ] Lab Time

CRUD
create/read/update/delete
just an acronym
a menomic memory device
not really a technology or specification

HTTP
HyperText Transfer Protocol
sends HTML over the internet (any other stuff!)
it has methods:
  GET
  POST
  PUT
  DELETE
  (misc other rarely used ones)
"you can do CRUD stuff with HTTP"
GET  /profile read it
POST /profile create a new profile
PUT  /profile edit a profile
DEL  /profile delete


REST
REpresentational State Transfer
a standard way to do CRUD stuff with HTTP on "resources"
a resource is a collection of some type of data
  movies on IMDB
  songs on Spotify
  artists on Spotify
  profiles on facebook
  pokemon in a pokedex

REST gives us a pattern for creating URLs
with HTTP methods to describe how to do
CRUD on some resource

resource: notes

POST	/api/notes	    Create a note resource
GET	  /api/notes      Read all notes
GET   /api/notes/:id	Read a note resource
PUT	  /api/notes/:id	Update a note resource
DEL	  /api/notes/:id	Delete a note resource


DON'T REINVENT THE WHEEL
========================
GET /api/create-note
GET /api/get-all-notes
GET /api/note

GET /api/pokemon-make-new
GET /api/find-pokemon
GET /api/pokemon-info

# Big O
Not how long it takes
It's how much longer it takes when the size of N goes up

O(1)     - constant lookup
O(N)     - for loop
O(N^2)   - nested for loop
O(log N) - cut it in half, then half again, half and half
           and half forever
         - guessing a number from 1-100 the smart way
         - flipping through a phone book starting in the middle
         - array binary search

# Array Big-O Complexity
O(1) a[i]      direct read operation
O(1) a[i] = 42 direct write operation
O(N) insert at index because of shifting
O(N) remove at index because of shifting
let o1  = {value: 1, next: null};
let o77 = {value: 7, next: o1};
let o33 = {value: 3, next: o77};
let o7 = {value: 7, next: o33};
let o3 = {value: 3, next: o7};

# Specification vs Implementation
Specification: what it should do
Implementation: how it actually does it

             List
              |
        ------------
        |           |
    ArrayList     LinkedList

## Specification of List Methods

```
.isEmpty()
.size()
.get(index)
.prepend(value)
.append(value)
.setAtIndex(index, value)
.removeAtIndex(index)
```

It's possible to create two different implementations of one
specification. Notice how our ArrayList and the LinkedList could
both support all the methods in the List specification, but
implement them completely differently under the hood.

Specifications allow us to define how to interact with data without
worrying about the underlying implementation.

# LinkedList Practice Manipulations

```
// prepend a new node to front of list
node = new ListNode(-12)
node.next = list
list = node
```


```
list -> 0 -> 1 -> 2 -> 3 -> 4
list -> 0 -> 1 -> 3 -> 4

let n1 = list.next;
let n2 = list.next.next;
n1.next = n2.next;
```

```
list -> 4 -> 5 -> 6
list -> 6 -> 5 -> 4

n6 = list.next.next
n5 = list.next
n4 = list
n6.next = n5
n5.next = n4
list = n6

n4 = list
n5 = list.next
n6 = list.next.next
n4.next = null
n5.next = n4
n6.next = n5
list = n6
```

```
// assume you will use "xx = new ListNode(1)"
list -> 0 -> 2
list -> 0 -> 1 -> 2

let newNode = new ListNode(1)
newNode.next = list.next;
list.next = newNode;
```

```
list -> 1 -> 3 -> 2
list -> 1 -> 2 -> 3

// point the two to the three
list.next.next = list.next;

// point the one to the two
list.next = list.next.next;

// point the three to null
list.next.next = null
```

## Circular References (aka cycles, loops)
```
list -> 88
list -> 88 -> 88 -> 88 -> 88 -> 88 -> 88 -> 88 -> 88 -> 88 -> 88 -> ...

list.next = list
```

# Why not just change the data?
The data might be extremely big whereas the references are small.
Imagine copying a large file from one folder to another.

If the computer stores the file as a reference to a location
on your hard drive it can simply copy the reference and copy nearly instantly

Copying all the data in a file would be a long lengthy process.

# In Summary
Array vs Linked List
- linked lists use points

Which is faster?
- depends!
- arrays read and write directly faster
- linked lists manipulate their order faster
