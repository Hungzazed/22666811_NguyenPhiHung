import React from "react"
import Contact from "./Contact"

const ContactList = (props) => {
    const { list } = props
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

export default ContactList