import { Button } from "../../components/buttons/Button"
import imageCartoon from "../../assets/avatar.jpg"
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
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['Desarrolladora Front-End', 'Hola Mundo!'],
                                autoStart: true,
                                loop: true,
                                cursorClassName: 'Typewriter__cursor',
                            }}
                        />
                    </h1>

                    <h1> &lt; name: Tamara Salinas &gt; </h1>
                    <Button />
                </div>
            </main>
        </div>
    )
}
