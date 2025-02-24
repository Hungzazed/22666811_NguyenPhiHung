import ContactList from "./ContactList"
import React from "react"

const App = () => {
  const listContact = [
    {
      key: 1,
      firstName: 'Chidi1',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: 'go vap, hcm'
    },
    {
      key: 2,
      firstName: 'Chidi2',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: 'go vap, hcm'
    },
    {
      key: 3,
      firstName: 'Chidi3',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: 'go vap, hcm'
    },
    {
      key: 4,
      firstName: 'Chidi4',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: 'go vap, hcm'
    }
  ]
  return (
    <>
      <ContactList list={listContact}></ContactList>
    </>
  )
}

export default App
