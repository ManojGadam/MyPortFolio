import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FiGithub } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";
export const ProjectCard = (props) =>{
    return <div className="projectCard">
        <Link to={props.link}>
        <div className="f1">
            <FaRegFolder className="folderIcon secondColor" />
            {props.link&&(<FiGithub className="folderIcon" />)}
        </div>
        <h2 className="cardTitle">{props.title}</h2>
        <p className="description">{props.description}</p>
        <div className="technologiesUsed">
            {props.technologiesUsed.map((ele)=>
            <p>{ele}</p>
            )}
        </div>
        </Link>
    </div>
}