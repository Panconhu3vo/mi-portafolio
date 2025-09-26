import Line from "../Line/";
import avatar from "../../assets/images/Logo-JY500x500.webp";
import "./styles.css";

export default function AboutMe() {
    return (
        <section id="AboutMe">
            <Line text={"Sobre mí"} />
            <div className="about-me">
                <div className="info-about-me">
                    <p className="p-about-me">
                        Soy Juan Ignacio Yañez, estudiante de la especialidad de{" "}
                        <span className="span-about-me">Programación</span>, con
                        un fuerte enfoque en el desarrollo de software.
                    </p>

                    <p className="p-about-me">
                        Mis habilidades incluyen el desarrollo de{" "}
                        <span className="span-about-me">
                            aplicaciones móviles multiplataforma
                        </span>{" "}
                        con <span className="span-about-me"></span>React Native,{" "}
                        <span className="span-about-me">JavaScript</span> y{" "}
                        <span className="span-about-me">TypeScript</span>, y el
                        diseño de bases de datos relacionales con{" "}
                        <span className="span-about-me">SQL</span>. He aplicado
                        estas tecnologías en proyectos personales, lo que me ha
                        permitido generar soluciones completas y funcionales.
                    </p>

                    <p className="p-about-me">
                        Más allá del código, mi experiencia en el{" "}
                        <span className="span-about-me">
                            liderazgo de equipos
                        </span>{" "}
                        me ha enseñado a gestionar proyectos y colaborar de
                        manera efectiva para alcanzar metas comunes.
                    </p>
                </div>
                <img src={avatar} className="img-about-me" />
            </div>
        </section>
    );
}
