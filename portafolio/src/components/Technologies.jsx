import Line from "./Line";
import gitSvg from "../assets/icons/git-svgrepo-com.svg";
import javaSvg from "../assets/icons/java-svgrepo-com.svg";
import nodeSvg from "../assets/icons/node-svgrepo-com.svg";
import reactsvg from "../assets/icons/react-svgrepo-com.svg";
import figmasvg from "../assets/icons/figma-svgrepo-com.svg";
import jssvg from "../assets/icons/javascript-logo-svgrepo-com.svg";
import pythonsvg from "../assets/icons/python-svgrepo-com.svg";
import typescriptsvg from "../assets/icons/typescript-icon-svgrepo-com.svg";
import sqlsvg from "../assets/icons/sql-database-generic-svgrepo-com.svg";

export default function Technologies() {
    return (
        <section className="technologies">
            <Line text={"Tecnologías"} />
            <div className="tech">
                <div className="tech-container">
                    <img className="img-tech" src={reactsvg} alt="React" />
                </div>
                <div className="tech-container">
                    <img className="img-tech" src={figmasvg} alt="Figma" />
                </div>
                <div className="tech-container">
                    <img className="img-tech" src={gitSvg} alt="Git" />
                </div>

                <div className="tech-container">
                    <img className="img-tech" src={javaSvg} alt="Java" />
                </div>

                <div className="tech-container">
                    <img className="img-tech" src={jssvg} alt="JavaScript" />
                </div>

                <div className="tech-container">
                    <img
                        className="img-tech"
                        src={typescriptsvg}
                        alt="TypeScript"
                    />
                </div>
                <div className="tech-container">
                    <img className="img-tech" src={nodeSvg} alt="Node.js" />
                </div>
                <div className="tech-container">
                    <img className="img-tech" src={pythonsvg} alt="Python" />
                </div>
                <div className="tech-container">
                    <img className="img-tech" src={sqlsvg} alt="sql" />
                </div>
            </div>
        </section>
    );
}
