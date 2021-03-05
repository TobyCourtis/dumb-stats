import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const EatingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfShaggers(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfShaggers() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfShaggers() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are eating right now
            </p>
        </div>
    );
};

export default EatingCounter;
