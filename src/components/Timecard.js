import React, { useEffect, useState } from 'react'
import Airtable from 'airtable'
import { useApp } from './AppProvider'
import DayGroup from './DayGroup'

import '../styles/TimeCard.css'

function Timecard () {
  const [apiCallDone, setApiCallDone] = useState(false)
  const { empName, punches, refetch, user, dispatch } = useApp()

  useEffect(() => {
    const base = new Airtable({ apiKey: localStorage['api_key'] }).base(
      'app7hR5UDZ4st97XS'
    )

    base('Punch Times')
      .select({
        maxRecords: 20,
        view: 'Grid view',
        sort: [{ field: 'ID', direction: 'desc' }],
        filterByFormula: `AND(Username = "${user}")`
      })
      .eachPage(
        function page (records, fetchNextPage) {
          setApiCallDone(true)

          dispatch({ type: 'SET_PUNCHES', payload: records })

          fetchNextPage()
        },
        function done (err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }, [refetch, user, dispatch])

  return (
    <div className='TimeCard'>
      <h2>Hello, {empName?.split(' ')[0]}</h2>
      {apiCallDone ? (
        <DayGroup
          inOutNext={punches[0]?.fields['Punch Type'] === 'In' ? 'Out' : 'In'}
        />
      ) : (
        'Loading...'
      )}
      <br />
      {punches?.map((p, ind) => (
        <div
          key={ind}
        >{`${p.fields['Punch Time']} (${p.fields['Punch Type']})`}</div>
      ))}
    </div>
  )
}

export default Timecard
