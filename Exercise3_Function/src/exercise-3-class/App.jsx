import ContactList from "./ContactList"
import {React, useState} from 'react'

const App = () => {
   
  const [listContact, setListContact] = useState(
    [
      {
        key: 1,
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: 'go vap, hcm'
      },
      {
        key: 2,
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: 'go vap, hcm'
      },
      {
        key: 3,
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: 'go vap, hcm'
      },
      {
        key: 4,
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: 'go vap, hcm'
      }
    ]
  )

  const deleteElement = (id) => {
    setListContact(listContact.filter((contact) => contact.key !== id))
  }

  const deleteAllElement = () => {
    setListContact([])
  }

  return (
    <>
      <ContactList list={listContact} deleteElement={deleteElement} deleteAllElement={deleteAllElement}></ContactList>
    </>
  )
}

export default App
