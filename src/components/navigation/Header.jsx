import React from 'react'

const Header = (props) => {
    
    const FUNCION_MENU = () => {
        const TOOGLE = document.querySelector('.toggle')
        const MENU = document.querySelector('.menu')
        TOOGLE.classList.toggle('toggle-active')
        MENU.classList.toggle('menu-active')
    }
    
    
    return(
        <header className='header'>

            <h4>{props.ruta}</h4>

            <button className="toggle" onClick={()=>FUNCION_MENU()}>
                <div className="bar"></div>
            </button>

        </header>
    )
}

export default Header
