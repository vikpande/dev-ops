[![Build Status](https://travis-ci.org/vikpande/dev-ops.svg?branch=master)](https://travis-ci.org/vikpande/dev-ops)

[![BCH compliance](https://bettercodehub.com/edge/badge/vikpande/dev-ops?branch=master)](https://bettercodehub.com/)


# dev-ops
A react app running 2 micro-services, with continuous integration, running container & K8s with deployment on cloud. Some high level features of the application :
- application displays details of various dogs, allows you to add or delete an entry (API's from contacts server)
- when you client on any dog's image, you get to see the details of their location (API's from location server)

To start the application locally, follow the below steps. The application has 1 client repo and 2 server repo's.

The project has three repo's a client and a server ( client is a react app and the servers are nodejs); namely : 
- Client (dog-city) - Has the react client application
- Server1 (Nameserver) - Has the node server application
- Server2 (locationserver) - Has the node server application

* Prerequisites

Install :

 ```
 yarn
 ```
and

```
node
```

Once installed run the following command on each of the repo:

* Change to name server directory (cd nameserver) and run the following commands on terminal to start the server:

 ```
 yarn or npm install
 ``` 
 ```
 node server.js or yarn start
 ```

This will render the ContactsAPI locally at localhost:5001 and the API is hosted on cloud at :
- https://contacts-server-fbvlerenda.now.sh


* Change to location server directory (cd locationserver) and run the following commands on terminal to start the server:
 
 ```
 yarn or npm install
 ``` 
 ```
 node server.js or yarn start
 ```

This will render the LocationAPI locally at localhost:5002 and the API is hosted on cloud at :
- https://locationserver-jyqbbolqdq.now.sh 

* After you have started both the API server, change to client directory (cd dog-city).
 Now run the following commands on terminal to start the client:

 ```
 yarn or npm install
 ``` 
 ```
 yarn start
 ```

This will start the client app at localhost:3000 
OR 
view the app directly at the follwing path:
https://build-zdpzqowdse.now.sh 

Links to the tools used in application:
- View the code quality here:  [https://bettercodehub.com/results/vikpande/dev-ops]
- View the application architecture here: [https://www.codacy.com/app/vikpande/dev-ops/dashboard?bid=5721642]
- View the application architecture here: [https://travis-ci.org/vikpande/dev-ops]

This app uses Docker and Kubernetes to containerize and orchectrate. The docker images can be found at the below link: 
- https://hub.docker.com/r/vikpande/nameserver/ 
- https://hub.docker.com/r/vikpande/locationserver/ 

THe project management was done using the task and issue management feature of GitHub. Please visit the below link :
- https://github.com/vikpande/dev-ops/projects/1 
The board lists down "completed", and "to-do" tasks and issues. 
 