import React, { useState } from 'react';


const BlogCard = () => {
    const [date, setDate] = useState('');
    const [titulo, setTitulo] = useState('');
    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');
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
<div className="Contenido">
 
     <div className="nav-users">
     
               <div className="filters">

                    <div className="filter">
                          <label htmlFor="">Autor</label>
                          <select  value={name} onChange={( (e) => setName(e.target.value) )} />  
                     </div>

                    <div className="filter">
                            <label htmlFor="">Fecha</label>
                            <select value={date} onChange={( (e) => setDate(e.target.value) )} />
                     </div>

                     <div className="filter">
                            <label htmlFor="">Categoria</label>
                            <select value={categoria} onChange={( (e) => setCategoria(e.target.value) )} />
                     </div>
                      <div className="filter">
                            <label htmlFor="">Titulo</label>
                            <input type="Select" value={titulo} onChange={( (e) => setTitulo(e.target.value) )} />
                    </div>
                

                <button className='btn'>
                            <i className="bi bi-x-lg"></i>
                            <span>Limpiar filtro</span>
                </button>
       
    </div>
         <button className="btn btn-main">Crear Blog</button>

</div>

        
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
</div>
    )
}

export default BlogCard