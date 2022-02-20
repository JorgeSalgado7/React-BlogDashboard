import React from "react"
import { Link } from 'react-router-dom'

import { useEffect } from "react"

const Menu = () => {

    useEffect(() => {


        //SUBMENU FUNCTIONALITY
        const LEVEL_LINK = document.querySelectorAll('.level-link')
      
        LEVEL_LINK.forEach((level, index) => {
            level.addEventListener('click', () => {

                level.classList.toggle('level-link-active')

                const INDICADOR = document.getElementsByClassName('actual-level-submenu')
                INDICADOR[index].classList.toggle('actual-level-active')

                const SUBMENU = level.querySelector('.submenu')
                SUBMENU.classList.toggle('submenu-active')

                if(!SUBMENU.style.maxHeight){
                    SUBMENU.style.maxHeight = SUBMENU.scrollHeight + 'px'
                }
                else{
                    SUBMENU.style.maxHeight = null
                }
    


            })
        })

    }, []);
    

    return(
        <aside className="menu">

            <div className="imgBx">
                <img src="#" alt="Logo" />
            </div>

            <nav>

                {/** DASHBOARD */}
                <Link to="/dashboard" className="link-menu">
                    <div className="actual-level"></div>
                    <div className="icono">
                        <i className="bi bi-house"></i>
                    </div>
                    <span>Dashboard</span>
                </Link>

                {/** BLOG */}
                <button className="link-menu level-link">
                    <div className="actual-level actual-level-submenu"></div>
                    <div className="icono">
                        <i className="bi bi-journal-text"></i>
                    </div>
                    <span>Blog</span>
                    <div className="flecha">
                        <i className="bi bi-caret-right"></i>
                    </div>

                    {/** SUB MENÚ */}
                    <div className="submenu">

                        <Link to="/blog" className="link-submenu">
                            <div className="icono">
                                <i className="bi bi-list-ul"></i>
                            </div>
                            <span>Ver todos</span>
                        </Link>

                        <Link to="/blog/create" className="link-submenu">
                            <div className="icono">
                                <i className="bi bi-journal-plus"></i>
                            </div>
                            <span>Agregar nuevo</span>
                        </Link>

                        <Link to="/blog/categories" className="link-submenu">
                            <div className="icono">
                                <i className="bi bi-list-nested"></i>
                            </div>
                            <span>Categorías</span>
                        </Link>

                    </div>

                </button>

                {/** USUARIOS */}
                <button className="link-menu level-link">
                    <div className="actual-level actual-level-submenu"></div>
                    <div className="icono">
                        <i className="bi bi-people"></i>
                    </div>
                    <span>Usuarios</span>
                    <div className="flecha">
                        <i className="bi bi-caret-right"></i>
                    </div>

                    {/** SUB MENÚ */}
                    <div className="submenu">

                        <Link to="/users" className="link-submenu">
                            <div className="icono">
                                <i className="bi bi-people"></i>
                            </div>
                            <span>Ver todos</span>
                        </Link>

                        <Link to="/users/create" className="link-submenu">
                            <div className="icono">
                                <i className="bi bi-person-plus"></i>
                            </div>
                            <span>Agregar nuevo</span>
                        </Link>

                    </div>

                </button>

                {/** PERFIL */}
                <Link to="/profile" className="link-menu">
                    <div className="actual-level"></div>
                    <div className="icono">
                        <i className="bi bi-person"></i>
                    </div>
                    <span>Perfil</span>
                </Link>

                {/** CERRAR SESIÓN */}
                <div className="link-menu">
                    <div className="actual-level"></div>
                    <div className="icono">
                        <i className="bi bi-box-arrow-left"></i>
                    </div>
                    <span>Cerrar sesión</span>
                </div>

            </nav>

        </aside>
    )

}

export default Menu