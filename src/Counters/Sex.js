import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfPeopleHavingSex} from '../counter-logic/SexLogic'
import {addNoise} from '../counter-logic/SexLogic'


const SexCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfPeopleHavingSex(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfPeopleHavingSex() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfPeopleHavingSex() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are shagging right now
            </p>
        </div>
    );
};

export default SexCounter;
