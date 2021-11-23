import React from "react";

class Captain extends React.Component{
    state = {
        divContainer: false,
    }
    render() {
        var handleChange = e => {
            this.setState({divContainer:! this.state.divContainer })
        }
        const x = this.state.divContainer
        return (
            <button onClick={()=>handleChange()}>{x? 'Captain':'Make Captain'}</button>
        )
    }
}


export default Captain