import React from "react";

const Buttons = ({active, setActive, pause, pauseHandler, stopHandler}) => {
    return (

        active ?
            <>
                <button className={`btn`} onClick={pauseHandler}>{pause ? "continue" : "pause"}</button>
                <button className={`btn stop`} onClick={stopHandler}>stop</button>
            </>
            :
            <button className={`btn start`} onClick={() => setActive(true)}>start</button>
    )
}

export default Buttons