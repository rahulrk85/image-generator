import React from 'react'

const Searchbox = () => {
  return (
    <div className=' flex justify-center mt-24'>
        <form>
            <input className='border border-blue-900 p-2 m-2 px-48 pl-8 rounded-lg' type='text' placeholder='Search for an Image'/>
            <button className='p-2 m-2 bg-blue-900 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default Searchbox