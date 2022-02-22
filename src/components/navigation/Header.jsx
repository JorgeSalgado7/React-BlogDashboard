import React from 'react'

const Header = ({route}) => {
    
    const FUNCION_MENU = () => {
        const TOOGLE = document.querySelector('.toggle')
        const MENU = document.querySelector('.menu')
        TOOGLE.classList.toggle('toggle-active')
        MENU.classList.toggle('menu-active')
    }
    
    
    return(
        <header className='header'>

            <h4>{route}</h4>

            <div className="icons">

                <div className="icon icon-notifications">
                    <i className='bi bi-bell-fill'></i>
                </div>

                <div className="icon icon-image"></div>

            </div>

            <button className="toggle" onClick={()=>FUNCION_MENU()}>
                <div className="bar"></div>
            </button>

        </header>
    )
}

export default Header
