import React from 'react'
import useFetchImages from './useFetchImages'
import { useSelector } from 'react-redux';

const ImageContainer = () => {

    useFetchImages();

    const images = useSelector((store)=>store.images.images);
    if(images===null)return null;
    console.log(images);

    const getUrl=(item)=>{
        return <img className='w-[400px] rounded-xl' alt='photos' src={item.cover_photo.urls.regular}/>;
    }
    images.map(getUrl);
  return (
    <div className='flex flex-wrap m-8'>
        
    </div>
  )
}

export default ImageContainer;