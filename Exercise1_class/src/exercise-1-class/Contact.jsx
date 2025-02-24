import React from "react"
class Contact extends React.Component{
    render() {
        const {contactDetail} = this.props
        return (
            <div style={{width:'200px', height:'200px'}}>
                <div style={{border:'1px solid gray', padding:'5px'}}>
                  <h1>{contactDetail.firstName}</h1>
                  <h4>{contactDetail.lastName}</h4>
                </div>
                <div style={{border:'1px solid gray', padding:'5px'}}>
                  <h4>Phone: {contactDetail.phone}</h4>
                </div>
                <div style={{border:'1px solid gray', padding:'5px'}}>
                  <h4>Address: {contactDetail.address}</h4>
                </div>
            </div>
        )
    }
}

export default Contact