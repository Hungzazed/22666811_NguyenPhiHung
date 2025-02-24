import React from "react"
class Contact extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{ width: '250px'}}>
              <div style={{ border: '1px solid gray', padding: '5px' }}>
                <h1>{this.props.contactDetail.firstName}</h1>
                <h4>{this.props.contactDetail.lastName}</h4>
              </div>
              <div style={{ border: '1px solid gray', padding: '5px' }}>
                <h4>Phone: {this.props.contactDetail.phone}</h4>
              </div>
              <div style={{ border: '1px solid gray', padding: '5px' }}>
                <h4>Address: {this.props.contactDetail.address}</h4>
              </div>
              <div className="list-group-item text-end" style={{ border: '1px solid gray', padding: '5px', display: 'flex', justifyContent: 'right' }}>
                    <button style={{backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px', border: '1px solid'}} className="btn btn-danger" onClick={() => {this.props.deleteElement(this.props.contactDetail.key)}}>Delete</button>
              </div>
          </div>
        )
    }
}

export default Contact