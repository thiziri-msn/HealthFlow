import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {
    const { aToken,setAToken } = useContext(AdminContext)
    const {dToken, setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }
    return (
        <div className=' flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <h1 className="text-2xl cursor-pointer font-bold text-blue-900 cursor-pointer ">HealthFlow </h1>
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 ' >{aToken ? 'Admin' : 'Médecin'}</p>
            </div>
            <button onClick={logout} className='bg-blue-600 text-white text-sm px-10 py-2 rounded-full'>Déconnexion</button>
        </div>
    )
}

export default Navbar
