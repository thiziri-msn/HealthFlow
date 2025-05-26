import React from 'react';
import { assets } from '../assets/assets';

function Header() {
  return (
    <div className="flex flex-col md:flex-row bg-[#e0f7f4] px-6 md:px-12 py-16">
      {/* Partie gauche  */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-blue-900">
          HealthFlow <br />
          <span className="text-blue-600">Prendre soin de votre santé, inspirer votre vie</span>
        </h1>

        <p className="text-gray-600">
          Le bien-être entre vos mains, grâce à des soins d’exception. <br />
          Vivez une santé éclatante et une vie pleine d’inspiration <br />
          avec HealthFlow.
        </p>

        <div className="flex gap-4">
          <a href="#speciality" className='flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-white
           text-sm m-auto md:m-0 hover:bg-blue-700 '>Prendre Rendez-vous
            <img className='w-3 ' src={assets.arrow_icon} alt="" /></a>
          <a href='/contact' className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100">
            Contactez-nous
          </a>
        </div>

        {/* Statistiques  */}
        <div className="flex gap-8 mt-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-900">200+</h3>
            <p className="text-gray-600">Meilleurs Médecins</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">15+</h3>
            <p className="text-gray-600">Ans d’Expérience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">20+</h3>
            <p className="text-gray-600">Spécialités Disponibles</p>
          </div>
        </div>
      </div>

      {/* Partie droite - Image (à remplacer par votre asset) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={assets.header_img}
          alt="Doctor"
          className="max-w-md h-auto"
        />
      </div>
    </div>
  );
}

export default Header;