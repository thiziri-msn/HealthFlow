import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'

const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)
    const { setDToken } = useContext(DoctorContext)

    const onSbmitHandler = async (event) => {
        event.preventDefault()
        //api call
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)

                } else {
                    toast.error(data.message)
                }


            } else {
                //doctor state call doctor api login
                const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                    console.log(data.token)


                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {

        }

    }



    return (
        <form onSubmit={onSbmitHandler} className='min-h-[80vh] flex items-center' >
            <div className='flex flex-col bg-white gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-blue-600'> {state} </span> Connexion</p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-blue-600 text-white w-full py-2 rounded-md text-base'>Connexion</button>
                {
                    state === 'Admin'
                        ? <p>Connexion Médecin ?<span className='text-blue-600 underline cursor-pointer' onClick={() => setState('Médecin')}> Cliquez ici</span></p>
                        : <p>Connexion Admin ?<span className='text-blue-600 underline cursor-pointer' onClick={() => setState('Admin')}> Cliquez ici</span></p>
                }
            </div>
        </form>
    )
}

export default Login

