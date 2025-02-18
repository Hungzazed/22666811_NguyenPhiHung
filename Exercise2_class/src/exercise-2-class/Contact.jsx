import React from "react"
class Contact extends React.Component{
    
    render() {
        const {contactDetail} = this.props
        return (
            <div style={{width:'200px', height:'250px', border:'1px solid'}}>
                <h1>{contactDetail.firstName}</h1>
                <h4>{contactDetail.lastName}</h4>
                <hr />
                <h4>Phone: {contactDetail.phone}</h4>
                <hr />
                <h4>Address: {contactDetail.address}</h4>
            </div>
        )
    }
}

export default Contact