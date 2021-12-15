import React, { useState } from 'react'
import './countdown.css';

const CountDown = () => {
    const [day, setDay] = useState(0);
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    setTimeout(() => {
        const currDate = new Date();
        const upcomingNewYear = new Date(`${currDate.getFullYear() + 1} 01 01`);
        const totalSec = (upcomingNewYear - currDate) / 1000;
        let totalMin = totalSec/60;
        let totalHr = totalMin/60;
        setDay(Math.floor(totalHr/24));
        setHr(Math.floor(totalHr%24));
        setMin(Math.floor(totalMin%60));
        setSec(Math.floor(totalSec%60));
    }, 1000);
    return (<>
        <h1>New Year Countdown - {new Date().getFullYear()+1}</h1>
        <div className="countdown">
            <div>
            <p className="time" id="day">{day}</p>
            <span className='caption'>Day</span>
            </div>
            <div>
            <p className="time" id="hour">{hr}</p>
            <span className='caption'>Hour</span>
        </div>
            <div>
            <p className="time" id="minute">{min}</p>
            <span className='caption'>Minute</span>
        </div>
            <div>
            <p className="time" id="second">{sec}</p>
            <span className='caption'>Second</span>
        </div>
        </div>
    </>);
}

export default CountDown;
