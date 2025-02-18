import React from "react";
class AddUserInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Age: ''
        }
    }

    handleOnchangeName = (event) => {
        this.setState({
            ...this.state,
            Name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            ...this.state,
            Age: event.target.value
        })
    }

    handleInput = (event) => {
        this.setState({
            valueInput: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        //console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }
    render() {
        return (
            <>
                <div>
                    <form action=""
                        onSubmit={(event) => this.handleOnSubmit(event)}>
                        
                        <label htmlFor="">Your Name</label>
                        <input type="text"
                            value={this.state.Name}
                            onChange={(event) => this.handleOnchangeName(event)} />
                        
                        <br />
                        <label htmlFor="">Your Age</label>
                        <input type="text"
                            value={this.state.Age}
                            onChange={(event) => this.handleOnchangeAge(event)} />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>

            </>
        );
    };
}
export default AddUserInfor;
