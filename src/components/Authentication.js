import React, { useState } from 'react'

import { Card, Form, Input, Button, Icon } from 'semantic-ui-react'
import USERS from '../config/USERS'
import API from '../config/API'
import Airtable from 'airtable'

function Authentication ({ user, setUser, setAuth }) {
  const [password, setPassword] = useState('')

  const authenticate = e => {
    e.preventDefault()

    var base = new Airtable({ apiKey: API.key }).base('app7hR5UDZ4st97XS')

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
            if (records[0].fields['Emp Password'] === password) setAuth(true)
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
    <Card className='Authentication'>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input
            placeholder='Username'
            onChange={e => setUser(e.target.value)}
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
  )
}

export default Authentication
