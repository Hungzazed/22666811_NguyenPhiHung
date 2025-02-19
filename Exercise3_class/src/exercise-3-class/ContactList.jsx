import React from "react"
import Contact from "./Contact"

class ContactList extends React.Component {

  render() {
    const { list, deleteElement, deleteAllElement } = this.props
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {list.map((contact) => {
            return (
              <div key={contact.key}>
                <Contact contactDetail={contact} deleteElement={deleteElement}></Contact>
              </div>
            )
          })}
        </div>
        <br />
        <div className="row mb-3">
          <div className="col text-end">
            <button className="btn btn-danger btn-lg" onClick={deleteAllElement}>Delete All</button>
          </div>
        </div>
      </>

    )
  }
}

export default ContactList