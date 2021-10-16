import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

const ApiCapture = () => {
  const [showInput, setShowInput] = useState(false)

  const handleClick = () => {
    setShowInput(true)
  }

  const handleInputChange = e => {
    localStorage['api_key'] = e.target.value
    setShowInput(false)
  }

  return (
    <div className='api_key_container'>
      {!showInput ? (
        <a href='#' onClick={handleClick}>
          Set API Key
        </a>
      ) : (
        <Input type='text' onChange={handleInputChange}></Input>
      )}
    </div>
  )
}
export default ApiCapture
