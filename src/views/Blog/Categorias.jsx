import React from 'react'
import { useState } from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const CrearUser= () => {
    const [name, setName] = useState('')
    const [categoria, setCategoria] = useState('')
    const [users] = useState('')
  

    const TEMPLATE_ACCIONES = () => {
        return ( 
            <div className='acciones'>
                <button><i className='pi pi-trash'></i></button>
            </div>
        )
    }

    return (
        
<div className='dashboard create-categorias'>

  <Menu/>

    <main>
        <Header route="Blog-Categorías" />
         
        <div className="grid">

           <div className="col-12 nav-create-categorias">
            <p>Agregar una nueva categoria</p>
            
                <div className="filters">

                     <div className="filter">
                        <label htmlFor="">Buscar:</label>
                        <input type="text" value={name} onChange={( (e) => setName(e.target.value) )} />
                     </div>

                </div>

            </div>

                     {/**USER*/} 
                          <div className="col-12 lg:col-5">

                                <div className="panel-box"> 
             
                                    <div className="grid">
    
                                      <div className="col-12"> 
                                          <div className="prime-input-container">
                                              <label htmlFor=' name ' className="block">Name</label>
                                              <InputText id= 'name' className="p-input-border-down" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.Kaloni" />
                                         </div>
                                      </div>


                                     <div className="col-12"> 
                                           <div className="prime-input-container">
                                              <label htmlFor=' categoria ' className="block">Categoría padre </label>
                                              <MultiSelect id= 'categoria' className="p-input-border-down" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Selecciona una categoría"/>
                                           </div>
                                     </div>


                                     <div className="col-12">
                                          <label className='btn btn-main btn-image' htmlFor='image'>
                                          <span>Crear Usuario</span>
                                          </label>
                                     </div>


                                    </div>

                  
                                </div>
                          </div>

                            {/**TABLE */} 
                              <div className="col-12 lg:col-7">

                                <div className="grid">

                                    <div className="col-12 ">

                                       <div className="panel-box">

                                         <DataTable value={users} responsiveLayout="stack" breakpoint="960px">
                                             <Column header="Nombre" sortable></Column>
                                             <Column header="Categoría" sortable></Column>
                                             <Column header="Acciones" body={TEMPLATE_ACCIONES}></Column>
                                         </DataTable>

                                        </div>
                                     
                                    </div>
                                    
                                 </div>

                             </div>
  
        </div>

    </main>

</div>
 
    )
}
 
export default CrearUser