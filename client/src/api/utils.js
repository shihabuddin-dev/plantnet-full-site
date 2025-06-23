import axios from 'axios';

// upload img and return image URL
export const imageUpload= async ImageData =>{
 const imageFormData= new FormData()
 imageFormData.append('image', ImageData)

 const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFormData
    );
    return data?.data?.display_url;

}