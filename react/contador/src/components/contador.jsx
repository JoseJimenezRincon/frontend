import React, { Component } from 'react';
import Cuenta from './cuenta.jsx';
import Botones from './botones.jsx';

class Contador extends Component {
    constructor() {
        super();
        this.state = {
            cuenta: 0
        };
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
    }

    incrementar() {
        this.setState(
            { cuenta: this.state.cuenta + 1 }
        );
    }

    decrementar() {
        this.setState(
            { cuenta: this.state.cuenta - 1 }
        );
    }

    render() {
        return (
            <div>
                <h1>Mi Contador</h1>
                <Cuenta cuenta= {this.state.cuenta}/>
                <Botones onHandleClickIncr = {this.incrementar} onHandleClickDecr = {this.decrementar}/>
            </div>
        );
    }
}

export default Contador;