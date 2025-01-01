import { useState, useEffect } from 'react';

export function ClockModal() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // Update time every second

        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute top-0 right-4 bg-black bg-opacity-60 text-white p-3 rounded-xl shadow-xl transform transition-transform hover:scale-105">
            <p className="text-2xl font-mono font-semibold tracking-wide">{time}</p>
        </div>
    );
}
