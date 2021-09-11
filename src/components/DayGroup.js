import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import TimeField from './TimeField';
import '../styles/DayGroup.css';

function DayGroup() {



    return (
        <div className="DayGroup">
            <Header>Monday August 23, 2021</Header>
            <TimeField />

            {/* 
            {
                Object.keys(timeObj).map(key => {
                    return <TimeField key={key} objKey={key} timeStr={JSON.stringify(timeObj)} updateTimeObj={updateTimeObj} user={user} />
                })
            }
            <TimeField key='1' objKey='1' timeStr={JSON.stringify(timeObj)} updateTimeObj={updateTimeObj} user={user} /> */}
            <input type="button" value="New Entry" />
        </div>
    )
}

export default DayGroup;