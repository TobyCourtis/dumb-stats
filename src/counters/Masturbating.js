import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfMasturbaters} from '../counter-logic/MasturbatingLogic'
import {addNoise} from '../counter-logic/SexLogic'


const MasturbatingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: (currentNumberOfMasturbaters() * 5),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update((currentNumberOfMasturbaters() * 5) + addNoise())

        const timer = setInterval(() => {
            update((currentNumberOfMasturbaters() * 5) + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are masturbating right now
            </p>
        </div>
    );
};

export default MasturbatingCounter;
