HELLO HOBOKEN [![Build Status](https://travis-ci.org/erictsai6/hello-hoboken.svg?branch=master)](https://travis-ci.org/erictsai6/hello-hoboken)
===================

Purpose of this project is to create a flask webapp that polls 
weather underground and the njtransit website for data and 
displays it in a useful manner for me to consume.  

This project is connected to Travis CI for continuous integration
and DockerHub to build docker images 

TODO
--------
- Create diagram for architecture
  - Development
  - Production
- Server
  - Add logging to server
  - Add additional unit tests
  - Add None checks when requesting data
  - Debug "DELAYED" message when < 1 minute 
- React
  - Display additional data for hours, chance of rain, etc. 
  
Prerequisites
-----------
- python 2.7
- virtualenv

Instructions
-----------
- virtualenv venv
- source venv/bin/activate
- pip install -r requirements.txt
- npm install -g gulp-cli
- gulp
