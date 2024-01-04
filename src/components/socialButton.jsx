import { Link } from "react-router-dom"

export const SocialButton = (props) =>{
    return(
          <Link
         to={props.destinationLink} target='_blank' rel='noopener noreferrer' className="socialLink"
          >
            <props.imageComponent 
            />
          </Link>
    )
}