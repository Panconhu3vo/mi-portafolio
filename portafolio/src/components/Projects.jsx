import "../App.css";
import diccionario from "../assets/images/DiccionarioDelProgramador.jpeg";
import paes from "../assets/images/IMG_7314-left.png";
import Line from "./Line";

import reactsvg from "../assets/icons/react-svgrepo-com.svg";
import python from "../assets/icons/python-svgrepo-com.svg";
import javascript from "../assets/icons/javascript-logo-svgrepo-com.svg";
import figma from "../assets/icons/figma-svgrepo-com.svg";

export default function Projects() {
    return (
        <section className="projects" id="Projects">
            <Line text={"Proyectos"} />

            <article className="card">
                <div className="card-info">
                    <p className="p-title">Pondera PAES</p>
                    <p className="p-description">
                        App móvil para calcular puntajes ponderados y explorar
                        carreras universitarias.
                    </p>
                    <div className="highlight">
                        Lideré el desarrollo completo, creando una arquitectura
                        modular con componentes reutilizables, asegurando
                        precisión con datos oficiales del DEMRE y diseñando la
                        interfaz y documentación del proyecto.
                    </div>
                    <p className="tech-title">Tecnologías</p>
                    <div className="project-technologies">
                        <img
                            className="img-technologies"
                            src={reactsvg}
                            alt="React"
                        />
                        <img
                            className="img-technologies"
                            src={python}
                            alt="Python"
                        />
                        <img
                            className="img-technologies"
                            src={javascript}
                            alt="JavaScript"
                        />
                        <img
                            className="img-technologies"
                            src={figma}
                            alt="Figma"
                        />
                    </div>
                    <a
                        href="https://github.com/Panconhu3vo/Pondera-PAES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-nav a-ver-mas">
                        Ver más →
                    </a>
                </div>
                <img
                    className="img-project"
                    src={paes}
                    alt="Vista previa del proyecto"
                    width={200}
                />
            </article>
            <article className="card">
                <div className="card-info">
                    <p className="p-title">Diccionario del Programador</p>
                    <p className="p-description">
                        Aplicación web que permite buscar y consultar términos
                        relacionados con programación de forma rápida y
                        ordenada.
                    </p>
                    <p className="highlight">
                        Lideré el proyecto, diseñé la interfaz en Figma,
                        desarrollé la funcionalidad de búsqueda e integré la
                        base de datos. También coordiné el trabajo en equipo y
                        documenté el flujo del proyecto.
                    </p>

                    <p className="tech-title">Tecnologías:</p>
                    <div className="project-technologiess">
                        <img className="img-technologies" src={python} />
                        <img
                            className="img-technologies"
                            src={figma}
                            alt="Figma"
                        />
                    </div>
                    <a
                        href="https://github.com/Panconhu3vo/Ejercicio-Integrado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-nav a-ver-mas">
                        Ver más →
                    </a>
                </div>

                <img className="img-project" src={diccionario} width={250} />
            </article>
        </section>
    );
}
