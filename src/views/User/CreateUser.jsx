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

    //ERRORS
    const [errorName, setErrorName] = useState(false)
    const [errorApellido, setErrorApellido] = useState(false)
    const [errorCorreo, setErrorCorreo] = useState(false)
    const [errorRol, setErrorRol] = useState(false)

    

    const CREATE_USER = () => {

        //RESET ERROR VALUES
        setErrorName(false)
        setErrorApellido(false)
        setErrorCorreo(false)
        setErrorRol(false)

        //CHECK FOR A EMPTY VALUE
        if(name==="") setErrorName(true)
        if(apellido==="") setErrorApellido(true) 
        if(correo==="") setErrorCorreo (true) 
        if(rol==="")setErrorRol (true)

        

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
                                <InputText id= 'name' className={errorName ? 'input-error' : ''} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.Kaloni" />
                                {errorName && (<p className='text-error'>El nombre no puede estar vacio</p>)}
                            </div>
                        </div>

                        {/** LAST NAME */}       
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='apellido' className="block">Apellido</label>
                                <InputText id='apellido' className={errorApellido ? 'input-error' : ''} value={apellido} onChange={(e) => setApellido(e.target.value)}placeholder="Ej.Kaloni" />
                                {errorApellido && (<p className='text-error'>El Apellido no puede estar vacio</p>)}
                            </div>
                        </div>

                        {/** EMAIL */}
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='correo' className="block">Correo</label>
                                <InputText id= 'correo' className={errorCorreo ? 'input-error' : ''} value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej.Kaloni@kaloni.com"/>
                                {errorCorreo && (<p className='text-error'>El correo no puede estar vacio</p>)}
                            </div>
                        </div>

                        {/** USER ROLE */}
                        <div className="col-12 md:col-6">
                            <div className="prime-input-container">
                                <label htmlFor='rol' className="block">Rol de usuario</label>
                                <MultiSelect id= 'rol' className={errorRol ? 'input-error' : ''} value={rol} onChange={(e) => setRol(e.target.value)} placeholder="Selecciona un rol"/>
                                {errorRol && (<p className='text-error'>El rol no puede estar vacio</p>)}
                           </div>
                        </div>

                        {/** CREATE USER BUTTON */}
                        <div className="col-12 md:col-6">
                            <button className="btn btn-main" onClick={()=>CREATE_USER()}>Crear usuario</button>
                        </div>

                    </div>

                </div>

            </main>

        </div>

    )
}
 
export default CreateUser