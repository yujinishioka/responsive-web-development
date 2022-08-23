import './conteudo.css'

const Conteudo = () => {
    return (
        <div>
            <h2>Subtitulo</h2>
            <section>
                <img width={'100px'} height={'100px'} className="imagem-1" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="logo-js"/>
                <div>
                    <p>1 - paragrafo</p>
                    <p>2 - paragrafo</p>
                    <p>3 - paragrafo</p>
                    <p>4 - paragrafo</p>
                </div>
            </section>
        </div>
    )
}

export default Conteudo;