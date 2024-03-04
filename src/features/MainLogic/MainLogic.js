import React, { useState } from 'react';
import './mainlogic.css'; // Import the CSS file

const MainLogic = () => {
    const [speed, setSpeed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        const imgLink = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Tokyo_Skytree_%281%29.JPG';

        const downloadSize = 3680000;
        const time_start = new Date().getTime();
        const cacheImg = `?nn=${time_start}`;
        const downloadSrc = new Image();

        setIsLoading(true);

        downloadSrc.onload = () => {
            const time_end = new Date().getTime();
            const timeDuration = (time_end - time_start) / 1000;
            const loadedBytes = downloadSize * 8;
            const totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);

            setSpeed(totalSpeed);
            setIsLoading(false);
        };

        downloadSrc.src = imgLink + cacheImg;

        // Simulate loading for 2 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="container">
            <div id="Downloadspeed">
                <h1>
                    <span>Check Your </span>
                    <span>Internet Speed</span>
                </h1>
                <span className={`loader ${isLoading ? '' : 'hide'}`}></span>
                <div className={`loader-content ${isLoading ? 'hide' : ''}`}>
                    <div id='resulttext' className={`content ${speed ? '' : 'hide'}`}>
                        {speed && `${speed} `}
                        <small>Mbps</small>
                    </div>
                    <button id="testbutton" onClick={handleButtonClick} className={isLoading ? 'hide' : ''}>
                        START
                    </button>
                </div>
            </div>
            <div id="speedanimations"></div>
        </div>
    );
};

export default MainLogic;

