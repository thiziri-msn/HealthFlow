import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Découvrez nos médecins spécialistes.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-prim text-white ' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filtres</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Médecin généraliste' ? navigate('/doctors') : navigate('/doctors/Médecin généraliste')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Médecin généraliste" ? "bg-indigo-100 text-black" : ""}`}>Médecin généraliste</p>
          <p onClick={() => speciality === 'Gynécologue' ? navigate('/doctors') : navigate('/doctors/Gynécologue')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynécologue" ? "bg-indigo-100 text-black" : ""}`}>Gynécologue</p>
          <p onClick={() => speciality === 'Dermatologue' ? navigate('/doctors') : navigate('/doctors/Dermatologue')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologue" ? "bg-indigo-100 text-black" : ""}`}>Dermatologue</p>
          <p onClick={() => speciality === 'Pédiatre' ? navigate('/doctors') : navigate('/doctors/Pédiatre')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pédiatre" ? "bg-indigo-100 text-black" : ""}`}>Pédiatre</p>
          <p onClick={() => speciality === 'Neurologue' ? navigate('/doctors') : navigate('/doctors/Neurologue')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologue" ? "bg-indigo-100 text-black" : ""}`}>Neurologue </p>
          <p onClick={() => speciality === 'Gastro-entérologue' ? navigate('/doctors') : navigate('/doctors/Gastro-entérologue')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastro-entérologue" ? "bg-indigo-100 text-black" : ""}`}>Gastro-entérologue</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl
                 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                    <p className={` w-2 h-2 ${item.available ? 'bg-green-500 ' : 'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Disponible' : 'Pas disponible'}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
