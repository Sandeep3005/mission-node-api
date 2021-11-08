# Mission-node-api
A simple yet powerful api to fetch data on mission impossible movies.

#### Introduction
This is the documentation for Version 2 (V1) of the Mission Impossible API, originally released July 2018.

#### Response Formats
The default response format is JSON `application/json`.

#### Authentication
Currently this API requires no access key for most routes.

#### All Routes
All routes as hosted on heroku need to be prefixed with 
`https//mission-api.herokuapp.com/`

##### Movies Route
---

###### List of all movies
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies 

###### Get one particular movie with ID
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies/id

##### Character Route
---
###### List of all characters
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chracters 

###### Get one particular character with ID
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chracters/name

###### Get all characters from a particular movie
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chracters/movie/id

---
###### List of some features of API
###### Generate random team for Ethan
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/random_team


<br>
<br>
-###### This API is still work in progress






