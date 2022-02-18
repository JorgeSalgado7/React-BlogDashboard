import React from 'react'

//NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'
import TarjetaBlog from '../../components/blog/TarjetaBlog'


const Index = () => {

    return(

        <div className='dashboard'>

            <Menu/>

            <main>
                <Header/>

                <div className="grid">

                    <div className="col-12 md:col-4">
                        <TarjetaBlog/>
                    </div>

                    <div className="col-12 md:col-4">
                        <TarjetaBlog/>
                    </div>

                 </div>

            </main>

        </div>

    )

}

export default Index