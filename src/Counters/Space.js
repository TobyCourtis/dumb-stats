import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfShaggers} from '../counter-logic/SexLogic'
import {addNoise} from '../counter-logic/SexLogic'


const SpaceCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: 7,
        duration: 3,
        separator: ","
    });

    return (
        <div>
            <span className="counter">{countUp}</span>
            <p className="counterParagraph">
                People are in space right now
            </p>
        </div>
    );
};

export default SpaceCounter;
