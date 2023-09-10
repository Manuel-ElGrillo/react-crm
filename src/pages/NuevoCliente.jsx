import React from 'react'
import { useNavigate,Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export const action = async ({request}) => {
    const formData = await request.formData()

    const data = Object.fromEntries(formData)

    //Validando el formulario
    const errores = []

    
    if (Object.values(data).includes('')) {
        errores.push('Todos los campos son obligatorios')    
    }
    
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)) {
        errores.push('El email no es valido')
    }

    if (Object.keys(errores).length) {
        return errores
    }
}

const NuevoCliente = () => {

    const navigate = useNavigate()
    const errores = useActionData()

  return (
    <div>
      
        <h1 className='font-black text-4xl text-blue-900'>Nuevo Clientes</h1>

        <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

        <div className='flex justify-end'>
            <button className='bg-blue-800 text-white px-3 py-1 font-bol uppercase' onClick={() => navigate('/')}>
                Volver
            </button>
        </div>

        <div className="bg-white shadow rounded md:w-3/4 mx-auto px-5 py-10">

            {
                errores?.length && errores.map( (error, i) => (
                    <Error key={i}>
                        {error}
                    </Error>
                ))
            }

              <Form 
                action=""
                method='post'
                noValidate>

                  <Formulario />

                  <input
                      type="submit"
                      className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white hover:cursor-pointer'
                      value={"Enviar"} />

              </Form>

        </div>

    </div>
  )
}

export default NuevoCliente
