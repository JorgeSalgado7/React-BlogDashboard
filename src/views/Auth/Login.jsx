import React from 'react'
import { useState } from 'react'

//* NAVIGATION

import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'


const CrearUser= () => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
  

   

    return (
        
<div className="login">

    <main>
         <div className='Message'>
              <a>Bienvenidos!</a>
         </div>
                  {/**LINK*/}
                  <div className=" col-12 nav-create-login">
                       <p>Inicia sesión para acceder a todo tu contenido.</p>
                         <p> Si has olvidado tu contraseña da click <a href="">aquí</a> </p>
                     
                  </div>


                <div className="panel-box">

                            {/**IMAGEN*/}
                    <div className="grid">

                        <div className="col-12">
                            <div className="prime-input-container">                           
                                     <div className="imgxx">
                                     <img src="" alt=""/>
                                     </div>
                            </div>
                        </div>

                                   {/**iNICIO DE SECCION*/}
                            <div className="col-12">                               
                                <div className="prime-input-container">
                                        <label htmlFor=' correo ' className="block">Correo</label>
                                        <InputText id= 'correo' className="p-input-border-down" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="kaloni@kaloni.com" />
                                </div>
                            </div>

                                
                             <div className="col-12">
                                <div className="prime-input-container">
                                    <label htmlFor='contraseña' className="block">Contraseña</label>
                                    <InputText id='contraseña' className="p-input-border-down" value={contraseña} onChange={(e) => setContraseña(e.target.value)}placeholder="*******************" />
                                </div>
                            </div>


                            <div className="col-12">
                                    <label className='btn btn-main btn-image' htmlFor='image'>
                                    <span>Iniciar sesión</span>
                                    </label>
                            </div>

                     </div>

                </div>

                <div className=" col-12 link"> <a href="">He olvidado mi contraseña</a></div>
    </main>

</div>

    )
}
 
export default CrearUser