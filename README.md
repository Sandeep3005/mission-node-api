# Mission-node-api
A simple yet powerful api to fetch data on mission impossible movies.

#### Introduction
This is the documentation for Version 1 (V1) of the Mission Impossible API, originally released July 2018.

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

###### Get one particular movie its position in series
* GET  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies/position/seriesPosition

##### Character Route
---
###### List of all characters
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chracters 

###### Get one particular character with ID
* GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chracters/id

---

###### This API is still work in progress







