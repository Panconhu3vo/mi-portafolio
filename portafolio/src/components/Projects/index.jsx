import "./styles.css";
import CardProject from "./CardProject";
import diccionario from "../../assets/images/DiccionarioDelProgramador.jpeg";
import ponderapaes from "../../assets/images/PonderaPAES.svg";
import Line from "../Line";

export default function Projects() {
    const projects = [
        {
            title: "Pondera PAES",
            description:
                "App móvil para calcular puntajes ponderados y explorar carreras universitarias.",
            contribution:
                "Lideré el desarrollo completo, creando una arquitectura modular con componentes reutilizables, asegurando precisión con datos oficiales del DEMRE y diseñando la interfaz y documentación del proyecto.",
            technologies: ["javascript", "react", "python", "figma", "git"],
            link: "https://github.com/Panconhu3vo/Pondera-PAES",
        },
        {
            title: "Diccionario del Programador",
            description:
                "Aplicación que permite buscar y consultar términos relacionados con programación de forma rápida y ordenada.",
            contribution:
                "Lideré el proyecto, diseñé la interfaz en Figma, desarrollé la funcionalidad de búsqueda e integré la base de datos.",
            technologies: ["python", "figma"],
            link: "https://github.com/Panconhu3vo/Ejercicio-Integrado",
        },
    ];
    return (
        <section className="projects">
            <Line text={"Proyectos"} />
            <CardProject project={projects[0]} images={ponderapaes} />
            <CardProject project={projects[1]} images={diccionario} />
        </section>
    );
}
