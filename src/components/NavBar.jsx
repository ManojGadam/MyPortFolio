import { Link, useResolvedPath,useMatch } from "react-router-dom"


export const NavBar=(props) =>{
    return(
        <nav className="nav">
            <Link to="/MyPortFolio" className="siteHead">GM</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/experience">Experience</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact Me</CustomLink>    
                <li>
                <Link  to='https://drive.google.com/file/d/1v6V8q-YhbcZ9OQwfOC_KFUq_38EtTsC9/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='linkNoStyle'
                >
                    Resume
                </Link>
                </li>

            </ul>
        </nav>
    )
}
const CustomLink=({to,children,...props})=>{
    const res = useResolvedPath(to)
    const isActive = useMatch({path:res.pathname,end:true})
    console.log(res,isActive)
    return <li className={isActive?"active":""}>
        <Link to={to}{...props} className="customLink">
            {children}
        </Link>
    </li>
}
