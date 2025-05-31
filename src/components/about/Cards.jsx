import React from 'react'

const Cards = () => {
  return (
    <div className='w-full md:justify-start justify-center md:items-start items-center'>
        <div className='p-2 flex lg:flex-row flex-col md:justify-between justify-center md:items-start items-center lg:gap-0 gap-2 lg:w-full'>
            <div className='bg-[#E5A020]  font-bold p-3 md:p-2 xl:px-4 lg:py-8 rounded-2xl w-full'>
                <p>+1000 Vendas</p>
            </div>
            <div className='bg-[#E5A020]  font-bold p-3 md:p-2 xl:px-4 lg:py-8 rounded-2xl w-full'>
                <p>+200 Clientes Atendidos</p>
            </div>
            <div className='bg-[#E5A020]  font-bold p-3 md:p-2 xl:px-4 lg:py-8 rounded-2xl w-full'>
                <p>Envio Para Todo o País</p>
            </div>
        </div>
    </div>
  )
}

export default Cards