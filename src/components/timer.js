/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import './styles.css';

const Timer = () => {
    const [time, setTime] = useState([0, 0, 0, 'AM', 'Morning']);

    const digitalTimer = () => {
        setTime(() => {
            const presentTime = new Date();
            const hrs = presentTime.getHours() > 12 ? presentTime.getHours() - 12 : presentTime.getHours();
            const mins = presentTime.getMinutes();
            const secs = presentTime.getSeconds();
            const ampm = presentTime.getHours() >= 12 ? 'PM' : 'AM';
            let dayStatus = '';
            if (presentTime.getHours() >= 5 && presentTime.getHours() <= 11) {
                dayStatus = 'Morning';
            } else if (presentTime.getHours() >= 12 && presentTime.getHours() <= 14) {
                dayStatus = 'Afternoon';
            } else if (presentTime.getHours() >= 15 && presentTime.getHours() <= 17) {
                dayStatus = 'Evening';
            } else {
                dayStatus = 'Night';
            }
            return [hrs < 10 ? `0${hrs}` : hrs, mins < 10 ? `0${mins}` : mins, secs < 10 ? `0${secs}` : secs, ampm, dayStatus];
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            digitalTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`timerMain ${time[4]?.toLowerCase()}`}>
            <div className="timerBox">
                <h6 className="message">Good {time[4]} Nextrive</h6>
                <h6 className="timerContent">{time[0]} : {time[1]} : {time[2]} {time[3]}</h6>
                <h6 className="dateContent">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRIie2UPU7DQBSEZzYOhBsAdSpcIHpyhJRpED+3ACoIcBSQKMIx0kcoco7AFYKAvKEAK+u1Ja8TqODr5u3um9nnlYF/aqAv0nSwgc3kTuQJgJ2GvV4E3LvX96ssG73lxcTfYZ32LYHzFcPuEriwThsALvOi83cQOF2xudeDZ752wXrTsVSgbV8VRkTqaH2DIuENfpwoAxOHEK9jdWMDBwiQYrVPUlUsQd000sVwv0vlDUwcOkB5slATSmQciOwRkKSxcxoJ/IgyqJuxGQcg+wAgACD7ZgAdHqMM6mfOXvmM6wFWMljpG/A7eNHTrGpvpUHdO5c0Ds/IXKkGhH9TYe6Irdp37zQyA0ge5obO2ZNAmDAPbrskPTjeR2uxV5UkmkVrlk0enr1wS7JJd4pFaxamiMGE+Vfz7nStgH+PT/ACklVg783YAAAAAElFTkSuQmCC" alt="icon" />
                    &nbsp;&nbsp;&nbsp;{new Date().toDateString()}
                </h6>
            </div>
        </div>
    );
};

export default Timer;
