import React, {useEffect, useState} from "react"
import Buttons from "../Buttons/Buttons";
import Timer from "../Timer/Timer";

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
            <Timer timer={timer}/>
            <Buttons active={active} setActive={setActive} pause={pause} pauseHandler={handlePause} stopHandler={handleStop}/>
        </div>
    )
}

export default StopWatch