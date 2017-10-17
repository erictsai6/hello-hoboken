import React from 'react';

class EmbeddedTweets extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (<div id="embedded-twitter">
                    <a className="twitter-timeline" href="https://twitter.com/PANYNJ_LT?ref_src=twsrc%5Etfw">Tweets by PANYNJ_LT</a>
                </div>);

    }

    componentDidMount() {
        const embeddedTwitterEl = document.getElementById('embedded-twitter');
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//platform.twitter.com/widgets.js';
        embeddedTwitterEl.appendChild(s);
    }
}

export default EmbeddedTweets;