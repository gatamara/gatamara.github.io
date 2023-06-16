import { Button } from "../../components/buttons/Button"
import imageCartoon from '../../assets/avatar-2.jpg'
import "./Banner.css"
import Typewriter from 'typewriter-effect';

export const Banner = () => {
    return (
        <div className='main-container'>
            <main className='main'>
                <div className='banner-text'>
                    <div className='photo-avatar'>
                        <img src={imageCartoon} alt="fotoYO" />
                    </div>
                    <h1 className="title">
                        <Typewriter
                            options={{
                                strings: ['Desarrolladora Front-End', 'Hola Mundo!'],
                                autoStart: true,
                                loop: true,
                                cursorClassName: 'Typewriter__cursor',
                            }}
                        />
                    </h1>
                    <h1 className="title"> &lt; name: Tamara Salinas &gt; </h1>
                    <p className="description">Desarrolladora junior frontend con experiencia en la creación de interfaces de usuario atractivas y funcionales. Poseo habilidades sólidas en HTML, CSS, JavaScript. TypeScript y ReactJS, y me gusta utilizar mi conocimiento para construir experiencias web de alta calidad. </p>
                    <Button text="Descargar CV" />
                </div>
            </main>
        </div>
    )
}
