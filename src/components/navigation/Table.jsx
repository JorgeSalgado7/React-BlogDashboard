
import React, {useEffect,useState} from 'react';

import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

 export const Table = () => {
     const datos = [
         {id: 1, nombre: 'Victor'}
     ]
     const [cliente, setcliente]= React.useState(null)

   React.useEffect(() => {
        console.log('useEffect')
        ObtenerDatos()
    },[])

    const ObtenerDatos = async () => {
        const data = await fetch ('')
        const users = await data.json()
        console.log(users)
        setcliente(users)
    }
    const ActionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    return (
        
            <div className="backgroundColor">
            <TreeTable >
            <Column field="Nombre" header="Nombre" expander></Column>
            <Column field="Apellido" header="Apellido"></Column>
            <Column field="Correo" header="Correo"></Column>
            <Column field="Fecha de creacion" header="Fecha de creacion"></Column>
           
            <Column header= "Accion" body={ActionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
        </TreeTable>
        </div>
       
        
    )
}
export default Table