import { useState } from "react";
import useShowToast from "./useShowToast";

function usePreviewImg() {
    const [ imgUrl, setImgUrl] = useState(null)
    const showToast = useShowToast()
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImgUrl(event.target.result);
            }
            reader.readAsDataURL(file);
        }
        else{
            showToast("Invalid file type", "please select an image file", "error")
        }
        
    };
    
    return {
        imgUrl,
        handleImageChange, setImgUrl
    }
  
}

export default usePreviewImg