import React from 'react'
import '/node_modules/primeflex/primeflex.css';
import logo192 from '../logo192.png';

const Tarjetablog = () => {

    return(
    <div class ="TarjetaBlog">
         <div class="picture"><img src = {logo192}/></div>
             <h1 class="title">Nombre </h1>
                 <div class= 'body'>
                         <h2>Titulo de blog</h2>
                         <h3>Autor </h3>
                         <h4>Fecha de publicacion</h4>
                     </div>
    </div>
         
    )
}
export default Tarjetablog