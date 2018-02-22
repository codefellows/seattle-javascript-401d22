![cf](http://i.imgur.com/7v5ASc8.png) 13: Object Relational Mapping
===

## Learning Objectives
* Students will learn about Object Relation Mapping (ORM)
* Students will learn about Object Document Mapping (ODM)
* Students will learn to model data using a MongoDB ODM

## Resources
* Read [mongoDB driver quick start](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)
* Skim [mongoDB driver collection API docs](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html)
* Read [mongoose guide](http://mongoosejs.com/docs/guide.html)

### Outline

### MongoDB
MongoDB is a free and open-source document oriented database management system (DBMS). This is often referred to as a NoSQL DBMS. It allows developers to create schemas that store and query JSON like documents. MongoDB has a powerful query system that supports field queries, range queries, and regular expression searches. Documents can be indexed with primary and secondary keys. MongoDB databases can scale horizontally using a technique called sharding, which enables multiple MongoDB databases to act as one through the use of a load balancer. MongoDB has an aggregation framework that enables developers to process data and return computed results. It has grown in popularity among teams that strive for agile and rapid development of their products. It is also a great database for basic storing of key value pairs.

Although MongoDB has many great features for build modern web application, it is not good at solving the following problems:

 - MongoDB does not support joins - therefor, it doesn't model relational data well
 - It is not good for storing binary data (like images)
 - It is not small enough to run as an embedded database (like on a phone)
 - It is not good at doing large `map`/`reduce` jobs (huge aggregations)

 If your application is depending on doing many of these operations, you may want to consider using other database technologies, like a SQL based DBMS.

MongoDB, like many databases, is built on the client-server model. A MongoDB Server called a Mongo [Daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) is run as a background task on a host. A Client such as the MongoDB Shell or MongoDB Driver can connect to the MongoDB Dameon to run queries. MongoDB Drivers are libraries that enable developers to make queries from a programming language.

### ORMs and ODMs
Object Relational Mapping (ORM) is a programming technique for converting relational database models to a programming language data type using Object Oriented Programing. ORM libraries enable developers to use their programming language to control a database instead of using the database's native query language. They help developers write cleaner and safer code by abstracting away the complexities of database languages. Object Document Mapping (ODM) libraries function similar to ORM libraries but work with NoSQL databases that use document database models.