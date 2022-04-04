import "./Image.css"
import Likes from "../likes/Likes";
const Image = ({data}) =>{
    return(
        <div className={`image-container`}>
            <img src={data?.urls?.regular} alt=""/>
            <Likes data={data?.likes} />
        </div>
    )
}

export default Image