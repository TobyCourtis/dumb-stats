import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfPeopleInTraffic} from '../counter-logic/TrafficLogic'
import {addNoise} from '../counter-logic/TrafficLogic'


const TrafficCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfPeopleInTraffic(),
        duration: 3,
        separator: ",",
        onEnd: () => updateCounter()
    });

    function updateCounter(){
        // update called twice below so there is a nice transition from initial count up and noise
        update(currentNumberOfPeopleInTraffic() + addNoise())

        const timer = setInterval(() => {
            update(currentNumberOfPeopleInTraffic() + addNoise())
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }

    return (
        <div className="counterInnerDiv">
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are in traffic right now
            </p>
        </div>
    );
};

export default TrafficCounter;
