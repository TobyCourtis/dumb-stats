import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfDrivers} from '../counter-logic/DrivingLogic'
import {addNoise} from '../counter-logic/DrivingLogic'


const DrivingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfDrivers(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfDrivers() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfDrivers() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are driving right now
            </p>
        </div>
    );
};

export default DrivingCounter;
