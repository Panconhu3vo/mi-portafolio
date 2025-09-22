import "../App.css";

export default function Nav() {
    return (
        <nav>
            <a className="a-nav" href="#Projects">
                Proyectos
            </a>
            <a className="a-nav" href="#AboutMe">
                Sobre mí
            </a>
            <a className="a-nav" href="#Contact">
                Contacto
            </a>{" "}
            <a className="a-nav" href="/cv.pdf" download>
                Descargar CV
            </a>
        </nav>
    );
}
