import React from "react"

const Contact = (props) => {
    return (
        <div style={{ width: '250px'}}>
          <div style={{ border: '1px solid gray', padding: '5px' }}>
            <h1>{props.contactDetail.firstName}</h1>
            <h4>{props.contactDetail.lastName}</h4>
          </div>
          <div style={{ border: '1px solid gray', padding: '5px' }}>
            <h4>Phone: {props.contactDetail.phone}</h4>
          </div>
          <div style={{ border: '1px solid gray', padding: '5px' }}>
            <h4>Address: {props.contactDetail.address}</h4>
          </div>
          <div className="list-group-item text-end" style={{ border: '1px solid gray', padding: '5px', display: 'flex', justifyContent: 'right' }}>
                <button style={{backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px', border: '1px solid'}} className="btn btn-danger" onClick={() => {props.deleteElement(props.contactDetail.key)}}>Delete</button>
          </div>
      </div>
    )
}

export default Contact