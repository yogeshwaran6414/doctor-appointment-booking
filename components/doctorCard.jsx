
import React from 'react'
import { Link } from 'react-router-dom'

function DoctorCard({ doctor }) {
  return (
    <div className='border p-4 rounded-lg shadow-md'>
      <img src={doctor.image} alt={doctor.name} className='w-full h-48 object-cover rounded-md mb-4' />
      <h2 className='text-xl font-semibold mb-2'>{doctor.name}</h2>
      <p className='text-gray-600 mb-2'>Specialization: {doctor.specialization}</p>
      <p className='text-gray-600 mb-2'>Availability : {doctor.availability}</p>
      <p className={`text-sm ${doctor.availability_status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
        {doctor.availability_status}
      </p>  
      <Link to={`/doctor/${doctor.id}`} className='text-blue-500 hover:underline mt-2 inline-block'>
        View Profile
      </Link> 
    </div>
  )
} 

export default DoctorCard