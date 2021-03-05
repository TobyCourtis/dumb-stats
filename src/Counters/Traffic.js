import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const TrafficCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: 34812375,
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(34812375 + addNoise())

        const timer = setInterval(() => {
            update(34812375 + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are in traffic right now
            </p>
        </div>
    );
};

export default TrafficCounter;
