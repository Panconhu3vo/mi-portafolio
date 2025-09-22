import { useState } from "react";
import Line from "./Line";
import copy from "../assets/icons/copy-2-svgrepo.svg";
import tick from "../assets/icons/tick-svgrepo-com.svg";
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
                <div className="mail-section">
                    <span className="contact-email">{email}</span>
                </div>
                <button className="copy-btn" onClick={handleCopy}>
                    {copied ? (
                        <img src={tick} width={25} className="copied-anim" />
                    ) : (
                        <img src={copy} width={25} />
                    )}
                </button>
            </div>
        </section>
    );
}
