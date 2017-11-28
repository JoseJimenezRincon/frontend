import React, { Component } from 'react';

class Botones extends Component {

    constructor(){
        super();
        this.onClick1 = this.onClick1.bind(this);
    }

    onClick1(){
        this.props.onHandleClickIncr();
    }

    render() {
        return (
            <div>
                <button type="button" onClick = {this.onClick1} >+</button>
                <button type="button" onClick={() => this.props.onHandleClickDecr()}>-</button>
            </div>
        );
    }
}

export default Botones;