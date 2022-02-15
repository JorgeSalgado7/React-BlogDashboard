import React from 'react'
import { useState, useEffect } from 'react'

//NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//COMPONENTS
import Table from '../../components/ui/Table'

//SERVICES
//import { GET } from '../../services/GET'

import axios from 'axios'
const GetUsers = () => {

    const [users, setUsers] = useState([])

    const OBTENER_USUARIOS = async () => {
        const { data } = await axios.get(`/users`)

        await setUsers(data)
    }

    useEffect(() => {

        OBTENER_USUARIOS()
        console.log(users)

    }, [])

    return(

        <div className='dashboard'>

            <Menu/>

            <main>

                <Header/>

                <Table />


            </main>

        </div>

    )

}

export default GetUsers
