import MemoryCat from "../../assets/3.png";
import credit from "../../assets/5.png";
import pokes from "../../assets/4.png";
import formik from "../../assets/6.png";
import gifs from "../../assets/git-app.png";
// import shop from "../../assets/shop.png";
import expense from "../../assets/7.png";
import patina from "../../assets/8.png";
import publicate from "../../assets/publicateer.png";
import "./CardAlternative.css";
import { GitHubLogo } from "../../icons/GitHubLogo";
import { Button } from "../../components/buttons/Button";
import { LogosCard } from "./LogosCard";

export const CardReact = () => {
  return (
    <div className="project">
      <h1 className="p-8 font-semibold bg-gradient-to-r from-violet-50 to-sky-600 bg-clip-text text-transparent uppercase">
        {" "}
        Proyectos React
      </h1>
      <div className="container-card">
        <a href="https://publicate.cl" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={publicate} alt="formulario" />
            </div>
            <div className="details">
              <h2> &lt; Publicate.cl &gt;</h2>
              <p>Pagina creada para agencia de Marketing Digital</p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a>
        <a href="https://gatamara.github.io/memorycat/" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={MemoryCat} alt="memorycat" />
            </div>
            <div className="details">
              <h2> &lt; Memory Match &gt;</h2>
              <p>
                Juego web Memory Match: cartas, parejas, animaciones y diversión
              </p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
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
        </a>
        <a
          href="https://gatamara.github.io/credit-card-validator/"
          target="_blank"
        >
          <div className="card">
            <div className="poster">
              <img className="card-img" src={pokes} alt="memorycat" />
            </div>
            <div className="details">
              <h2> &lt; Credit Card &gt;</h2>
              <p>Validador de numero de tarjeta de credito</p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
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
        </a>
        <a href="https://gatamara.github.io/expense-tracker/" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={expense} alt="expense-tracker" />
            </div>
            <div className="details">
              <h2> &lt; Registro de gastos &gt;</h2>
              <p>
                {" "}
                Aplicación web de registro de gastos, agregar ingresos y gastos
                para obtener balance
              </p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/expense-tracker"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a>
        <a href="https://gatamara.github.io/pokedex-react/" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={credit} alt="memorycat" />
            </div>
            <div className="details">
              <h2> &lt; Pokedex &gt;</h2>
              <p>Interfaz Pokémon: información detallada y lista interactiva</p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
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
        </a>
        <a href="https://gatamara.github.io/form-formik/" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={formik} alt="formulario" />
            </div>
            <div className="details">
              <h2> &lt; Formik &gt;</h2>
              <p>Formulario tipo creado con libreria Formik</p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/form-formik"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a>
        <a href="https://gatamara.github.io/gif-app" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={gifs} alt="buscador-gif" />
            </div>
            <div className="details">
              <h2> &lt; GIF App &gt;</h2>
              <p>Buscador de GIFs </p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/gif-app"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a>
        {/* <a href="https://gatamara.github.io/carrito-compras/" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={shop} alt="formulario" />
            </div>
            <div className="details">
              <h2> &lt; Carrito de Compras &gt;</h2>
              <p>
                Carrito de compras utilizando Api y estado global con useContext
              </p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/carrito-compras"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a> */}
        <a href="https://patina.cl" target="_blank">
          <div className="card">
            <div className="poster">
              <img className="card-img" src={patina} alt="formulario" />
            </div>
            <div className="details">
              <h2> &lt; Patina.cl &gt;</h2>
              <p>Pagina para agregar spots, eventos y clases de skate</p>
              <div className="logos-project">
                <LogosCard />
              </div>
              <div className="buttons-view">
                <Button
                  text="Repositorio"
                  icon={<GitHubLogo size={24} color="#fff" />}
                  href="https://github.com/gatamara/"
                  backgroundColor="#ff5586"
                  color="#fff"
                  borderColor="#ff5586"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
