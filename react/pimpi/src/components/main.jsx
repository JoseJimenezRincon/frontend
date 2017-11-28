import React, { Component } from 'react';
import Botones from './botones.jsx';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            conceptos: [
                { nombre: 'luz:', cantidad: -25 },
                { nombre: 'quiniela:', cantidad: 45 }
            ],
            form: {
                nombre: '',
                cantidad: 0
            },
            busqueda: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.addConcept = this.addConcept.bind(this);
        this.onHandleChangeFilter = this.onHandleChangeFilter.bind(this);
    }

    onHandleChange(e) {
        if (e.target.name === "iConcepto") {
            this.setState({ form: { nombre: e.target.value, cantidad: this.state.form.cantidad } });
        } else {
            this.setState({ form: { cantidad: e.target.value, nombre: this.state.form.nombre } });
        }
    }

    addConcept() {
        let nuevoConcepto = {
            nombre: this.state.form.nombre,
            cantidad: this.state.form.cantidad
        }
        let nuevosConceptos = this.state.conceptos.concat([nuevoConcepto]);
        this.setState({
            conceptos: nuevosConceptos,
            form: {
                nombre: '',
                cantidad: 0
            }
        });
    }

    onHandleChangeFilter(e) {
        this.setState({busqueda: e.target.value});
    }

    render() {
        let filas = this.state.conceptos.map((concepto) => {
            if ( concepto.nombre.includes(this.state.busqueda) ){
                return (
                    <tr>
                        <td>{concepto.nombre}</td>
                        <td>{concepto.cantidad}</td>
                    </tr>
                )
            }
        });

        return (
            < div >
                <h1>Gastos e Ingresos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filas}
                    </tbody>
                </table>
                <br />
                <h2>Concepto</h2>
                <input name="iConcepto" type="text" onChange={this.onHandleChange} value={this.state.form.nombre}
                    placeholder="Escriba aquí su concepto" />
                <h2>Cantidad</h2>
                <input name="iCantidad" type="number" onChange={this.onHandleChange} value={this.state.form.cantidad} />
                <button type="button" onClick={this.addConcept}>Añadir</button>
                <h2>Búsqueda</h2>
                <input name="iBusqueda" type="text" onChange={this.onHandleChangeFilter} value={this.state.busqueda.nombre} />
            </div >
        );
    }

}

export default Main;