import pokedex from "../../assets/pokedex.png"
import MemoryCat from "../../assets/memoryCat.png"
import creditCard from "../../assets/tarjetaCredito.png"
import { LogoNavigation } from "./LogoNavigation"
import "./Projects.css"
import { HTMLLogo } from "../../icons/HTMLLogo"
import { CSSLogo } from "../../icons/CSSLogo"
import { JSLogo } from "../../icons/JSLogo"
import { REACTLogo } from "../../icons/REACTLogo"
import { TypeSLogo } from "../../icons/TypeSLogo"
import { GitLogo } from "../../icons/GitLogo"
import { GitHubLogo } from "../../icons/GitHubLogo"
import { Button } from "../../components/buttons/Button"


export const CardProject = () => {
    return (
        <>
            <div className="container-card">
                <img src={MemoryCat} alt="Proyecto Memory Mach " />
                <h2> &lt; Memory Match &gt;</h2>
                <p>Juego web Memory Match: cartas, parejas, animaciones y diversión</p>
                <div className="logos-project">
                    <HTMLLogo size={24} color="#fff" />
                    <CSSLogo size={24} color="#fff" />
                    <JSLogo size={24} color="#fff" />
                    <REACTLogo size={24} color="#fff" />
                    <TypeSLogo size={24} color="#fff" />
                    <GitLogo size={24} color="#fff" />
                    <GitHubLogo size={24} color="#fff" />
                </div>
                <div className="buttons-view">
                    <Button
                        text="Ver"
                        icon={<LogoNavigation size={24} color="#fff" />}
                        href="https://gatamara.github.io/memorycat/"
                    />
                    <Button
                        text="Repo GitHub"
                        icon={<GitHubLogo size={24} color="#fff" />}
                        href="https://github.com/gatamara/memorycat"
                    />
                </div>
            </div>
            <div className="container-card">
                <img className="image" src={pokedex} alt="Proyecto Pokedex" />
                <h2> &lt; Pokedex React  &gt;</h2>
                <p>Interfaz Pokémon: información detallada y lista interactiva</p>
                <div className="logos-project">
                    <HTMLLogo size={24} color="#fff" />
                    <CSSLogo size={24} color="#fff" />
                    <JSLogo size={24} color="#fff" />
                    <REACTLogo size={24} color="#fff" />
                    <TypeSLogo size={24} color="#fff" />
                    <GitLogo size={24} color="#fff" />
                    <GitHubLogo size={24} color="#fff" />
                </div>
                <div className="buttons-view">
                    <Button
                        text="Ver"
                        icon={<LogoNavigation size={24} color="#fff" />}
                        href="https://gatamara.github.io/pokedex-react/"
                    />
                    <Button
                        text="Repo GitHub"
                        icon={<GitHubLogo size={24} color="#fff" />}
                        href="https://github.com/gatamara/pokedex-react"
                    />
                </div>
            </div>
            <div className="container-card">
                <img src={creditCard} alt="Proyecto Pokedex" />
                <h2> &lt; Validador Credit Card  &gt;</h2>
                <p>Proyecto en React que permite validar el código de una tarjeta de crédito</p>
                <div className="logos-project">
                    <HTMLLogo size={24} color="#fff" />
                    <CSSLogo size={24} color="#fff" />
                    <JSLogo size={24} color="#fff" />
                    <REACTLogo size={24} color="#fff" />
                    <TypeSLogo size={24} color="#fff" />
                    <GitLogo size={24} color="#fff" />
                    <GitHubLogo size={24} color="#fff" />
                </div>
                <div className="buttons-view">
                    <Button
                        text="Ver"
                        icon={<LogoNavigation size={24} color="#fff" />}
                        href="https://gatamara.github.io/credit-card-validator/"
                    />
                    <Button
                        text="Repo GitHub"
                        icon={<GitHubLogo size={24} color="#fff" />}
                        href="https://github.com/gatamara/credit-card-validator"
                    />
                </div>
            </div>
        </>
    )
}
