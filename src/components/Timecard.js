import React, { useState, useEffect } from 'react';

import DayGroup from './DayGroup';


function Timecard({ user }) {
    const [timeObj, setTimeObj] = useState(localStorage['timecard'] ? JSON.parse(localStorage['timecard']) : {});

    const updateTimeObj = newObj => {
        localStorage['timecard'] = JSON.stringify(newObj);

        setTimeObj(newObj);
    }

    return (
        <div>
            <DayGroup />
            <input type="button" value="Add Day" />
        </div>
    )
}

export default Timecard;