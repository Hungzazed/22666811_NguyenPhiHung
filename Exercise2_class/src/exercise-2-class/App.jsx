import ContactList from "./ContactList"
function App() {
  const listContact = [
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
  return (
    <>
      <ContactList list={listContact}></ContactList>
    </>
  )
}

export default App
