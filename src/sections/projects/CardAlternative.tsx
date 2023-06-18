import MemoryCat from "../../assets/3.png"
import catBakc from "../../assets/1.png"
import caricature from "../../assets/2.png"
import credit from "../../assets/5.png"
import pokes from "../../assets/4.png"
import "./CardAlternative.css"
import { HTMLLogo } from "../../icons/HTMLLogo"
import { CSSLogo } from "../../icons/CSSLogo"
import { JSLogo } from "../../icons/JSLogo"
import { REACTLogo } from "../../icons/REACTLogo"
import { TypeSLogo } from "../../icons/TypeSLogo"
import { GitLogo } from "../../icons/GitLogo"
import { GitHubLogo } from "../../icons/GitHubLogo"
import { Button } from "../../components/buttons/Button"
import { LogoNavigation } from "./LogoNavigation"


export const CardAlternative = () => {
    return (
        <div className="project">
            <div className="container-card">
                <div className="card">
                    <div className="poster">
                        <img className="card-img" src={MemoryCat} alt="memorycat" />
                    </div>
                    <div className="details">
                        <h2> &lt; Memory Match &gt;</h2>
                        <p>Juego web Memory Match: cartas, parejas, animaciones y diversión</p>
                        <div className="logos-project">
                            <HTMLLogo size={24} color="#DBDDDF" />
                            <CSSLogo size={24} color="#DBDDDF" />
                            <JSLogo size={24} color="#DBDDDF" />
                            <REACTLogo size={24} color="#DBDDDF" />
                            <TypeSLogo size={24} color="#DBDDDF" />
                            <GitLogo size={24} color="#DBDDDF" />
                            <GitHubLogo size={24} color="#DBDDDF" />
                        </div>
                        <div className="buttons-view">
                            <Button
                                text="Ver"
                                icon={<LogoNavigation size={24} color="#fff" />}
                                href="https://gatamara.github.io/memorycat/"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                                classname='button'
                            />
                            <Button
                                text="Repositorio"
                                icon={<GitHubLogo size={24} color="#fff" />}
                                href="https://github.com/gatamara/memorycat"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                            />
                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="poster">
                        <img className="card-img" src={pokes} alt="memorycat" />
                    </div>
                    <div className="details">
                        <h2> &lt; Credit Card &gt;</h2>
                        <p>Validador de numero de tarjeta de credito</p>
                        <div className="logos-project">
                            <HTMLLogo size={24} color="#DBDDDF" />
                            <CSSLogo size={24} color="#DBDDDF" />
                            <JSLogo size={24} color="#DBDDDF" />
                            <REACTLogo size={24} color="#DBDDDF" />
                            <TypeSLogo size={24} color="#DBDDDF" />
                            <GitLogo size={24} color="#DBDDDF" />
                            <GitHubLogo size={24} color="#DBDDDF" />
                        </div>
                        <div className="buttons-view">
                            <Button
                                text="Ver"
                                icon={<LogoNavigation size={24} color="#fff" />}
                                href="https://gatamara.github.io/credit-card-validator/"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                                classname='button'
                            />
                            <Button
                                text="Repositorio"
                                icon={<GitHubLogo size={24} color="#fff" />}
                                href="https://github.com/gatamara/credit-card-validator"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                            />
                        </div>
                    </div>

                </div>

                <div className="card">
                    <div className="poster">
                        <img className="card-img" src={credit} alt="memorycat" />
                    </div>
                    <div className="details">
                        <h2> &lt; Pokedex &gt;</h2>
                        <p>JInterfaz Pokémon: información detallada y lista interactiva</p>
                        <div className="logos-project">
                            <HTMLLogo size={24} color="#DBDDDF" />
                            <CSSLogo size={24} color="#DBDDDF" />
                            <JSLogo size={24} color="#DBDDDF" />
                            <REACTLogo size={24} color="#DBDDDF" />
                            <TypeSLogo size={24} color="#DBDDDF" />
                            <GitLogo size={24} color="#DBDDDF" />
                            <GitHubLogo size={24} color="#DBDDDF" />
                        </div>
                        <div className="buttons-view">
                            <Button
                                text="Ver"
                                icon={<LogoNavigation size={24} color="#fff" />}
                                href="https://gatamara.github.io/pokedex-react/"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                                classname='button'
                            />
                            <Button
                                text="Repositorio"
                                icon={<GitHubLogo size={24} color="#fff" />}
                                href="https://github.com/gatamara/pokedex-react"
                                backgroundColor="#ff5586"
                                color="#fff"
                                borderColor="#ff5586"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </div >

    )
}
