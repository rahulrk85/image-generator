import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementNext } from './imageSlice';

const Buttons = () => {
    const dispatch = useDispatch();

    const handleNextBtn=()=>{
        dispatch(incrementNext());
    }
  return (
    <div className='flex justify-center'>
        <button className='px-3 py-2 m-2 rounded-xl bg-blue-900 text-white'>Previous</button>
        <button className='px-3 py-2 m-2 rounded-xl bg-blue-900 text-white' onClick={handleNextBtn}>Next</button>
    </div>
  )
}

export default Buttons