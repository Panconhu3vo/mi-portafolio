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
                <img className="img-tech" src={reactsvg} alt="React" />
                <img className="img-tech" src={figmasvg} alt="Figma" />
                <img className="img-tech" src={gitSvg} alt="Git" />
                <img className="img-tech" src={javaSvg} alt="Java" />
                <img className="img-tech" src={jssvg} alt="JavaScript" />
                <img
                    className="img-tech"
                    src={typescriptsvg}
                    alt="TypeScript"
                />
                <img className="img-tech" src={nodeSvg} alt="Node.js" />
                <img className="img-tech" src={pythonsvg} alt="Python" />
                <img className="img-tech" src={sqlsvg} alt="sql" />
            </div>
        </section>
    );
}
