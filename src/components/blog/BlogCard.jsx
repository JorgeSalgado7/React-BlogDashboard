import React, { useState } from 'react';


const BlogCard = () => {

    const [abrirCaja,setAbrirCaja] = useState(false);
   
    const CAJA_HERRAMIENTAS = () => {
  
        return(
            <div className="tool-box">
                <button className="btn-tool-box">
                    <i className="pi pi-pencil"> </i>
                    Editar
                </button>
              
                <button className="btn-tool-box text-delete">
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
             
                <button onClick={()=> setAbrirCaja(!abrirCaja)} className= "Ellipse">
                    <i className="pi pi-ellipsis-v"></i>
                </button>          
                 
            {abrirCaja ? <CAJA_HERRAMIENTAS/> : false }

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