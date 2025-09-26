import React from "react";
import "./styles.css";
import avatar from "../../assets/images/Logo-JY500x500.webp";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="hero">
            <div className="avatar">
                <img
                    className="img-avatar"
                    src={avatar}
                    width={120}
                    alt="Avatar de Juan Yañez"
                />
                <div>
                    <p className="p-name">Juan Ignacio Yañez</p>
                    <p className="p-title">Desarrollador Movil</p>
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
                    <FaFileDownload />
                </a>
                <a
                    href="https://github.com/Panconhu3vo"
                    target="_blank"
                    aria-label="Perfil de GitHub"
                    className="icon">
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/juanyañezaravena"
                    target="_blank"
                    aria-label="Perfil de LinkedIn"
                    className="icon">
                    <FaLinkedinIn />
                </a>
            </div>
        </section>
    );
}
