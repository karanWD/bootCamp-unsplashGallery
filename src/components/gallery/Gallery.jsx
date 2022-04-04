import List from "../list/List";
import Image from "../image/Image";
import {useState} from "react";

const Gallery = () =>{
    const [image,setImage] = useState()
    return(
        <>
            <List clickHandler={setImage}/>
            <Image data={image}/>
        </>
    )
}

export default Gallery