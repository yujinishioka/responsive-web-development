import {useState} from 'react'

function Semaforo(props) {
    let cor = 'verde'
    let msg = 'Siga'

    function mudarCor(e) {
        if (cor === 'verde') {
            cor = 'amarelo';
            msg = 'Atenção';
        } else if (cor === 'amarelo') {
            cor = 'vermelho';
            msg = 'Pare';
        } else {
            cor = 'verde';
            msg = 'Siga';
        }
    }

    return (
        <div>
            <button onClick={mudarCor}>Semaforo</button>
            <div>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Semaforo;