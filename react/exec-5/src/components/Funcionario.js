import { Component } from "react";

export default class Funcionario extends Component {
    constructor(props) {
        super(props);
        this.nome = 'João'
    }

    state={
        cargo: 'Auxiliar',
        turno: 'noite',
        adicional: 0
    }

    mudarTurno() {
        this.setState(
            (state) => (
                {turno:(this.state.turno === 'noite' ? 'manhã' : 'noite')}
            )
        )
    }

    adicional() {
        this.setState((state, props) =>(
            {adicional: state.adicional + props.add}
        ))
    }

    render() {
        return (
            <div>
                <h2>Funcionário</h2>
                <p>Nome: {this.nome}</p>
                <p>Cargo: {this.state.cargo}</p>
                <p>Turno: {this.state.turno}</p>
                <p>Adicional: {this.state.adicional}</p>
                <button onClick={() => this.mudarTurno()}>Alterar turno</button>
                <button onClick={() => this.adicional()}>Adicional</button>
            </div>
        )
    }
}