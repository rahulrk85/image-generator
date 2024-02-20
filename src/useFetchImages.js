import { useEffect } from 'react'
import { CLIENT_ID } from './Constants';
import { useDispatch } from 'react-redux';
import { addImages } from './imageSlice';

const useFetchImages = () => {

    const dispatch = useDispatch((store)=>store.images);

    const fetchData=async()=>{
        const data = await fetch("https://api.unsplash.com/search/collections?page=1&query=office&"+CLIENT_ID);
        const json = await data.json();
        if(json.results === null) return;
        dispatch(addImages(json.results));
        
    }
  
    useEffect(()=>{
        fetchData();
    },[]);
}

export default useFetchImages