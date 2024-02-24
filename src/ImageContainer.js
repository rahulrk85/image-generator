import React, { useEffect, useState } from 'react'
import useFetchImages from './useFetchImages'
// import { useSelector } from 'react-redux';
import { CLIENT_ID } from './Constants';

const ImageContainer = ({Status}) => {

  const [Images,setImages] = useState(null);
  
  // const next = useSelector((store)=>store.images.next);

    useFetchImages();

    const fetchData=async()=>{
      const data = await fetch("https://api.unsplash.com/search/collections?page="+{Status}+"&per_page=50&query=office&"+CLIENT_ID);
      const json = await data.json();
      if(json==null) return null;
      console.log(json.results);
      setImages(json.results);

  }

  useEffect(()=>{
    fetchData();
  },[]);

    // const images = useSelector((store)=>store.images.images);
    if(Images===null)return null;
    

    
    
  return (
    <div className='flex flex-wrap m-8'>
      {
        Images.map(img=><img key={img.id} className='w-[300px] m-6 rounded-xl' alt='photos' src={img.cover_photo.urls.regular}/>)
      }
    </div>
  )
}

export default ImageContainer;