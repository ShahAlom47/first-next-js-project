import axios from "axios"




export const getPhotos= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data= await res.json()
    return data
}
export const getPhotosDetails= async(id)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`) 
    return res.data
}
