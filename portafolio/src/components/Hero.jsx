import "../App.css";
import avatar from "../assets/images/Logo-JY500x500.png";
import github from "../assets/icons/github-mark-white.svg";
import linledin from "../assets/icons/linkedin-svgrepo-com.svg";
export default function Hero() {
    return (
        <section className="hero">
            <div className="avatar">
                <img className="img-avatar" src={avatar} width={120} />
                <div>
                    <p className="p-name">Juan Ignacio Yañez</p>
                    <p className="p-title">Desarrollador Movíl</p>
                </div>
            </div>
            <p className="p-description">
                <span className="span-description">
                    Estudiante de Programación{" "}
                </span>
                proactivo y apasionado. Experiencia en el desarrollo de
                aplicaciones móviles multiplataforma con{" "}
                <span className="span-description">React Native</span>. Con un
                fuerte carisma y la capacidad de liderar proyectos.
            </p>
            <div className="hero-ancors">
                <a
                    href="/docs/CV-Juan Yañez.docx.pdf"
                    download
                    className="btn-download">
                    Descargar CV
                </a>
                <a href="https://github.com/Panconhu3vo" target="_balnk">
                    <img src={github} className="img-icon" />
                </a>
                <a href="www.linkedin.com/in/juanyañezaravena" target="_balnk">
                    <img src={linledin} className="img-icon" />
                </a>
            </div>
        </section>
    );
}
