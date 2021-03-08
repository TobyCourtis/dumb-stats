import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import {currentNumberOfPeopleInSpace} from '../counter-logic/SpaceLogic'


const SpaceCounter = () => {

    const {
        countUp,
        update
    } = useCountUp({
        end: currentNumberOfPeopleInSpace(),
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
