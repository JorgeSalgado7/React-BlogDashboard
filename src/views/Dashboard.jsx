import React from 'react'


//NAVIGATION
import Menu from '../components/navigation/Menu'
import Header from '../components/navigation/Header'
import Table from '../components/navigation/Table'


const Dashboard = () => {

    return(
        <div className='dashboard'>

            <Menu/>

            <main>

                <Header/>

                <Table/>

            </main>


        </div>

    )

}

export default Dashboard
