import React from 'react'
import useFetchImages from './useFetchImages'
import { useSelector } from 'react-redux';

const ImageContainer = () => {

    useFetchImages();

    const images = useSelector((store)=>store.images.images);
    if(images===null)return null;
    console.log(images);
    

    
  return (
    <div className='flex flex-wrap m-8'>
      {
        images.map(img=><img key={img.id} className='w-[300px] m-6 rounded-xl' alt='photos' src={img.cover_photo.urls.regular}/>)
      }
    </div>
  )
}

export default ImageContainer;