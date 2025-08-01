import React, { useState } from 'react';




function BookingForm({doctor}) {
  const [form, setForm ] = useState({
    name: '', 
    email: '',
    datetime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.datetime) {
       setSubmitted(true);
    }
    
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Book an Appointment</h2>
      {submitted ? (
        <div className='text-green-500'>Appointment booked successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={form.name}
            onChange={handleChange}
            className='border-2 border-gray-300 rounded-md p-2 w-full'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={form.email}
            onChange={handleChange}
            className='border-2 border-gray-300 rounded-md p-2 w-full'
            required
          />
          <input
            type='datetime-local'
            name='datetime'
            value={form.datetime}
            onChange={handleChange}
            className='border-2 border-gray-300 rounded-md p-2 w-full'
            required
          />
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
 
}
export default BookingForm;