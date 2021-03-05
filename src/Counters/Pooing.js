import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/counter-logic'
import {addNoise} from '../counter-logic/counter-logic'


const PooingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: (currentNumberOfShaggers() * 10),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update((currentNumberOfShaggers() * 10) + addNoise() -1)

        const timer = setInterval(() => {
            update((currentNumberOfShaggers() * 10) + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are pooing right now
            </p>
        </div>
    );
};

export default PooingCounter;
