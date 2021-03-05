import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const TVCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: 96185927,
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(96185927 + addNoise())

        const timer = setInterval(() => {
            update(96185927 + addNoise())
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
