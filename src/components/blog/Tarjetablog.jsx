import React from 'react'
import '/node_modules/primeflex/primeflex.css';
import logo192 from '../logo192.png';

const Tarjetablog = () => {

    return(

<div class="grid">
    <div class="col-12 md:col-4">
    <div class ="bg-blue">
          <h1><div class="picture"><img src = {logo192}/></div></h1>
           <h1><div class="title">Nombre</div></h1>
           <div class= 'body'>
            <h2>Titulo de blog</h2>
             <h3>Autor </h3>
        <h4>Fecha de publicacion</h4>
     </div>
         </div>
           </div>
    <div class="col-12 md:col-4">B</div>
    <div class="col-12 md:col-4">C</div>
    </div>
    
    )
}
export default Tarjetablog