import React from "react";
import AddUserInfor from "./AddUserInfor"
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {

    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 34 },
            { id: 3, Name: "Chien", Age: 32 },
            { id: 4, Name: "Chien", Age: 12 },
        ]
    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUser: listUserClone
        })
    }

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }
    render() {
        return (
            <div>

                <AddUserInfor handleAddnewUser={this.handleAddnewUser}>
                </AddUserInfor>

                <hr />
                <DisplayInfor listUser={this.state.listUser}
                    handleDeleteUser={this.handleDeleteUser}
                ></DisplayInfor>

            </div>
        );
    }

}
export default Mycomponent;
