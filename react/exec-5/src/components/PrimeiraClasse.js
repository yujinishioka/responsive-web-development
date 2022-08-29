import { Component } from "react";

class PrimeiraClasse extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Primeira Classe</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}

export default PrimeiraClasse;