import {useEffect, useState} from "react";

import searchProductStyle from '../Main.module.css'

export default function SearchProduct({setSearchProduct}) {
    const [value, setValue] = useState('');

    const placeholderWords = ['име', 'код'];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [placeholderText, setPlaceholderText] = useState('');
    const [direction, setDirection] = useState('forward');
    const [isIntervalActive, setIsIntervalActive] = useState(true);
    const [resetInterval, setResetInterval] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setSearchProduct(value);

        if (value === '') {
            setIsIntervalActive(true);
            setResetInterval(true);
            return;
        }

        setIsIntervalActive(false);
    }, [value]);

    useEffect(() => {
        if (!isIntervalActive || !resetInterval) {
            return;
        }

        const intervalId = setInterval(() => {
            updatePlaceholder();

            if (direction === 'forward' && charIndex + 1 === placeholderWords[currentWordIndex].length) {
                setDirection('backward');
            } else if (direction === 'forward') {
                increaseIndex();
            } else if (direction === 'backward' && charIndex === -1) {
                moveNextWord();
                setDirection('forward');
            } else if (direction === 'backward') {
                reduceIndex();
            }

        }, 300);

        return () => clearInterval(intervalId);
    }, [currentWordIndex, charIndex, placeholderWords, isIntervalActive, resetInterval]);


    const updatePlaceholder = () => {
        const currentWord = placeholderWords[currentWordIndex];
        const charCountToShow = Math.min(currentWord.length, charIndex + 1);
        setPlaceholderText(currentWord.slice(0, charCountToShow));
    };

    const moveNextWord = () => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % placeholderWords.length);
        setCharIndex(0);
    };

    const increaseIndex = () => {
        setCharIndex((prevIndex) => prevIndex + 1);
    }

    const reduceIndex = () => {
        setCharIndex((prevIndex) => prevIndex - 1);
    }

    const checkForPipe = () => {
        if (charIndex > 0 || charIndex < placeholderText.length) {
            return '|';
        }
        return '';
    }

    return (
        <div className={isFocused ? searchProductStyle.focused : ''}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="search" value={value}
                   onChange={(e) => setValue(e.currentTarget.value)}
                   placeholder={`Търсете по ${placeholderText}${checkForPipe()}`}
                   onFocus={() => setIsFocused(true)}
                   onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}