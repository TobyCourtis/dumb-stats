import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfPeopleWatchingTV} from '../counter-logic/TVLogic'
import {addNoise} from '../counter-logic/SexLogic'


const TVCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfPeopleWatchingTV(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfPeopleWatchingTV() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfPeopleWatchingTV() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are watching TV right now
            </p>
        </div>
    );
};

export default TVCounter;
