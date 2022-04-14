# Liverpool-Players-Posts

This project was created by me as the Angular front-end framework course at Softuni. It represents a a place where Liverpool fans can post their opinions about the current players. They can sign up, make posts, give likes and read everything other users have in mind.

## Pages accessible to logged users
<ul>
    <li> <strong> Dynamic </strong> Create Post page, where all logged in users can create a post with their thoughts. </li>
    <li> <strong> Dynamic </strong> Edit Post page, where all logged in users can edit their post.</li>
    <li> <strong> Dynamic </strong> My posts page, where all logged in users can see their posts.</li>
    <li>404 page</li>
</ul>

## Pages accessible to logged out users
<ul>
    <li>Log in page</li>
    <li>Register page</li>
    <li>404 page</li>
    <li> <strong> Dynamic </strong> Players page, where all users can see all the players and read the posts for them</li>
    <li> <strong> Dynamic </strong> Posts page, where all users can see all the posts.</li>
</ul>

## Backend Structure
### The project's backend is a locally hosted Express server, that is utilizing MongoDB as a database.

#### Database structure
<ul>
    <li>Users Schema</li>
    <li>Posts Schema</li>
    <li>Players Schema</li>
    <li>Token Blacklist Schema</li>
</ul>

#### Services
<ul>
    <li> Post Service </li>
    <li> User Service </li>
    <li> Plyaer Service </li>
</ul>

#### Authorization and Authentication
<ul>
    <li> Done with JWT </li>
    <li> Storing the user in a currentUser varibale </li>
    <li> Restricted pages are protected with guards </li>
</ul>

## Posts system

<ul>
    <li>All registered users can make, delete and edit their posts (the delete and edit functions are available to the owners only).</li>
    <li>All registered users can Like posts which other users have made</li>
    <li>The posts show the amount of likes they have.</li>
    <li>The posts are ordered by the most recently created.</li>
    <li>Load animation is provided for the posts </li>
</ul>

## My posts Page
<ul>
    <li> The my post page includes all the posts that the user has made. </li>

</ul>


## Technology Stack 
<ul>
    <li>Bootstrap (NgBootstrap)</li>
    <li>Angular 13</li>
    <li>JavaScript</li>
    <li>HTML, CSS</li>
    <li>ExpressJS, NodeJS</li>
    <li>TypeScript</li>
    <li>MongoDB, Mongoose</li>
    <li>Bcrypt</li>
    <li>JWT</li>
</ul>

## REST API End points
<ul>
    <li>All the REST API Endpoints are stored in the Word document in this repo - Liverpool Players Posts Documentation.docx</li>
</ul>

## How to start the project localy
<ul>
    <li>Install all dependencies from both API and Client with the command npm i</li>
    <li>Navigate to the API folder in the command line and start the server with the npm run start</li>
    <li>Navigate to the Client folder in the command line and start the app with ng serve. This will start the app on localhost:4200</li>
    <li>Finally insert into to the player section in the datatbase the json playersDB.json</li>
</ul>
