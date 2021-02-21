import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {counterInputVars} from './counter-logic/counter-logic'

function addNoise(maxFluctuation){
    // +1 required so it's between 1 and max value not 0 and max value - 1
    return Math.floor(Math.random() * (2*maxFluctuation)) + 1 - maxFluctuation
}

const Counter = () => {
    
    const {
        countUp,
        start,
        pauseResume,
        reset,
        update
    } = useCountUp({
        end: counterInputVars(),
        duration: 3,
        separator: ",",
        onUpdate: () => console.log('Updated!'),
        onEnd: () => noiseTimer()
    });

    function noiseTimer(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(counterInputVars() + addNoise(10))

        const timer = setInterval(() => {
            update(counterInputVars() + addNoise(10))
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }   

    return (
        <div>
            <span className="counter">{countUp}</span>
        </div>
    );
};

export default Counter;