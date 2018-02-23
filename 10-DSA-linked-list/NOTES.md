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
