import React from 'react'

const BlogFilter = () => {

    return(

        <div className="blog-filter">

            <div className="cols">

                <div className="col col-3">
                    <input type="text" placeholder='Title' />
                </div>

                <div className="col col-3">
                
                    <input type="text" list='categories' placeholder='Category'/>
                    <datalist id='categories'>
                        <option value="">Categoría</option>
                        <option value="">Categoría</option>
                    </datalist>

                </div>

                <div className="col col-3">
                
                    <input type="text" list='authors' placeholder='Author'/>
                    <datalist id='authors'>
                        <option value="">Author</option>
                        <option value="">Author</option>
                    </datalist>

                </div>

            </div>

        </div>

    )

}

export default BlogFilter