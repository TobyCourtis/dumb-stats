import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfFlyers} from '../counter-logic/FlyingLogic'
import {addNoise} from '../counter-logic/SexLogic'


const FlyingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfFlyers(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfFlyers() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfFlyers() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are flying right now
            </p>
        </div>
    );
};

export default FlyingCounter;
