
import React, { useState } from 'react';

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* BLOG COMPONENTS
import BlogCard from '../../components/blog/BlogCard'



const Blogs = () => {
    const [date, setDate] = useState('');
    const [titulo, setTitulo] = useState('');
    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');

    return(

<div className="Contenido">

        <div className='dashboard'>

            <Menu/>

            <main>
                <Header route="Blogs"/>

                <div className="nav-blog">
 
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




                <div className="grid">

                    {/** BLOG CARDS*/}
                    <div className="col-12 md:col-4">
                        <BlogCard />
                    </div>


                 </div>

            </main>

        </div>
</div>       

    )

}

export default Blogs