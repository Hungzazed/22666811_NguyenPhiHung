import '../App.css'
import React from 'react';
class DisplayInfor extends React.Component {
    state = {
        isShow: true
    }

    render() {
        const { listUser } = this.props;
        return (
            <div>
                <button onClick={() => {
                    this.setState({isShow : !this.state.isShow})
                }}>{this.state.isShow ? 'Hide list user' : 'Show hide list user'}</button>
                {this.state.isShow && listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                            <div>My name is: {user.Name}</div>
                            <div>My Age: {user.Age}</div>
                            <button onClick={() => {
                                this.props.handleDeleteUser(user.id)
                            }}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default DisplayInfor
