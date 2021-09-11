import React, { useState } from 'react'
import { Input, Button } from 'semantic-ui-react'
import Airtable from 'airtable'
import API from '../config/API'
import moment from 'moment'

const TimeField = () => {
  const [time, setTime] = useState(null)

  const uCS = punch_type => {
    navigator.geolocation.getCurrentPosition(
      position => {
        //const timeObj = JSON.parse(timeStr);
        const {
          coords: { latitude, longitude },
          timestamp
        } = position

        const base = new Airtable({ apiKey: API.key }).base('app7hR5UDZ4st97XS')

        base('Punch Times').create(
          [
            {
              fields: {
                Username: 'msorenson',
                'Punch Time': timestamp,
                'Punch Latitude': latitude,
                'Punch Longitude': longitude,
                'Punch Type': punch_type
              }
            }
          ],
          (err, records) => {
            if (err) return alert(err)
            setTime(new Date(timestamp))
            records.forEach(r => console.log(r))
          }
        )

        // timeObj[Date.now().toString()] = { latitude, longitude, timestamp, user };
        // updateTimeObj(timeObj);
      },
      err => {
        console.log(err)
        alert('Please "Allow" location services for this site.')
      },
      { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
    )
  }

  return (
    <div>
      <Input readOnly value={time} />
      <Button primary onClick={uCS.bind(this, 'In')}>
        Clock In
      </Button>
      <Input readOnly value={'val'} />
      <Button color='red' onClick={uCS.bind(this, 'Out')}>
        Clock Out
      </Button>
    </div>
  )
}

export default TimeField
