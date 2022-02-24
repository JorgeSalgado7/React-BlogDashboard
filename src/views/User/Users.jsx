import React, { useState } from 'react'

//* NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//* PRIME COMPONENTS
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Users = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    
    const TEMPLATE_ACCIONES = () => {
        return ( 
            <div className='acciones'>
                <button><i className='pi pi-pencil'></i></button>
                <button><i className='pi pi-trash'></i></button>
            </div>
        )
    }
    
    return (
        <div className='dashboard'>

            <Menu/>

            <main className='users'>

                <Header route="Usuarios" />

                {/** USER NAVIGATION */}
                <div className="nav-users">

                    {/** FILTERS */}
                    <div className="filters">

                        <div className="filter">
                            <label htmlFor="">Nombre:</label>
                            <input type="text" value={name} onChange={( (e) => setName(e.target.value) )} />
                        </div>

                        <div className="filter">
                            <label htmlFor="">Apellido:</label>
                            <input type="text" value={last} onChange={( (e) => setLast(e.target.value) )} />
                        </div>

                        <button className='btn'>
                            <i className="bi bi-x-lg"></i>
                            <span>Limpiar filtro</span>
                        </button>

                    </div>

                    <button className="btn btn-main">Crear Blog</button>

                </div>

                {/** USERS TABLES */}
                <div className="panel-box">

                    <DataTable value={users} header="Stack" responsiveLayout="scroll">
                        <Column header="Nombre" sortable></Column>
                        <Column header="Apellido" sortable></Column>
                        <Column header="Correo" sortable></Column>
                        <Column header="Fecha de creación" sortable></Column>
                        <Column header="Acciones" body={TEMPLATE_ACCIONES}></Column>
                    </DataTable>

                </div>

            </main>

        </div>
    )
}

export default Users