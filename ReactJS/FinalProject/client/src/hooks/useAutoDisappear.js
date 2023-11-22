import {useEffect, useState} from "react";

export default function useAutoDisappear(duration, dependencyValue) {
    const [isVisible, setIsVisible] = useState(true);
    const [timeoutId, setTimeoutId] = useState(0);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setIsVisible(true);
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        setTimeoutId(timer);
    }, [dependencyValue]);


    return {isVisible};
}