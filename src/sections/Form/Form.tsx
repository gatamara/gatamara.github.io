import { LogoLinkedin } from "./LogoLinkedin"
import "./Form.css"
import { useState } from "react";
import { GmailLogo } from "../../icons/GmailLogo";
import { GitHubLogo } from "../../icons/GitHubLogo";
import { Button } from "../../components/buttons/Button";


export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {

        e.preventDefault();
      
        console.log('Formulario enviado');
    };

    return (
        <div id="contact" className="container-form">
            <div className="opacity">
                <h1> </h1>
                {/* <form onSubmit={handleSubmit} className="form" >

                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />


                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />

                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escriba su mensaje aqui"
                    ></textarea>
                    <Button text="Enviar"
                        backgroundColor="#ff5586"
                        color="#fff"
                        borderColor="#ff5586" />
                </form> */}
                <h1 className="p-4 md:p-8 font-semibold bg-gradient-to-r from-violet-50 to-pink-500 bg-clip-text text-transparent uppercase">Contáctame en mis Redes Sociales</h1>
                <div className="social-network ">
                    <a href="https://www.linkedin.com/in/gatamara/" className="social-network" >
                        <LogoLinkedin size={50} color="#ff5586" />
                    </a>
                    <a href="mailto:dev.tamara29@gmail.com">
                        <GmailLogo size={50} color="#ff5586" />
                    </a>
                    <a href="https://github.com/gatamara" >
                        <GitHubLogo size={50} color="#ff5586" />
                    </a>
                </div>
            </div>
        </div>
    )
}
