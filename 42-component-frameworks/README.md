![cf](http://i.imgur.com/7v5ASc8.png) 42: Component Frameworks
===

## Learning Objectives
* Students will learn differences and similarities between modern component frameworks

## Readings
* [Angular 1.6 Docs](https://docs.angularjs.org/api)

## Outline

### Intro to Angular.js
Angular.js is a JS based front-end web application framework that is built on top of the idea that declarative programming should be used to create user interfaces and connect functional components. Angular believes that imperative programming should be left to defining an application's buisness logic. Angular.js has a few key design constructs that should be considered when constructing an application:
  * decouple DOM manipulation from application logic
  * decouple the client side from the server side
  * provide structure for the full application development life-cycle

### CRUD Applications
Angular.js is excellent at handling most common frontend **CRUD** application development. CRUD applications refer to apps that require the use of "create, read, update, and delete" functionality. On the backend, we'll be using CRUD operations to interact with the resources in our database. On the front-end, we'll use CRUD operations to interact with components in the DOM - this provides users with an interface to communicate with the backend.

### 2-Way Data Binding
Angular.js provides us with out-of-the-box, simple to use, **2 way** data binding that allows for quick, dynamic, transfer of data from the frontend to the backend. Angular.js uses a `$rootScope` object that will re-render templates on the DOM when values have changed.  It also provides us with an `ng-model` directive that allows you to dynamically set the state of a property on the `$rootScope`. This is automatically handled when applied to an `input` tag. When using an `input` tag that controls the state, you can view the effect of template rendering in real time.