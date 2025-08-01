
import React, { useState } from 'react';
import DoctorCard from './doctorCard';  
import Doctors from './doctorData'



function LandingPage() {
  const [ value , setSearchValue] = useState('')
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const filteredDoctors = Doctors.filter(doctor => doctor.name.toLowerCase().includes(value.toLowerCase()) ||
   doctor.specialization.toLowerCase().includes(value.toLowerCase()) );  


  return (
    <div>
      <h1 className='text-3xl font-bold  text-center mt-8'>
       Find a Doctor 
      </h1>
      <input type="text" placeholder='Search Doctor' value = {value} onChange={handleSearch} className='border-2 border-gray-300  rounded-md p-2 mt-4 w-full max-w-md' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))} 
    </div>  
    </div>
)
}
  
export default LandingPage;