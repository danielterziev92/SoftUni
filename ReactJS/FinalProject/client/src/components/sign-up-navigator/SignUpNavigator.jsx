import {Fragment} from "react";

import style from './SignUpNavigator.module.css';

export default function SignUpNavigator({step, steps}) {
    return (
        <div className={style.ProgressBar}>
            {Array.from({length: steps}).map((_, index) => (
                <Fragment key={index}>
                    <div
                        className={`${style.Circle} ${index < step ? style.Active : ''} ${index >= step ? style.Next : ''}`}>
                        {index + 1}
                    </div>
                    {index < steps - 1 && <div className={style.Line}></div>}
                </Fragment>
            ))}
        </div>
    );
}