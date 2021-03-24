import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfEaters} from '../counter-logic/EatingLogic'
import {addNoise} from '../counter-logic/SexLogic'


const EatingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfEaters(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfEaters() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfEaters() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are eating right now
            </p>
        </div>
    );
};

export default EatingCounter;
