import "./styles.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <span className="footer-text">© 2025 Juan Yañez.</span>
                <div className="footer-links">
                    <a
                        href="https://github.com/Panconhu3vo"
                        target="_blank"
                        aria-label="Perfil de GitHub"
                        className="footer-icon">
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/juanyañezaravena"
                        target="_blank"
                        aria-label="Perfil de LinkedIn"
                        className="footer-icon">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
}
