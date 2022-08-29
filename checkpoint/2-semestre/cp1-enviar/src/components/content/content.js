import '../../css/App.css'
import './content.css'
import Phantom from '../../img/02.png'
import Mavic from '../../img/03.png'
import Inspire from '../../img/04.png'
import Audio from '../../media/audio/GuardioesGalaxia.mp3'
import Video from '../../media/video/BabyGrootDançando.mp4'
import Poster from '../../img/groot.png'

const Content = () => {
    return (
        <div>
            <section className="conteudo-site">
                <div className="container">
                    <h1 className="text-center">
                        Melhores Drones
                    </h1>
                    <p className="text-center lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error accusantium laborum, hic nisi soluta quasi veritatis quod quam, architecto voluptatibus quibusdam quisquam consequuntur eum doloribus impedit aperiam nobis libero!
                    </p>
                    <div class="box">
                        <div class="thumbnail">
                            <img src={Phantom} alt=""/>
                            <div class="text-center">
                                <h3>Phantom</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum!</p>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="thumbnail">
                            <img src={Mavic} alt=""/>
                            <div class="text-center">
                                <h3>Mavic</h3>
                                <p>Corporis quas obcaecati quia provident accusantium officiis eaque repudiandae error.</p>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="thumbnail">
                            <img src={Inspire} alt=""/>
                            <div class="text-center">
                                <h3>Inspire</h3>
                                <p>Expedita aut dignissimos obcaecati animi recusandae! Dicta eaque ipsa asperiores!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="img-site">
                <div class="container">
                    <h1 class="text-center">
                        Nossas Lojas
                    </h1>
                    <p class="text-center lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officiis placeat natus consequatur reiciendis soluta nihil itaque corporis repudiandae laudantium dolore. Minima provident cum pariatur, consectetur facere quae aspernatur nobis porro?
                    </p>

                    <div class="media">
                        <div class="box ladoA">
                            <audio controls>
                                <source src={Audio}/>
                                <p>este seu navegador não suporta está mídia</p>
                            </audio>
                        </div>

                        <div class="box ladoB">
                            <video controls poster={Poster}>
                                <source src={Video}/>
                                <p>este seu navegador não suporta está mídia</p>
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content;