import React from 'react'
import Introduction from '../Home/Introduction'
import "./About.css"


function About(){
    return(
        <>
         <div className='About'>
             <section style={{padding: '100px'}}>
                 <Introduction/>
             </section>
         </div>
        </>
    )
}
export default About;