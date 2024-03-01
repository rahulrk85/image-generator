import React, { useState } from 'react'

const Searchbox = () => {

  const [click, setclick] = useState(false);

  const handleClick=()=>{
    setclick(true);
    console.log(click);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }


  return (
    !click?<div className=' flex justify-center mt-24'>
    <form onSubmit={handleSubmit}>
        <input className='border border-blue-900 p-2 m-2 px-48 pl-8 rounded-lg' type='text' placeholder='Search for an Image'/>
        <button className='p-2 m-2 bg-blue-900 text-white rounded-lg'>Search</button>
        <button className='p-2 px-3 m-2 bg-blue-900 text-white rounded-lg' onClick={handleClick}>Click for SUPRISE !</button>
    </form>
</div>:
<div>
  wefgwjeyfwyefgjwef
</div>
  )
}

export default Searchbox