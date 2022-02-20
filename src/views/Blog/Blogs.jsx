import React from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* COMPONETES BLOG
import TarjetaBlog from '../../components/blog/TarjetaBlog'



const Blogs = () => {

    return(

        <div className='dashboard'>

            <Menu/>

            <main>
                <Header/>

                <div className="grid">

                    {/** TARJETA DE BLOG */}
                    <div className="col-12 md:col-4">
                        <TarjetaBlog/>
                    </div>


                 </div>

            </main>

        </div>

    )

}

export default Blogs