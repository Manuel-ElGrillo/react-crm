import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

    //Este location es un objeto. Hacer log para ver sus propiedades
    const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>

      <aside className='md: w-1/4 bg-blue-600 px-5 py-10'>

        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

        <nav className='mt-10'>
            <Link to={'/'} className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} 'text-2xl block mt-2 hover:text-blue-300 text-white' `}>Home</Link>
            <Link to={'/clientes/nuevo'} className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} 'text-2xl block mt-2 hover:text-blue-300 text-white' `}>Nuevo Cliente</Link>
        </nav>

      </aside>

      <main className='md: w-3/4 p-10 md:h-screen overflow-scroll'>

        {/* Componente especial para que los componentes hijos de Layout se rendericen */}
        <Outlet/>

      </main>
    </div>
  )
}

export default Layout
