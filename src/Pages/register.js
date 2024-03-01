import React, {Component} from "react";
import "./register.css"

class CreateList extends Component {
    constructor(props) {
        super(props)
        this.setState({
            Items: {},
            text: "",
        })
    }

    onType(event) {
        this.text = event.target.value
        this.props.table[this.props.name] = this.text
        console.log(this.text)
    }

    render() {
        return (
            <React.Fragment>
                <label for={this.props.name}><b>{this.props.name}</b></label>
                <input type="text" placeholder={this.props.text} name={this.props.name}  id={this.props.name} onChange={this.onType.bind(this)} required/>
            </React.Fragment>
        )
    }
}

class MyRegistrationComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            successMsg: "Register"
        }
    }

    render() {
        const Items = {}
        return (
            <React.Fragment>

                <h1>Register an ID</h1>
                <p>Create an ID</p>
                
                
                    <div class="container">
                        <hr/>

                        <CreateList name="Email" text="Enter Email Address" table = {Items} />
                        <CreateList name="Name" text="Enter First Name" table = {Items} />
                        <CreateList name="Surname" text="Enter Surname" table = {Items} />
                        <CreateList name="Programme" text="Enter Programme" table = {Items} />
                        <CreateList name= "Year" text= "Enter Current Year" table={Items} />

                        <br />
                        <a class="registerbtn" href="/id-card" onClick={
                            () => {
                                try {
                                    console.log(Items)
                                    alert("Registered 😊")
                                    localStorage.setItem("Items", JSON.stringify(Items));
                                    this.setState({ successMsg: "Success!" })
                                    
                                } catch(e) {
                                    console.log(e)
                                }
                            }
                        }>
                            {this.state.successMsg}
                        </a>
                        
                    </div>
               
            </React.Fragment>
        )
    }

}




export default MyRegistrationComponent;