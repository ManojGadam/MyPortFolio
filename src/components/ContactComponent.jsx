import React,{useEffect} from 'react'
export const ContactComponent = (props) =>{
    useEffect(()=>{
        const form = document.querySelector('.contact-form');
        if(form){
            form.reset()
        }
    },[])

    return   <div className="contact">
   <h1 className="secondColor">Want to get in Touch?</h1>     
  <form className="form contact-form"
    action="https://formspree.io/f/xeqyqlvz"
    method="POST"
   // onSubmit={handleSubmit}
  >
    <div className="from-row">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
    </div>  
    <div className="from-row">
        <label htmlFor="email">Your Email</label>
        <input type="text" name="email" id="email" />
    </div>  
    <div className="from-row">
        <label htmlFor="message">message</label>
        <textarea name="message" id="message" />   
    </div>
    <button type="submit" className="btn block">submit</button>
</form>

    </div>                 
   
}