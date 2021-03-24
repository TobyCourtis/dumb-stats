import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfPooers} from '../counter-logic/PooingLogic'
import {addNoise} from '../counter-logic/SexLogic'


const PooingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: (currentNumberOfPooers() * 10),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update((currentNumberOfPooers() * 10) + addNoise())

        const timer = setInterval(() => {
            update((currentNumberOfPooers() * 10) + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are pooing right now
            </p>
        </div>
    );
};

export default PooingCounter;
