import React from 'react';

class Cell extends React.Component {

    constructor() {
        super();
        this.className = 'cell empty';
    }
    
    componentDidMount() {
        this.className = 'cell ' + this.getCssClass(this.props.cell.value);   
    }

    render() {    
        this.className = 'cell ' + this.getCssClass(this.props.cell.value);                   
        return (<div className={this.className}>{this.props.cell.value}</div>);            
    }    

    getCssClass(value) {
        switch(value) {
            case 2:
                return 'two';
            case 4:
                return 'four';
            case 8:
                return 'eight';
            case 16:
                return 'sixteen';
            case 32:
                return 'thirtytwo';
            case 64:
                return 'sixtyfour';
            case 128:
                return 'onetwentyeight';
            case 256:
                return 'twofiftysix';
            case 512:
                return 'fivetwelve';
            case 1024:
                return 'tentwentyfour';
            case 2048:
                return 'twentyfortyeight';
            default:
                if (!value) {
                    return 'empty';
                } else {
                    return 'twentyfortyeight';
                }
        }
    }

}

export default Cell;