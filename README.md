Liverpool-Players-Posts
This project was created by me as the Angular front-end framework course at Softuni. It represents a a place where Liverpool fans can post their opinions about the current players. They can sign up, make posts, give likes and read everything other users have in mind.

Pages accessible to logged in users:
Dynamic Create Post page, where all logged in users can create a post with their thoughts.
Dynamic Edit Post page, where all logged in users can edit their post.
Dynamic My posts page, where all logged in users can see their posts.
404 page

Pages accessible to logged out users
Log in page
Register page
404 page
Dynamic Players page, where all users can see all the players and read the posts for them
Dynamic Posts page, where all users can see all the posts.

Backend Structure
The project's backend is a locally hosted Express server, that is utilizing MongoDB as a database.
Database structure
Users Schema
Posts Schema
Players Schema

Services
Player Service
User Service
Post Service

Posts system
All registered users can make, delete and edit their posts (the delete and edit functions are available to the owners only).
All registered users can Like posts which other users have made
The posts show the amount of likes they have.
The posts are ordered by the most recently created.

My posts Page
The my post page includes all the posts that the user has made.


Technology Stack
Bootstrap (NgBootstrap)
Angular 13
JavaScript
HTML, CSS, SCSS
ExpressJS, NodeJS
TypeScript
MongoDB, Mongoose
Redux (ngrx)
Bcrypt

All the REST API Endpoints are stored in the Word document in this repo - Liverpool Players Posts Documentation.docx
a
