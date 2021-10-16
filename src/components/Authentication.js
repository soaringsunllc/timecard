import React, { useState } from 'react'
import { Card, Form, Input, Button, Icon } from 'semantic-ui-react'
import ApiCapture from './ApiCapture'
import { useApp } from './AppProvider'
import Airtable from 'airtable'

function Authentication () {
  const [password, setPassword] = useState('')

  const { user, dispatch } = useApp()

  if (localStorage['auth_until'] && +localStorage['auth_until'] <= Date.now()) {
    delete localStorage['user']
  }

  if (!user && localStorage['user']) {
    dispatch({ type: 'SET_USER', payload: localStorage['user'] })
  }

  if (
    localStorage['auth_until'] &&
    +localStorage['auth_until'] > Date.now() &&
    user
  ) {
    dispatch({ type: 'SET_AUTH', payload: true })
    return <>Loading</>
  }

  const authenticate = e => {
    e.preventDefault()

    var base = new Airtable({ apiKey: localStorage['api_key'] }).base(
      'app7hR5UDZ4st97XS'
    )

    base('Employees')
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 1,
        view: 'Grid view',
        fields: ['Emp Username', 'Emp Password'],
        filterByFormula: `{Emp Username}='${user}'`
      })
      .eachPage(
        function page (records) {
          if (
            records[0]?.fields?.['Emp Password'] &&
            records[0]?.fields?.['Emp Username']
          ) {
            if (records[0].fields['Emp Password'] === password) {
              dispatch({ type: 'SET_AUTH', payload: true })
              localStorage['auth_until'] = Date.now() + 1000 * 60 * 60 //authenticated for one hour
              localStorage['user'] = user
            }
          }
        },
        function done (err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }

  return (
    <>
      <Card className='Authentication'>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Input
              placeholder='Username'
              onChange={e =>
                dispatch({ type: 'SET_USER', payload: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Field>
          <Button animated primary onClick={authenticate}>
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
        </Form>
      </Card>
      {user}
      <ApiCapture />
    </>
  )
}

export default Authentication
