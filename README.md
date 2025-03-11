Task Manager App (Spring Boot + React) [![Build Status](https://travis-ci.org/mmadej85/task-manager-spring-react.svg?branch=master)](https://travis-ci.org/mmadej85/task-manager-spring-react)
=======================

Example project to play with spring-boot and react:

### Dependencies / Libs

* **Language**: Java 8 / Javascript (ECMA6, JSX syntax)
* **Main App Libs**: Java: Spring (Spring Boot, MVC), React
* **Build Tools**: Gradle, npm, webpack, babel, eslint
* **JavaScript Testing**: Mocha, Chai, Enzyme, Sinon
* **UI Testing**: Nightwatch.js

### Dev Environment
1. General: windows 7 64bit, jdk 1.8, node v4.5.0, npm 2.15.9, gradle 2.14.1 (gradle wrapper available)
2. Nightwatch tests: firefox 47.0.1
    * [firefox 48 introduces security enhancements causing tests to fail](https://github.com/SeleniumHQ/selenium/issues/2559)
3. Mongo DB version v3.2.9

### Prerequsites
1. Install mongodb
2. Integration tests are using embedded mondgodb: **de.flapdoodle.embed.mongo**
2. For application to work properly start mongodb on **localhost:27017**
    * If you are running mondgo on different host/port please update **application.properties**

### Configuration
1. Default app port: **8080**
2. Default server host:port: **8080**
3. Default ui port: **3000**
4. *\main\resources\application.properties*:

| Property | Description | Default |
| --- | --- | --- |
| spring.profiles.active | Active spring profiles | production |
| spring.data.mongodb.host | Mongo DB host | localhost |
| spring.data.mongodb.port | Mongo DB port | 27017 |
| todolist.dbname | Application dbname within Mongo DB | tasks |

### Usage
(1) Building the executable jar (**server + ui**) (and also run all unit tests and server integration tests):
```
gradle build
```
(2) Running the jar (**server + ui**):
```
java -jar build\libs\todo-list-1.0.0.jar
```
(3) Running **server** in development:
```
gradle bootRun
```
(4) Invoking server integraiton tests:
```
gradle integrationTest
```
(5) Running **ui** in development:
```
cd ui
npm start
```
(6) Runnig ESLint check:
```
cd ui
npm run lint
```
(7) Running js mocha unit test:
```
cd ui
npm test
```
(8) Setup selenium for e2e tests:
```
cd ui
npm run e2e-setup
```
(9) Running e2e tests using nightwatch.js (assuming that ui is run as per point (5) and selenium setup is done as per point (8)):
```
cd ui
npm run e2e
```
