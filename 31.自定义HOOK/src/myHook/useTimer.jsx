import { useEffect } from 'react'

export default function useTimer(func, duration = 1000) {

    useEffect(() => {
        const timer = setInterval(() => {
            func()
        }, duration);
        return () => {
            clearInterval(timer);
            console.log('卸载了');
        }
    }, [])
}
