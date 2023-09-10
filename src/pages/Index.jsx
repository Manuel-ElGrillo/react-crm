import React from 'react'
import { useLoaderData, useNavigate, Form } from 'react-router-dom'
import { obtenerClientes } from '../data/clientes'

export const loader = () => {
  //Usar json-server --watch db.json para que funciones el GET a este archivo en la terminal
  const clientesObtenidos = obtenerClientes()
  return clientesObtenidos
}

const Index = () => {

  const data = useLoaderData() // Esto retorna el listado de clientes de arriba
  const navigate = useNavigate()

  return (
    <div>
      
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>

      <p className='mt-3'>Administra tus Clientes</p>

      {
        data.length ?

        <table className='bg-white shadow mt-5 table-auto w-full rounded'>
          <thead className='bg-blue-800 text-white'>
             <tr>
              <th className='p-2'>
                Cliente
              </th>
              <th className='p-2'>
                Contacto
              </th>
              <th className='p-2'>
                Acciones
              </th>
             </tr>
          </thead>
          <tbody>
            {
              data.map( cliente => ( 
                <tr className='border-b' key={cliente.id}>

                  <td className='p-6 space-y-2' >
                    <p className='text-2xl text-gray-800'>
                      {cliente.nombre}
                    </p>
                    <p>
                      {cliente.empresa}
                    </p>
                  </td>

                  <td className='p-6'>
                    <p className='text-gray-600'>
                      <span className='text-gray-800 uppercase font-bold'>
                        Email: 
                      </span>
                      {cliente.email}
                    </p>
                    
                    <p className='text-gray-600'>
                      <span className='text-gray-800 uppercase font-bold'>
                        Tel: 
                      </span>
                      {cliente.telefono} 
                    </p>
                  </td>

                  <td className='p-6 flex gap-3'>
                    <button 
                      type='button' 
                      className='text-blue-600 hover:text-blue-700 transition uppercase font-bold text-xs'
                      onClick={ () => navigate(`/clientes/${cliente.id}/editar`) }>
                      Editar
                    </button>

                    <Form>

                      <button
                        type='submit'
                        className='text-red-600 hover:text-red-700 transition uppercase font-bold text-xs'>
                        Eliminar
                      </button>

                    </Form>

                  </td>

                </tr>
              ) )
            }
             </tbody>
        </table> :

        <p className='text-center mt-10'>
          No hay clientes
        </p>
      }

    </div>
  )
}

export default Index
