import {SocialButton} from "./socialButton"
export const HomeComponent=(props)=>{
    return <div className='about'>
     <div>
     <p className="intro">Hi There! I'M</p>
     <h2>Manoj Gadamchetty </h2>
     <h3>A Developer specializing in crafting interactive web applications and utilising AI technologies to create immersive digital experiences.</h3>
     <div className='socialBox'>
     {
     props.socials.map((element,ind) => 
       <SocialButton
       key={ind}
       destinationLink = {element.destinationLink}
       imageComponent = {element.imageComponent}
      />
     )}
    </div>
     </div>
  </div>
}