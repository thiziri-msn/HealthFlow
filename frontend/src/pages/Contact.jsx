import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {


  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>NOUS <span className='text-gray-700 font-semibold'>CONTACTER</span> </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Notre BUREAU</p>
          <p className='text-gray-500'>Tizi-Ouzou Algérie <br /> Algérie </p>
          <p className='text-gray-500'>Tel: +213-66-22-11-12 <br /> Email: healthflow@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Rejoignez l’aventure HealthFlow</p>
          <p className='text-gray-500'>Découvrez nos équipes passionnées et trouvez le poste qui vous correspond.</p>
          <button className='border border-prim px-8 py-4 text-sm hover:bg-[#e0f7f9] hover:text-blue-900 transition-all duration-500'>Voir les opportunités</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
