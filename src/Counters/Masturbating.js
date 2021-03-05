import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const MasturbatingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: (currentNumberOfShaggers() * 5),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update((currentNumberOfShaggers() * 5) + addNoise())

        const timer = setInterval(() => {
            update((currentNumberOfShaggers() * 5) + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are masturbating right now
            </p>
        </div>
    );
};

export default MasturbatingCounter;
