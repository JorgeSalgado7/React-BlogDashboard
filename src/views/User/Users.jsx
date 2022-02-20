import React from 'react'

//NAVIGATION
import Menu from '../../components/navigation/Menu'
import Header from '../../components/navigation/Header'

//COMPONENTES PRIME
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Users = () => {
    
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

                <Header/>

                {/** USERS TABLES */}
                <div className="panel-box">

                    <DataTable >
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