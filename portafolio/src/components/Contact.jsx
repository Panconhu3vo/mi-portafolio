import { useState } from "react";
import Line from "./Line";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "juan.yan3z06@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section id="Contact" className="contact-section">
            <Line text={"Contacto"} />
            <div className="contact-content">
                <span className="contact-email">{email}</span>
                <button className="copy-btn" onClick={handleCopy}>
                    {copied ? "¡Copiado!" : "Copiar correo"}
                </button>
            </div>
        </section>
    );
}
