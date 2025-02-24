import Contact from "./Contact"
const App = () => {
  const chidi = {
    firstName: 'Chidi',
    lastName: 'Anagonye',
    phone: '555-366-8987',
    address: 'go vap, hcm'
  }
  return (
    <>
      <Contact contactDetail={chidi}></Contact>
    </>
  )
}

export default App
