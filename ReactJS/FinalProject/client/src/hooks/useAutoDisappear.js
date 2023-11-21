import {useEffect, useRef, useState} from "react";

export default function useAutoDisappear(duration) {
    const [isVisible, setIsVisible] = useState(true);
    const [timeoutIds, setTimeoutIds] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender) {
            timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);
        setTimeoutIds(timer);

        return () => clearTimeout(timer);
    }, []);

    return isVisible;
}