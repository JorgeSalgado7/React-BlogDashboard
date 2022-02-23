import React from 'react'
import { useState } from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'

const CrearUser= () => {
    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [rol, setRol] = useState('')

   

    return (
        
<div className='dashboard create-user'>

     <Menu/>

    <main>
        <Header route="Crear Usuario" />

            <div className="col-6 nav-create-user">
            <p>Nuevo Usuario</p>
            </div>

                  
                <div className="panel-box">

                    <div className="grid">


                            {/**IMAGEN*/}
                            <div className="col-12">                               
                                     <div className="img">
                                     <img src="" alt=""/>
                                     </div>
                            </div>

                                
                            <div className="col-6">                               
                                <div className="prime-input-container">
                                        <label htmlFor=' name ' className="block">Name</label>
                                        <InputText id= 'name' className="p-input-border-down" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.Kaloni" />
                                </div>
                            </div>

                                
                             <div className="col-6">
                                <div className="prime-input-container">
                                    <label htmlFor='apellido' className="block">Apellido</label>
                                    <InputText id='apellido' className="p-input-border-down" value={apellido} onChange={(e) => setApellido(e.target.value)}placeholder="Ej.Kaloni" />
                                </div>
                            </div>


                            <div className="col-6">
                                <div className="prime-input-container">
                                    <label htmlFor='correo' className="block">Correo</label>
                                    <InputText id= 'correo' className="p-input-border-down" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej.Kaloni@kaloni.com"/>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="prime-input-container">
                                    <label htmlFor='rol' className="block">Rol de usuario</label>
                                    <MultiSelect id= 'rol' className="p-input-border-down" value={rol} onChange={(e) => setRol(e.target.value)} placeholder="Selecciona un rol"/>
                                </div>
                            </div>

                            <div className="col-6">
                                    <label className='btn btn-main btn-image' htmlFor='image'>
                                    <span>Crear Usuario</span>
                                    </label>
                            </div>
                   </div>

                </div>
    </main>

</div>

    )
}
 
export default CrearUser