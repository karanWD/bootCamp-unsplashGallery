import React from "react";

const Timer = ({timer}) =>{
    return(
        <h1>
            {("0" + Math.floor((timer/(60*1000))%60)).slice(-2)}
            <span>:</span>
            {("0" + Math.floor((timer/1000)%60)).slice(-2)}
            <span>:</span>
            {("0" + Math.floor((timer/10)%100)).slice(-2)}
        </h1>
    )
}

export default Timer