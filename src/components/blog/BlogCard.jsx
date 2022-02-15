import React from 'react'
import { useRef } from 'react'

const BlogCard = (props) => {

    const ACTIONS_MENU = useRef()

    const ACTIONS_FUNCIONALITY = () => {
        ACTIONS_MENU.current.classList.toggle('actions-menu-active')
    }

    return(

        <div className='card blog-card'>

            <div className="card-image">

                <img src="" alt="" />

                <div className="actions" onClick={() => ACTIONS_FUNCIONALITY()}>
                    <i className='bi bi-three-dots-vertical'></i>
                </div>

            </div>

            <ul className="actions-menu" ref={ACTIONS_MENU}>
                <li><i className='bi bi-pencil'></i>Editar</li>
                <li><i className='bi bi-pencil'></i>Borrar</li> 
            </ul>

            
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.author}</p>
                <p>{props.category}</p>
                <p>{props.date}</p>
            </div>

        </div>

    )

}

export default BlogCard
