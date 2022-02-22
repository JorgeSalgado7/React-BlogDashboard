import React, { useState } from 'react';

const BlogCard = () => {
    
    const [caja,setCaja] = useState(false);
   
    const Caja_Herramientas = () => {
  
        return(
            <div className="box">
               <button className="e">
                   <i className="pi pi-pencil"> </i>
                       Editar
                </button>
              
               <button className="r">
                   <i className="pi pi-trash"> </i>
                      Eliminar
               </button>
           
                </div>
        
        )
    }

    return(
        <div className ="blog-card">
            
           <div className="imgBx">
             <img src="" alt=""/>
             

                 <div className= "Ellipse">
                         <button onClick={()=> setCaja(!caja)} className="pi pi-ellipsis-v">
                         </button> 
                         
                 </div>
                 
                 {caja && <Caja_Herramientas />}

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