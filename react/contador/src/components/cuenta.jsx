import React, { Component } from 'react';

class Cuenta extends Component {
    render(){
        return(
            <p>Cuenta: {this.props.cuenta}</p>
        );
    }
}

export default Cuenta;