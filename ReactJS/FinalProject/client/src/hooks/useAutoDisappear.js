import {useEffect, useState} from "react";

export default function useAutoDisappear(duration) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, []);

    return isVisible;
}