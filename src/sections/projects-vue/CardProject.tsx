import Indecision from "../../assets/inde.png";
import { LogoNavigation } from "../projects-react/LogoNavigation";
import "../projects-react/CardAlternative.css";
import { HTMLLogo } from "../../icons/HTMLLogo";
import { CSSLogo } from "../../icons/CSSLogo";
import { JSLogo } from "../../icons/JSLogo";
import { TypeSLogo } from "../../icons/TypeSLogo";
import { GitLogo } from "../../icons/GitLogo";
import { GitHubLogo } from "../../icons/GitHubLogo";
import { Button } from "../../components/buttons/Button";
import { VueLogo } from "../../icons/VueLogo";

export const CardProject = () => {
  return (
    <div className="project">
      <h1 className="p-8 font-bold bg-gradient-to-r from-green-500 to-sky-600 bg-clip-text text-transparent uppercase">
        {" "}
        Proyectos Vue.js
      </h1>
      <div className="container-card">
        <div className="card">
          <div className="poster">
            <img className="card-img" src={Indecision} alt="memorycat" />
          </div>
          <div className="details">
            <h2> &lt; IndecisionApp &gt;</h2>
            <p>Aplicacion con Vue.js que simula un chat con consumo de Api</p>
            <div className="logos-project">
              <HTMLLogo size={24} color="#DBDDDF" />
              <CSSLogo size={24} color="#DBDDDF" />
              <JSLogo size={24} color="#DBDDDF" />
              <VueLogo size={24} color="#DBDDDF" />
              <TypeSLogo size={24} color="#DBDDDF" />
              <GitLogo size={24} color="#DBDDDF" />
              <GitHubLogo size={24} color="#DBDDDF" />
            </div>
            <div className="buttons-view">
              <Button
                text="Ver"
                icon={<LogoNavigation size={24} color="#fff" />}
                href="https://github.com/gatamara/indecisionApp"
                backgroundColor="#ff5586"
                color="#fff"
                borderColor="#ff5586"
                classname="button"
              />
              <Button
                text="Repositorio"
                icon={<GitHubLogo size={24} color="#fff" />}
                href="https://github.com/gatamara/indecisionApp"
                backgroundColor="#ff5586"
                color="#fff"
                borderColor="#ff5586"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
