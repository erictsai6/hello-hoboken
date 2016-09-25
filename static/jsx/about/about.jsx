import React from 'react';

class About extends React.Component {

    render() {        
        return (<div className="about-page">
                    <div className="about-container">
                        <h3>Hello Hoboken</h3>                        
                        <p>Created with Flask & React</p>
                        <p>Built with TravisCI, Dockerhub & Digital Ocean</p>
                        <p>I wanted to learn more about React, Gulp and Webpack so I built this
                        webapp as a little side project.  HelloHoboken crawls the NJTransit website 
                        to get an updated schedule and reads hourly weather reports from WeatherUnderground.  
                        </p>
                        <p>Click here for the source code &nbsp;<a href="https://github.com/erictsai6/hello-hoboken">github</a></p>
                    </div>
                </div>);
    }
}

export default About;