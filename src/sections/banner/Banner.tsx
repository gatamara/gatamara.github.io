import imageCartoon from '../../assets/2.png'
import "./Banner.css"
import Typewriter from 'typewriter-effect';
import { ButtonCV } from "../../components/buttons/ButtonCV";

export const Banner = () => {

    return (
        <>
            <div className='main-container'>
                <main className='opacity'>
                    <div className='banner-container'>
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
                        <h1 className="title"> &lt; name: <span className="span-name">Tamara Salinas</span>  &gt; </h1>
                        <p className="text-sm md:text-base p-8 md:p-4 w-96 text-white description">Desarrolladora frontend con experiencia en la creación de interfaces de usuario atractivas y funcionales. Poseo habilidades sólidas en HTML, CSS, JavaScript, TypeScript, ReactJS y Next.js, me gusta utilizar mi conocimiento para construir experiencias web de alta calidad. </p>
                        <div className='pt-4'>
                             <ButtonCV  text="Descargar CV" backgroundColor="#ff5586" borderColor="#ff5586" />
                        </div>
                       
                    </div>
                </main>
            </div>
        </>

    )
}
