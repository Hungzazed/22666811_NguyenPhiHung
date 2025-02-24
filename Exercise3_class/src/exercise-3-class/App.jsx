import ContactList from "./ContactList"
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listContact: [
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
    }
  }

  deleteElement = (id) => {
    this.setState({
      listContact: this.state.listContact.filter((contact) => contact.key !== id)
    })
  }

  deleteAllElement = () => {
    this.setState({
      listContact: []
    })
  }

  render() {
    return (
      <>
        <ContactList list={this.state.listContact} deleteElement={this.deleteElement} deleteAllElement={this.deleteAllElement}></ContactList>
      </>
    )
  }
}

export default App
