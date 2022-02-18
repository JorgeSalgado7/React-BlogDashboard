import React from 'react'

//NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'
import Tarjetablog from '../../components/blog/Tarjetablog'

const Index = () => {

    return(

        <div className='dashboard'>

            <Menu/>

            <main>

                <Header/>
                
                <Tarjetablog/>

            </main>

        </div>

    )

}

export default Index