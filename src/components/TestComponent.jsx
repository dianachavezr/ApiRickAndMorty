import React from 'react'
import CloseButton from './Buttons/closeButton/CloseButton'
import LinksButtons from './Buttons/linkButton/LinksButtons'
import ToggleSwitch from './Buttons/pageConfig/PageConfig'


const TestComponent = () => {
  return (
    <div>
    <LinksButtons/>
    <CloseButton/>
    <ToggleSwitch label=" " />
    </div>
  )
}

export default TestComponent