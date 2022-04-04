import React, {useEffect, useState} from "react";
import axios from "axios";
import "./List.css"

const List = ({clickHandler}) =>{
    const [imagesList,setImagesList] = useState()
    const token = "18cdQgiBHLtVpO-kej_vJsXe9yjcUo_TmeguKpaGEjI"

    useEffect(()=>{
        axios.get(`https://api.unsplash.com/photos/?client_id=${token}`)
            .then(res=>{
                setImagesList(res.data)
                clickHandler(res.data[0])
            })
            .catch(err=>console.log(err))

    },[])

    return(
        <div className={`list-container`}>
            {imagesList?.map((item,index)=>(
                <div key={index} onClick={()=>clickHandler(item)}><img src={item?.urls?.thumb} alt=""/></div>
            ))}
        </div>
    )
}

export default List