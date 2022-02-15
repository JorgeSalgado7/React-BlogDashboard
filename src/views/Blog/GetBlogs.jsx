import React from 'react';

//NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//BLOG COMPONENTS
import BlogCard from '../../components/blog/BlogCard'
import BlogFilter from '../../components/blog/BlogFilter'

const GetBlogs = () => {

    return(

        <div className='dashboard'>

            <Menu/>

            <main>

                <Header/>

                <BlogFilter/>

                <div className="cols">

                    

                    <div className="col col-4">
                        <BlogCard 
                            title="Blog"
                            author="Jorge Salgado"
                            category="Blog category"
                            date="26/01/2020"
                        />
                    </div>

                </div>

            </main>

        </div>

    )

}

export default GetBlogs
