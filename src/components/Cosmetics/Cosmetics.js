import React from 'react';
// import add from '../Utilities/Calculates';
import { add, multiply } from '../Utilities/Calculates';


const Cosmetics = () => {
    const first= 55;
    const second= 66;
    const totalAddition= add(first, second)
    const totalMultiply= multiply(first, second)
    return (
        <div>
            <h1>welcome to my Cosmetics components!!!</h1>
            <h3>Total-addition= {totalAddition}</h3>
            <h3>Total-multiply= {totalMultiply}</h3>
        </div>
    );
};

export default Cosmetics;