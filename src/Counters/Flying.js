import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const FlyingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: 24576,
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(24576 + addNoise())

        const timer = setInterval(() => {
            update(24576 + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are flying right now
            </p>
        </div>
    );
};

export default FlyingCounter;
