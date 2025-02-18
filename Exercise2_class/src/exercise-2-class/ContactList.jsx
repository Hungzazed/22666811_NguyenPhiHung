import React from "react"
import Contact from "./Contact"

class ContactList extends React.Component {
    render() {
        const { list } = this.props
        return (
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {list.map((contact) => {
                    return (
                        <div key={contact.key}>
                            <Contact contactDetail={contact}></Contact>
                        </div> 
                    )
                })}
            </div>
        )
    }
}

export default ContactList