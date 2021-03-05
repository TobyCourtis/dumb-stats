import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/SexLogic'
import {addNoise} from '../counter-logic/SexLogic'


const EatingCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: 13586395,
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(13586395 + addNoise())

        const timer = setInterval(() => {
            update(13586395 + addNoise())
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
