import React, { useState } from 'react';

const Pulse = () => {
  
    return(
        <div className="blog-card">
           <button><e className='pi pi-pencil'> Editar</e></button>
           <br></br>
           <button><r className='pi pi-trash'> Eliminar</r></button>
        </div>
    
    )
}


const BlogCard = () => {
    
    const [pulse,setPulse] = useState(false);

    return(
        <div className ="box">
            
           <div className="imgBx">
             <img src="" alt=""/>
             

                 <div className= "Ellipse">
                         <button onClick={()=> setPulse(!pulse)} onClick={()=> setPulse(!pulse)} className="pi pi-ellipsis-v">
                         </button> 
                         
                 </div>
                 {pulse && <Pulse />}

           </div>
            
             <div className="content">
                <h1>Título</h1>
                <p>Autor:</p>
                <p>Fecha de publicacion:</p>
            </div>

        </div>
        
    )
}

export default BlogCard