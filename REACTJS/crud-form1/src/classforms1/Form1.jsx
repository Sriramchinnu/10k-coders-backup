import { Component } from "react";

export default class Form1 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                average: "",
                experience: "",
                website: ""
            },
            everyuser: [],
           
            IndexofEdit:null,
        }
    }
    checkingInput = (e) => {
        var newusers = { ...this.state.person };
        newusers[e.target.name] = e.target.value;
        this.setState({ person: newusers })
        console.log(newusers)
    }
    adduser = () => {
        console.log(this.state.person)
        var neweveryUser = [...this.state.everyuser];
        neweveryUser.push(this.state.person);
        this.setState({ everyuser: neweveryUser });
        this.clearform()
    }
    clearform = () => {
        var freshform = {
            university: "",
            institute: "",
            branch: "",
            degree: "",
            average: "",
            experience: "",
            website: ""
        }
        this.setState({ person: freshform })
    }

    edituser = (usr , i)=>{
        // console.log("editing")
        {this.setState({person : usr , IndexofEdit : i })}
    }
    deleteuser=(usr)=>{
        // console.log("deleting the user")
        // var latestUsers = [...this.state.everyuser];
        var latestUsers = this.state.everyuser.filter((myuser)=>
        myuser.degree !== usr.degree);
        this.setState({everyuser : latestUsers})
    }
    updateUser = ()=>{
        var latestUsers = [...this.state.everyuser];
        latestUsers[this.state.IndexofEdit] = this.state.person;
        this.setState({everyuser : latestUsers , IndexofEdit :null})
        this.clearform()
    }
    render() {
        return (
            <div className="Container">
                <fieldset>
                    <legend>Registration Details</legend>
                    <form>
                        <div className="University">
                            <label htmlFor="University">University :</label>
                            <input type="text" name="university" id="Uname" value={this.state.person.university} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>

                        <div className="Institute">
                            <label htmlFor="Institute">Institute :</label>
                            <input type="text" name="institute" id="Iname" value={this.state.person.institute} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>

                        <div className="Branch">
                            <label htmlFor="Branch">Branch :</label>
                            <select name="branch" id="branch" value={this.state.person.branch} onChange={(e) => { this.checkingInput(e) }}>
                                <option>---Select---</option>
                                <option>CSE</option>
                                <option>EEE</option>
                                <option>ECE</option>
                                <option>CIVIL</option>
                                <option>MECHANICAL</option>
                            </select><br /><br />
                        </div>

                        <div className="degree">
                            <label htmlFor="Degree">Degree :</label>
                            <select name="degree" id="deg" value={this.state.person.degree} onChange={(e) => { this.checkingInput(e) }}>
                                <option>---Select---</option>
                                <option>BTECH</option>
                                <option>M.TECH</option>
                                <option>MBA</option>
                                <option>MSC</option>
                            </select><br /><br />
                        </div>

                        <div className="average">
                            <label htmlFor="Average CPI" id="avg">Average CPI:</label>
                            <input type="text" name="average" id="average" min="1" max="80" value={this.state.person.average} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>

                        <div className="experience">
                            <label htmlFor="Experience" id="ex">Experience :</label>
                            <input type="text" name="experience" id="exp" min="1" max="10" value={this.state.person.experience} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>

                        <div className="website">
                            <label htmlFor="Website or Blog" id="we">Website or Blog :</label>
                            <input type="text" name="website" id="web" min="1" max="10" value={this.state.person.website} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>

                        {this.state.IndexofEdit !==null ? <button type="button" className="swap" onClick={this.updateUser}>UPDATE USER</button> : <button type="button" onClick={this.adduser}>ADD DETAILS</button>}
                    </form>
                </fieldset><br /><br />


                <div id="userTable">
                    <table border="2" >
                        <thead>
                            <tr>
                                <th>University</th>
                                <th>Institute</th>
                                <th>Branch</th>
                                <th>Degree</th>
                                <th>AverageCPI</th>
                                <th>Experience</th>
                                <th>Website</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr, i) => (
                                <tr key={i}>
                                    <td>{usr.university}</td>
                                    <td>{usr.institute}</td>
                                    <td>{usr.branch}</td>
                                    <td>{usr.degree}</td>
                                    <td>{usr.average}</td>
                                    <td>{usr.experience}</td>
                                    <td>{usr.website}</td>
                                    <td>
                                        <button type="button" className="btn1" onClick={()=>{this.edituser(usr , i)}}>EDIT</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn2" onClick={()=>{this.deleteuser(usr , i)}}>DELETE</button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}