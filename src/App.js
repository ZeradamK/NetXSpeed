import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import './App.css'; // Assuming your CSS file is named 'App.css'

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        document.title = loaded ? "NETXSPEED" : "";
    }, [loaded]);

    const loading = () => {
        // Simulate loading time with setTimeout
        setTimeout(() => {
            setLoaded(true);
        }, 2000); // Adjust the timeout value as needed
    };

    useEffect(() => {
        loading();
    }, []);

    return (
        <div className='App'>
            {loaded ? <Home /> : <p className="loading-text">NETXSPEED</p>}
        </div>
    );
}

export default App;

