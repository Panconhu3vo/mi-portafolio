import githubsvg from "../assets/icons/github-mark-white.svg";
import linkedinsvg from "../assets/icons/linkedin-svgrepo-com.svg";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <span className="footer-text">© 2025 Juan Yañez.</span>
                <div className="footer-links">
                    <a
                        href="https://github.com/Panconhu3vo"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={githubsvg}
                            alt="GitHub"
                            className="footer-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juan-ya%C3%B1ez-2b7b2b2a2/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={linkedinsvg}
                            alt="LinkedIn"
                            className="footer-icon"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
