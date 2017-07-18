# spring-boot-angular4-heroes

Spring Boot + Angular 4 + Spring Data JPA + MySQL CRUD App Example: The Tour of Heroes

## Getting Started

### Prerequisites

You should install the following software on your own computer.

* JDK 1.8
* Maven
* MySQL
* Node.js (Node 6.9.0 or higher, together with NPM 3 or higher)
* Angular CLI

Create a database named "test" in MySQL and import "test.sql" file (script folder) into it. After that, configure username and password
in "application.properties" file.

### Build and run

Open a command prompt and navigate to the root folder, run the following command

```
mvn clean install
```

Then, cd into backend folder and run the spring boot application 

```
cd backend
mvn spring-boot:run
```

After that, open another command prompt and navigate to the folder frontend\src\main\frontend, run the angular application using 
angular CLI:

```
ng serve --o
```
It will automatically open your browser on http://localhost:4200/ (http://localhost:4200/dashboard/ in this case).

## Reference

* Angular2 and Spring Boot: Getting Started (https://blog.jdriven.com/2016/12/angular2-spring-boot-getting-started/)
* Tour of Heroes (https://angular.io/tutorial)
* Spring Boot REST + Angular 2 + JPA + Hibernate + MySQL CRUD Example 
  (http://www.concretepage.com/spring-boot/spring-boot-rest-angular-2-jpa-hibernate-mysql-crud-example)

## About Hero 

There are two ways to create a Hero object. 
* Just set a name into it and using an auto-increment feature with id, like Ref 3
* Set both id and name, where id is maxId + 1 using angular 2 in-memory-web-api library 
  (https://stackoverflow.com/questions/39490916/angular2-tutorial-how-is-the-id-variable-in-this-section-being-auto-incremented)

I used the latter with flattened promise chains in hero.service.ts file. If you find a simple way or if you have any questions, please 
email me at gaoxinwen00@gmail.com

