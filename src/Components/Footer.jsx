import React from "react";
import {RiUserFollowLine } from "react-icons/ri";
import { AiOutlineMail} from "react-icons/ai";
import { AiOutlineUserAdd} from "react-icons/ai";
function Footer() {
    return(<>
   
        <footer className="mainFooter">
     <section className="footer">
 
            <RiUserFollowLine size={60}/>
       
            <h4>SUBSCRIBE</h4>  
            <h4>Vechicle</h4>  
       
    
     
      
        <input type="text"/>
           <p>Subscriber</p>
         
    </section>
    <section className="footer2">
      
        <AiOutlineUserAdd size={60}/>
  
        
            <h4>FOLLOW US</h4>  
            <h4>ON SOCIAL MEDIA</h4>  
       
        <p>Lorem ipsum dolor sit<br/> amet consecteturadipisicing elit. Laborum.</p>
     
         </section>
        
         <section className="footer3">
     
        <AiOutlineMail size={60}/>
    
    
            <h4>EMAIL</h4>  
            <h4>CONTACT US</h4>  
      
          <p>
            <span>Email: </span>
            huzainadeem621@gmail.com
          </p>
          <p>
            <span>Tel: </span>
            03102531799
          </p>
          <p>
            <span>Address: </span>
            pakistan karachi
          </p>
        
     
        

  
         </section>

</footer>
</>
        
    )
}
export default Footer;