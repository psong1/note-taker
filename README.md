# Note Taker

## Description

This is a simple Express.js application takes user input to write notes and saves them to a JSON file. 

## Technologies

* Express.js
* Node.js
* Insomnia

## Installation

Users can install the application by using the HTTPS and 'git clone' in the terminal, or download the zip file. 
The dependency required for this is:

* express.js -- npm i express
* node.js

## Usage

Users can write notes on the right hand side of the page by entering in the title and the note. Once the note is saved, it will show on the left side of the page.
Users can also use Insomnia to test the application by:

* Using 'node server.js' which will console log "API server now on 'port...' "
* In Insomnia, GET "/api/notes" and SEND
* Then, switch to POST, type a test note in the JSON body, and SEND

## Screenshot

![img](./Assets/Screenshot%202023-03-16%20231903.png)

## Contact

* Github: [psong1](https://github.com/psong1) 

* Email me: paulsong29@gmail.com
