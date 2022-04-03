import React, {useEffect, useState} from "react"

const StopWatch = () => {
    const [timer, setTimer] = useState(0)
    const [pause, setPause] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
        let interval;
        if (!pause && active) {
            interval = setInterval(() => {
                setTimer(prevState => prevState + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [active, pause])

    const handleStop = () => {
        setActive(false)
        setPause(false)
        setTimer(0)
    }

    const handlePause = () => {
        setPause(prev => !prev)
    }

    return (
        <div>
            <h1>
                {console.log(timer,Math.floor((timer/1000)%60),Math.floor((timer/1000)))}
                {("0" + Math.floor((timer/(60*1000))%60)).slice(-2)}
                <span>:</span>
                {("0" + Math.floor((timer/1000)%60)).slice(-2)}
                <span>:</span>
                {("0" + Math.floor((timer/10)%100)).slice(-2)}
            </h1>
            {
                active ?
                    <>
                        <button onClick={handlePause}>{pause ? "continue" : "pause"}</button>
                        <button onClick={handleStop}>stop</button>
                    </>
                    :
                    <button onClick={() => setActive(true)}>start</button>
            }
        </div>
    )
}

export default StopWatch