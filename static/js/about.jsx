import React from 'react';

class About extends React.Component {

    render() {
        return (<div className="row">
                    <div className="col-xs-12">
                        <p>Created with Flask & React</p>
                        <p>Built with TravisCI, Dockerhub & Digital Ocean</p>
                        <p>Purpose is to have a one-stop dashboard to allow for better planning of NYC commutes</p>
                        <a href="https://github.com/erictsai6/hello-hoboken">github</a>
                    </div>
                </div>);
    }
}

export default About;