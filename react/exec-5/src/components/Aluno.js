import { Component } from "react"

export default class Aluno extends Component {
    constructor(props) {
        super(props);
        this.nome = 'NOME';
        this.curso = 'CURSO';
        this.turma = 'TURMA';
        this.rm = 99999;
    }

    render() {
        return (
            <div>
                <h2>Aluno</h2>
                <p>Nome: {this.nome}</p>
                <p>Curso: {this.curso}</p>
                <p>Turma: {this.turma}</p>
                <p>RM: {this.rm}</p>
            </div>
        )
    }
}