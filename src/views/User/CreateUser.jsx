import React from 'react'
import { useState } from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'

const CreateUser = () => {

    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [rol, setRol] = useState('')
    

    const VALIDACION = () => {

        if(name==="") console.log ('vacio') 
        if(apellido==="") console.log ('vacio') 
        if(correo==="") console.log ('vacio') 
        if(rol==="") console.log ('vacio')

    }
   

    return (
        
        <div className='dashboard create-user'>

            <Menu/>

            <main>

                <Header route="Crear usuario" />

                {/** NAV */}
                <div className="nav-create-user">
                    <p>Nuevo Usuario</p>
                </div>

                {/** CREATE USER FORM */}    
                <div className="panel-box">

                    <div className="grid">

                        {/** IMAGE */}
                        <div className="col-12">                               
                            
                        </div>

                        {/** NAME */}              
                        <div className="col-12 md:col-6">                               
                            <div className="prime-input-container">
                                <label htmlFor=' name ' className="block">Name</label>
                                <InputText id= 'name' className="p-input-border-down" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.Kaloni" />
                            </div>
                        </div>

                        {/** LAST NAME */}       
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='apellido' className="block">Apellido</label>
                                <InputText id='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}placeholder="Ej.Kaloni" />
                            </div>
                        </div>

                        {/** EMAIL */}
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='correo' className="block">Correo</label>
                                <InputText id= 'correo' value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej.Kaloni@kaloni.com"/>
                            </div>
                        </div>

                        {/** USER ROLE */}
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='rol' className="block">Rol de usuario</label>
                                <MultiSelect id= 'rol' value={rol} onChange={(e) => setRol(e.target.value)} placeholder="Selecciona un rol"/>
                            </div>
                        </div>

                        {/** CREATE USER BUTTON */}
                        <div className="col-12 md:col-6">
                            <button className="btn btn-main" onClick={()=>VALIDACION()}>Crear usuario</button>
                        </div>

                    </div>

                </div>

            </main>

        </div>

    )
}
 
export default CreateUser