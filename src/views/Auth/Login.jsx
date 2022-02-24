import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'


const CrearUser= () => {

    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    return (
        
        <div className="login">

            <div className='message'>
                <h1>Bienvenidos!</h1>
                <p>Inicia sesión para acceder a todo tu contenido.</p>
                <p> Si has olvidado tu contraseña da click <Link to="">aquí</Link> </p>
            </div>

            {/** LOG IN FORM */}
            <div className="panel-box">

                {/** IMAGE */}
                <div className="imgxx">
                    <img src="" alt=""/>
                </div>

                {/** LOGIN FORM */}
                <div className="grid">

                    {/** EMAIL */}
                    <div className="col-12">   
                        <div className="prime-input-container">
                            <label htmlFor='correo' className="block">Correo</label>
                            <InputText id='correo' value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="kaloni@kaloni.com" />
                        </div>
                    </div>

                    {/** PASSWORD */}                
                    <div className="col-12">
                        <div className="prime-input-container">
                            <label htmlFor='password' className="block">Contraseña</label>
                            <Password id='contraseña' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******************" />
                        </div>
                    </div>

                    {/** LOG IN BUTTON */} 
                    <div className="col-12">
                        <button className="btn btn-main">Iniciar sesión</button>
                    </div>

                </div>

            </div>

            <Link to="" className='link'>He olvidado mi contraseña</Link>

        </div>

    )
}
 
export default CrearUser