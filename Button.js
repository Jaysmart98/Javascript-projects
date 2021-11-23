import React from 'react';


class Button extends React.Component {
    constructor(props){
        super(props);
        this.state= {};
    }
    render() {
        return <button onclick={this.prps.handleAddition}  className="button-color">button</button>
    }
}

export default Button;