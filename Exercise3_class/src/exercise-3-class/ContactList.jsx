import React from "react"
import Contact from "./Contact"

class ContactList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          {this.props.list.map((contact) => {
            return (
              <div key={contact.key}>
                <Contact contactDetail={contact} deleteElement={this.props.deleteElement}></Contact>
              </div>
            )
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', margin: '50px'}}> 
          <button style={{backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px', border: '1px solid'}} onClick={this.props.deleteAllElement}>Delete All</button>
        </div>
      </div>
    )
  }
}

export default ContactList