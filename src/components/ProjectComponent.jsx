import {ProjectCard} from "./ProjectCard"
export const ProjectComponent = (props) =>{
    const projectData = [
        {title:"Traveling Salesman Problem Solver using Reinforcement Learning",description:"Evaluated and benchmarked the performance and accuracy of the RL-based TSP solver against traditional heuristic and metaheuristic algorithms, showcasing its efficiency in finding near-optimal solutions.",technologiesUsed:["Python","Jupyter Notebook"],link:null},
        {title:"Advanced Linux Shell",description:"Developed a Linux shell with features like command execution, pipelines, process creation, input-output redirection, and background process support",technologiesUsed:["C","VScode","Linux","Git"],link:"https://github.com/ManojGadam/CustomShell"},
        {title:"Personal Website",description:"My portfolio website, showcasing my diverse projects, skills, and passion for technology.",technologiesUsed:["React", "VScode", "Git","CSS"],link:null},{title:"Hybrid Metaheuristic Optimization for Cloud Task Scheduling",description:"Developed a hybrid metaheuristic algorithm, combining genetic and kestrels algorithms, to optimize task scheduling in cloud computing environments",technologiesUsed:["Matlab"],link:null},
        {title:"WeatherTrackr",description:"WeatherTrackr is a comprehensive weather tracking website designed to provide up-to-date weather forecasts. Using the api from open-meteo.com, WeatherTrackr offers both daily and hourly weather forecasts, delivering accurate weather insights tailored to your location",technologiesUsed:["React","VScode","Javascript","CSS"],link:"https://github.com/ManojGadam/WeatherApp"},
        {title:"Multifaceted Motion Tracking",description:"Implemented an algorithm which adeptly detects and tracks hands, shoulders, and facial features in real-time video streams using Canny edge detection for precise shoulder identification, MediaPipe for intricate hand tracking, and the Viola-Jones algorithm for accurate facial detection.",technologiesUsed:["Python","VScode"],link:"https://github.com/ManojGadam/Face-Hands-ShoulderDetection"},
        {title:"Image Segmentation via K-means Clustering",description:"I conducted K-means clustering on images to precisely segment and detect skin regions.This project enabled me to evaluate computational challenges, explore image region segmentation using clustering methods, and develop alternative solutions for enhanced segmentation techniques.",technologiesUsed:["Matlab"],link:"https://github.com/ManojGadam/Biometrics-Assignment---3"}
    ]
    return <div className="project">
            <p className="title">Some things I've built</p>
            <div className="projectContainer">
                {
                    projectData.map((ele,ind)=>
                        <ProjectCard 
                            key={ind}
                            title={ele.title}
                            description={ele.description}
                            technologiesUsed={ele.technologiesUsed}
                            link={ele.link}
                        />
                    )
                }
            </div>
        </div>
}