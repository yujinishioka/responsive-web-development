import imagem from '../img/tesla.jpg';
import '../css/global.css';
import '../css/carros.css';

const Carros = () => {
    return (
        <div>
            <div className="img-1 centered">
                <a href="#"><img src={imagem} alt="Tesla" /></a>
            </div>
            <div>
                <h2>Marcas de Carros</h2> 
            </div>
            <div>
                <section className='centered'>
                    <ul>
                        <li><a href="">Toyota</a></li>
                        <li><a href="">Volkswagem</a></li>
                        <li><a href="">Hyundai</a></li>
                        <li><a href="">Ford</a></li>
                        <li><a href="">Honda</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Carros;