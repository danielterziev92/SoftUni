import {useEffect} from 'react';

const useEscapeKeyHook = (handler) => {
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                handler();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [handler]);
};

export default useEscapeKeyHook;
