import React from 'react'
import { useState } from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { MultiSelect } from 'primereact/multiselect'

//* TEXT EDITOR
import TextEditor from '../../components/editor/TextEditor'

const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [resume, setResume] = useState('')
    const [category, setCategories] = useState('')
    const [content, setContent] = useState('')

    //ERRORS
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorResume, setErrorResume] = useState(false)
    const [errorCategory, setErrorCategory] = useState(false)
    const [errorContent, setErrorContent] = useState(false)
 
   

    
    const CREATE_BLOG = () => {

        //RESET ERROR VALUES
        setErrorTitle(false)
        setErrorResume(false)
        setErrorCategory(false)
        setErrorContent(false)
     

        //CHECK FOR A EMPTY VALUE
        if(title==="") setErrorTitle(true)
        if(resume==="") setErrorResume(true) 
        if(category==="") setErrorCategory (true) 
        if(content==="")setErrorContent (true)
       

        

    }


    const CATEGORIES = []

    const GET_IMAGE = (e) => {

    }

    return (
        
        <div className='dashboard create-blog'>

            <Menu/>

            <main>
                <Header route="Crear blog" />

                <div className="grid">

                    {/** CREATE BLOG NAVIGATION */}
                    <div className="col-12 nav-create-blog">
                        <p>Nuevo blog</p>

                        <div className='btn-container'>
                            <button className="btn btn-white">Vista previa</button>
                            <button className="btn btn-main" onClick={()=>CREATE_BLOG()}>Publicar</button>
                        </div>

                    </div>

                    {/** TÍTULO, RESUMEN Y CONTENIDO */}
                    <div className="col-12 lg:col-8">

                        <div className="panel-box">

                            <div className="grid">

                                {/** TITLE */}
                                <div className="col-12">
                                    <div className="prime-input-container">
                                        <label htmlFor='title' className="block">Título</label>
                                        <InputText id='title' className={errorTitle ? 'input-error' : ''} value={title} onChange={(e) => setTitle(e.target.value)} />
                                        {errorTitle && (<p className='text-error'>El titulo no puede estar vacio</p>)}
                                    </div>
                                </div>

                                {/** RESUME */}
                                <div className="col-12">
                                    <div className="prime-input-container">
                                        <label htmlFor='resume' className="block">Resumen</label>
                                        <InputTextarea id='resume' className={errorResume ? 'input-error' : ''} value={resume} onChange={(e) => setResume(e.target.value)} />
                                        {errorResume && (<p className='text-error'>El resumen no puede estar vacio</p>)}
                                    </div>
                                </div>

                                {/** CONTENT */}
                                <div className="col-12">

                                   <div className="text-editor">
                                        <label>Contenido</label>
                                        <TextEditor
                                            className={errorContent ? 'input-error' : ''}
                                            data={content}
                                            onChange={(content) => setContent(content)}
                                        />
                                        {errorContent && (<p className='text-error'>El contenido no puede estar vacio</p>)}
                                   </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/** CATEGORÍA E IMAGÉN PRINCIPAL */}
                    <div className="col-12 lg:col-4">
 
                        <div className="grid">

                            {/** CATEGORÍAS */}
                            <div className="col-12">
                                <div className="panel-box">
                                    <div className="prime-input-container">
                                        <label htmlFor='title' className="block">Categoría</label>
                                        <MultiSelect 
                                            className={errorCategory ? 'input-error' : ''}
                                            value={category} 
                                            options={CATEGORIES} 
                                            onChange={(e) => setCategories(e.value)} 
                                            optionLabel="name" 
                                            placeholder="Selecciona una categoría" 
                                            display="chip" 
                                        />
                                        {errorCategory && (<p className='text-error'>La categoría no puede estar vacio</p>)}
                                    </div>
                                </div>
                            </div>

                            {/** IMAGEN PRINCIPAL */}
                            <div className="col-12">

                                <div className="panel-box create-blog-image">
                                        
                                    <label htmlFor="">Imagen principal</label>
                                    <div className="imgBx"></div>
                                        
                                    <label className='btn btn-main btn-image' htmlFor='image'>
                                        <i className='bi bi-upload'></i>
                                        <span>Subir</span>
                                    </label>

                                    <input type="file" id="image" onChange={ e => GET_IMAGE(e)} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>

    )
}

export default CreateBlog