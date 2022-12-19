import { Component } from "react";

export default class Form3 extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                street: "",
                city: "",
                zipcode: "",
                country: ""
            },
            everyuser: [],

            indexofedit: null,
        }

    }

    CheckingInput = (e) => {
        console.log(e.target)
        var newperson = { ...this.state.person };
        newperson[e.target.name] = e.target.value;
        this.setState({ person: newperson })
    }

    addUser = () => {
        var neweveryuser = [...this.state.everyuser];
        neweveryuser.push(this.state.person);
        this.setState({ everyuser: neweveryuser })
        this.ClearForm()
    }

    ClearForm = () => {
        var Freshform = {
            street: "",
            city: "",
            zipcode: "",
            country: ""
        }
        this.setState({person : Freshform})
    }
    edituser = (usr, i) => {
        this.setState({ person: usr, indexofedit: i })
    }

    deleteuser=(usr)=>{
        var deleteones = this.state.everyuser.filter((myuser)=>
           myuser.street!== usr.street
        )
        this.setState({everyuser : deleteones})
    }

    updateuser=()=>{
        var newupdateuser = [...this.state.everyuser];
        newupdateuser[this.state.indexofedit]=this.state.person;
        this.setState({everyuser : newupdateuser , indexofedit:null});
        this.ClearForm()
    }
    render() {
        return (
            <div className="container">
                <fieldset>
                    <form>
                        <h2>Address</h2>
                        <hr />
                        <div className="Street">
                            <label htmlFor="Street:">Street:</label>
                            <input type="text" id="street" name="street" value={this.state.person.street} onChange={(e) => { this.CheckingInput(e) }} /> <br />
                            <input type="text" id="add" name="add" /><br /><br />
                        </div>

                        <div className="city">
                            <label htmlFor="City State:">City State:</label>
                            <input type="text" id="city" name="city" value={this.state.person.city} onChange={(e) => { this.CheckingInput(e) }} />&nbsp;
                            <input type="text" id="state" /><br /><br />
                        </div>

                        <div className="zip">
                            <label htmlFor="Zip code:">Zip code:</label>
                            <input type="text" id="Zip" name="zipcode" value={this.state.person.zipcode} onChange={(e) => { this.CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="country">
                            <label htmlFor="Country:">Country:</label>
                            <input type="text" id="country" name="country" value={this.state.person.country} onChange={(e) => { this.CheckingInput(e) }} /><br /><br />
                        </div>

                        {this.state.indexofedit!==null ? <button type="button" className="swap" onClick={this.updateuser}>UPDATE</button> : <button type="button" onClick={this.addUser}>OK</button>}
                    </form>
                </fieldset><br /><br /><br />

                <div id="userTable">
                    <table border="1">
                        <thead>
                            <tr>
                                <td>Street</td>
                                <td>City,State</td>
                                <td>Zip Code</td>
                                <td>Country</td>
                                <td>EDIT</td>
                                <td>DELETE</td>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr, i) =>
                                <tr key={i}>
                                    <td>{usr.street}</td>
                                    <td>{usr.city}</td>
                                    <td>{usr.zipcode}</td>
                                    <td>{usr.country}</td>
                                    <td>
                                        <button type="button" className="btn1" onClick={()=>{this.edituser(usr , i)}}>EDIT</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn2" onClick={()=>{this.deleteuser(usr ,i)}}>DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }
}