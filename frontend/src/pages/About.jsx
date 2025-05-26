import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>

            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>À Propos De <span className='text-gray-700 font-medium'>HealthFlow</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Bienvenue sur HealthFlow, votre partenaire de confiance pour gérer vos besoins de santé de manière pratique et efficace.
                        Chez HealthFlow, nous comprenons les défis auxquels les individus sont confrontés lorsqu’il s’agit de prendre des rendez-vous médicaux et de gérer leurs dossiers de santé.
                    </p>
                    <p>HealthFlow s’engage à l’excellence dans les technologies de la santé. Nous nous efforçons constamment d’améliorer notre plateforme en
                        intégrant les dernières avancées afin d’optimiser l’expérience utilisateur et de fournir un service de qualité supérieure. Que vous preniez un premier
                        rendez-vous ou que vous gériez un suivi médical, HealthFlow est là pour vous accompagner à chaque étape.</p>
                    <b className='text-gray-800'>Notre vision</b>
                    <p>Notre vision chez HealthFlow est de créer une expérience de santé fluide pour chaque utilisateur. Nous visons à réduire la distance entre les patients et les professionnels de santé,
                        afin de vous permettre d'accéder plus facilement aux soins dont vous avez besoin, au moment où vous en avez besoin.</p>
                </div>
            </div>

            <div className='text-xl my-4 text-gray-500'>
                <p>POURQUOI <span className='text-gray-700 font-semibold'>NOUS CHOISIR</span></p>

            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                hover:bg-prim hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficacité:</b>
                    <p>Une prise de rendez-vous simplifiée qui s’adapte à votre emploi du temps chargé.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                hover:bg-prim hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Commodité:</b>
                    <p>Un accès à un réseau de professionnels de santé de confiance près de chez vous.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
                hover:bg-prim hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Personnalisation:</b>
                    <p>Des recommandations et rappels sur mesure pour vous aider à mieux gérer votre santé.</p>
                </div>
            </div>

        </div>
    )
}

export default About
