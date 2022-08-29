import './semaforo.css'

function Semaforo() {

    let Props = {
        cor: 'verde',
        msg: 'siga',
        verde: true,
        amarelo: false,
        vermelho: false,
    }

    function mudarCor(Props) {
        if (Props.cor === 'verde') {
            Props.cor = 'amarelo';
            Props.msg = 'atenção';
            Props.verde = false
            Props.amarelo = true
        } else if (Props.cor === 'amarelo') {
            Props.cor = 'vermelho';
            Props.msg = 'pare';
            Props.amarelo = false
            Props.vermelho = true
        } else {
            Props.cor = 'verde';
            Props.msg = 'siga';
            Props.verde = true
            Props.vermelho = false
        }
    }

    return (
        <div className='container'>
            <div className='box'>
                <div className='left'>
                    <button className={`${Props.verde ? 'verde' : ''} ${Props.amarelo ? 'amarelo' : ''} ${Props.vermelho ? 'vermelho' : ''}`}  onClick={mudarCor(Props)}>Semaforo</button>
                </div>
                <div className='right'>
                    <p className='mensagem'>{Props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Semaforo;