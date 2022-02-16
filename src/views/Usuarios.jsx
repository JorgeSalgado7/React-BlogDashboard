import React from 'react'

//NAVIGATION
import Menu from '../components/navigation/Menu'
import Header from '../components/navigation/Header'

//COMPONENTES PRIME
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Usuarios = () => {
    
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

            <main className='usuarios'>

                <Header/>

                {/** TABLA DE USUARIOS */}
                <div className="caja">

                    <DataTable >
                        <Column header="Nombre"></Column>
                        <Column header="Apellido"></Column>
                        <Column header="Correo"></Column>
                        <Column header="Fecha de creación"></Column>
                        <Column header="Acciones" body={TEMPLATE_ACCIONES}></Column>
                    </DataTable>

                </div>

            </main>

        </div>
    )
}

export default Usuarios