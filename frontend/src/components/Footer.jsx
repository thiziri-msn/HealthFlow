import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left section */}
                <div>
                    <h1 className="text-2xl font-bold text-blue-900 mb-5 ">HealthFlow </h1>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Nous nous engageons à faciliter votre accès aux soins de qualité. Notre plateforme vous permet de prendre rendez-vous en toute simplicité avec des médecins de confiance, où que vous soyez.</p>

                </div>

                {/* center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>ENTREPRISE</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Accueil</li>
                        <li>À propos</li>
                        <li>Contactez-nous</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>

                {/* right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>NOUS CONTACTER</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+213-66-22-11-12</li>
                        <li>healthflow@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* copyright text */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 HealthFlow – Tous droits réservés.</p>
            </div>
        </div>
    )
}

export default Footer
