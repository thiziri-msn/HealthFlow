import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

function Banner() {

    const navigate = useNavigate()

    return (
        <div className='flex bg-[#e0f7f4] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 mb-12 md:mx-10'>
            {/*----- Left side--------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-4xl font-bold text-blue-600'>
                    <p>Votre santé, notre priorité.</p>
                    <p className='mt-4 text-sm  md:text-2xl  font-medium text-gray-600'>
                        Plus besoin d’attendre :<br /> Trouvez un spécialiste, Choisissez l’horaire qui vous convient et Confirmez votre rendez-vous en quelques secondes.
                    </p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className=' border border-blue-600 hover:bg-blue-100 text-blue-600 text-sm sm:text-base  px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>
                    Créer un compte

                </button>
            </div>
            {/*----- Right side--------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner