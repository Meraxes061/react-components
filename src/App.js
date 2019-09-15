import React, { useState } from 'react'
import './App.css'
import {
  Dropdown, DropdownToggle, DropdownContent, DropdownItem, DropdownDivider, DropdownSubText, Alert, AlertLink, AlertDivider, AlertContent, AlertCloseButton
} from './components'

function App() {
  const [isDropdownActive, setDropdownState] = useState(false)
  const [isAlertActive, setAlertState] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown open={isDropdownActive}>
          <DropdownToggle
            text='Dropdown'
            onClick={() => setDropdownState(!isDropdownActive)} />
          <DropdownContent>
            <DropdownSubText>Links</DropdownSubText>
            <DropdownItem>
              <a href='#'>Dropdown Link Item</a>
            </DropdownItem>
            <DropdownDivider />
            <DropdownSubText>Plain Texts</DropdownSubText>
            <DropdownItem>Dropdown Plain Text Item</DropdownItem>
            <DropdownItem>Dropdown Plain Text Item Which Has Very Long Text</DropdownItem>
          </DropdownContent>
        </Dropdown>
        <br/>
        <br/>
        <br/>
        <button onClick={() => setAlertState(true)}>Show alert</button>
        <Alert open={isAlertActive}>
          <AlertContent>
            This is an alert 6 <AlertLink href='#'>see other examples from here</AlertLink>
            <AlertDivider />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <AlertLink href='#'>An other link</AlertLink>
          </AlertContent>
          <AlertCloseButton onClick={() => setAlertState(false)}>
            <i className="material-icons">cancel</i>
          </AlertCloseButton>
        </Alert>
      </header>
    </div>
  );
}

export default App;
