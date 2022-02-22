import React from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* BLOG COMPONENTS
import BlogCard from '../../components/blog/BlogCard'



const Blogs = () => {

    return(

        <div className='dashboard'>

            <Menu/>

            <main>
                <Header route="Blogs"/>

                <div className="grid">

                    {/** BLOG CARDS*/}
                    <div className="col-12 md:col-4">
                        <BlogCard />
                    </div>


                 </div>

            </main>

        </div>

    )

}

export default Blogs