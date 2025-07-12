import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'

const AddAddres = () => {

  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:"",
  })

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler=async (e)=>{
    e.preventDefault()
    console.log("formData",formData);
    
  }

  return (
    <div className='mt-12 flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md'>
      <div className='flex-1 bg-white p-6 rounded-lg shadow'>
        <h2  className='text-xl font-semibold mb-4 text-gray-700'>Address Details</h2>

        <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-4'>

  <div>
    <label className='block text-gray-600'>First name</label>
    <input
      type="text"
      name='firstName'
      value={formData.firstName}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div>
    <label className='block text-gray-600'>Last name</label>
    <input
      type="text"
      name='lastName'
      value={formData.lastName}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div className='md:col-span-2'>
    <label className='block text-gray-600'>Email</label>
    <input
      type="email"
      name='email'
      value={formData.email}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div className='md:col-span-2'>
    <label className='block text-gray-600'>Street</label>
    <input
      type="text"
      name='street'
      value={formData.street}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div>
    <label className='block text-gray-600'>City</label>
    <input
      type="text"
      name='city'
      value={formData.city}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div>
    <label className='block text-gray-600'>State</label>
    <input
      type="text"
      name='state'
      value={formData.state}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div>
    <label className='block text-gray-600'>Pincode</label>
    <input
      type="number"
      name='pincode'
      value={formData.pincode}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div>
    <label className='block text-gray-600'>Country</label>
    <input
      type="text"
      name='country'
      value={formData.country}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div className='md:col-span-2'>
    <label className='block text-gray-600'>Phone</label>
    <input
      type="number"
      name='phone'
      value={formData.phone}
      onChange={handleChange}
      className='w-full p-2 border rounded-md'
      required
    />
  </div>

  <div className='md:col-span-2'>
    <button
      type='submit'
      className='w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-md h-10'
    >
      Save Address
    </button>
  </div>

</form>   
   </div>


      <div className='flex-1 flex items-center justify-center'>
        <img
         src={assets.add_address_iamge}
          alt=""
          className='w-full max-w-xs rounded-lg shadow-md' />
      </div>
      
    </div>
  )
}

export default AddAddres
