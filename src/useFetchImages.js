import { useEffect, useState} from 'react'
import { CLIENT_ID } from './Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addImages } from './imageSlice';

const useFetchImages = () => {

    
    const next = useSelector((store)=>store.images.next);

    const dispatch = useDispatch((store)=>store.images);

    const fetchData=async()=>{
        const data = await fetch("https://api.unsplash.com/search/collections?page="+{next}+"&per_page=50&query=office&"+CLIENT_ID);
        const json = await data.json();
        if(json.results === null) return;
        dispatch(addImages(json.results));

        
    }
  
    useEffect(()=>{
        fetchData();
    },[]);

    
}

export default useFetchImages