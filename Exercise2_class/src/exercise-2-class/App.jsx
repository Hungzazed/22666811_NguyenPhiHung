import ContactList from "./ContactList"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listContact: [
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
    }
  }

  render() {
    return (
      <>
        <ContactList list={this.state.listContact}></ContactList>
      </>
    )
  }
}

export default App
