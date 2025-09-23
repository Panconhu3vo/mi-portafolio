import "./styles.css";
import CardProject from "./CardProject";
import diccionario from "../../assets/images/DiccionarioDelProgramador.jpeg";

export default function Projects() {
    const projects = [
        {
            title: "Pondera PAES",
            description:
                "App móvil para calcular puntajes ponderados y explorar carreras universitarias.",
            contribution:
                "Lideré el desarrollo completo, creando una arquitectura modular con componentes reutilizables, asegurando precisión con datos oficiales del DEMRE y diseñando la interfaz y documentación del proyecto.",
            technologies: ["javascript", "react", "python", "figma", "git"],
            link: "#",
        },
        {
            title: "E-commerce React",
            description: "Un proyecto de tienda online usando React y Redux.",
            contribution:
                "Diseño de la interfaz de usuario y manejo del estado global.",
            technologies: ["html", "css", "javascript"],
            link: "#",
        },
    ];
    return (
        <section className="projects">
            <CardProject project={projects[0]} images={diccionario} />
        </section>
    );
}
