import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import Airtable from 'airtable'
import { useApp } from './AppProvider'

const TimeField = ({ inOut }) => {
  const { user, dispatch } = useApp()
  const [makeDisabled, setMakeDisabled] = useState(false)

  const uCS = () => {
    setMakeDisabled(true)

    navigator.geolocation.getCurrentPosition(
      position => {
        const {
          coords: { latitude, longitude },
          timestamp
        } = position

        const base = new Airtable({ apiKey: localStorage['api_key'] }).base(
          'app7hR5UDZ4st97XS'
        )

        base('Punch Times').create(
          [
            {
              fields: {
                Username: user,
                'Punch Time': timestamp,
                'Punch Latitude': latitude,
                'Punch Longitude': longitude,
                'Punch Type': inOut
              }
            }
          ],
          err => {
            if (err) return alert(err)
            dispatch({ type: 'UPDATE_REFETCH', payload: true })
            setMakeDisabled(false)
          }
        )
      },
      err => {
        console.log(err)
        alert('Please "Allow" location services for this site.')
      },
      { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
    )
  }

  return (
    <>
      <Button
        primary={inOut === 'In'}
        secondary={inOut === 'Out'}
        onClick={uCS.bind(this, inOut)}
        disabled={makeDisabled}
      >
        Clock {inOut}
      </Button>
    </>
  )
}

export default TimeField
