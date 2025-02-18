import React from "react"
function Contact(probs) {
    const contactDetail = probs.contactDetail
    return (
        <div style={{ width: '200px', height: '250px', border: '1px solid' }}>
            <h1>{contactDetail.firstName}</h1>
            <h4>{contactDetail.lastName}</h4>
            <hr />
            <h4>Phone: {contactDetail.phone}</h4>
            <hr />
            <h4>Address: {contactDetail.address}</h4>
        </div>
    )
}

export default Contact