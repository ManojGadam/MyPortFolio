import { useState } from "react"
export const ExperienceComponent=(props)=>{
    const jobDetails = {
        "mac":{
            company:"Mathematics Assistance Center(MAC)",
            title:"Math Tutor",
            time:"July 2023 - December 2023",
            description:["Tutoring students in finite mathematics, covering topics such as set theory, probability, statistics, and Markov chains","Teaching tailored strategies to address the student learning needs, improving student understanding and performance"]
        },
        "comp":{
            company:"IUPUI Department of Computer Science",
            title:"Research Assistant",
            time:"May 2023 - December 2023",
            description:["Working on a research project focused on applying Reinforcement Learning (RL) techniques to solve the NP-hard optimization problem of Minimum Vertex Cover","Executed the migration of several legacy code modules to the RayRL framework, emphasizing compatibility, and optimization","Conducted rigorous testing and validation to guarantee the correctness and efficiency of the conversion"]
        },
        "cong":{
            company:"Congruent Solutions Private Limited",
            title:"Software Engineer - Full Stack Developer",
            time:"July 2020 - December 2022",
            description:["Developed and maintained a full-stack web application for retirement information record keeping, utilizing C#, React, JavaScript, and SQL technologies","Created RESTful web APIs to facilitate client-server communication over the HTTP protocol and developed the application’s user interface","Led development of two modules: a user-friendly email customization module enhancing user engagement and communication, and schedulers for timely user alerts, improving the application’s functionality and user experience","Designed and implemented a versatile tool for generating and storing images from HTML sources, optimizing content presentation and management","Resolved over 100 bugs and implemented code refactoring improving the performance and reducing the redundancy"]
        }
    }
    let [curr,setCurr] = useState("mac")
    const initOption = {1:"",2:"",3:""}
    let [option,setOption] = useState({...initOption,1:"active"})
    return  <div>
    <div className="experience">
        <p className="title">Where I've Worked</p>
        <div className="listing">
        <ul>
            <li onClick={()=>{setCurr("mac")
            setOption({...initOption,1:"active"})}}
            className={option[1]}
            ><a href="#">MAC</a></li>
            <li onClick={()=>{setCurr("comp")
            setOption({...initOption,2:"active"})}}
            className={option[2]}><a href="#">Department of Computer Science</a></li>
            <li onClick={()=>{setCurr("cong")
        setOption({...initOption,3:"active"})}}
        className={option[3]}><a href="#">Congruent Solutions</a></li>
        </ul>
            {Detail(jobDetails[curr])}
        </div>
    </div>
    </div>
}

const Detail=(props)=>{
    return <div className="jobDetail">
        <p><span className="headingColor">{props.title}</span> @ <span>{props.company}</span></p>
        <p>{props.time}</p>
        <ul>
        {props.description.map(element=>
            <li>{element}</li>
        )}
        </ul>
    </div>
}