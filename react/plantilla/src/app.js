import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// const MiComponente = () => (<h1>Funciona</h1>);

class  MiComponente extends Component {
    render(){
        return ( 
            <h1>Funciona</h1>
        );
    }
}
ReactDOM.render(<MiComponente/>, document.getElementById('app'))