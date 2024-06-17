import { getPhotosDetails } from "@/UtilityFunctions/UtilityFunctions";

export const generateMetadata=async()=>{
    const data= await getPhotosDetails(2)

    return {
        title:data.title,
        description: data.title,
        keywords: data.title.split(' ')
    }
}


const PhotoDetails = async ({params}) => {
const id = params.photoId
const data= await getPhotosDetails(id)




    return (
        <div>
            <h1>  ID: {id}</h1>
            <h1>  title: {data.title}</h1>
            
        </div>
    );
};

export default PhotoDetails;