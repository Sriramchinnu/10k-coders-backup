import { Component } from "react";
import axios from 'axios'
export default class Form1 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                firstname: "",
                lastname: "",
                dateofbirth: "",
                emailid: "",
                mobilenumber: ""
            },
            eachuser : [],

            editindex : null,
        }
    }
    CheckingInput=(e)=>{
        console.log(e.target)
        var newperson = {...this.state.person};
        newperson[e.target.name] = e.target.value;
        this.setState({person:newperson})
    }
    
    submit=()=>{

        axios({
            method:'post',
            url:'http://localhost:3002/user',
            data:this.state.person,
            headers:{'Content-Type':'application/json'
        }
        })
        console.log("adding user");
        var neweachusers = [...this.state.eachuser];
        neweachusers.push(this.state.person);
        this.setState({eachuser : neweachusers})
        this.ClearForm()
    }


    ClearForm=()=>{
        var Freshform = {
                firstname: "",
                lastname: "",
                dateofbirth: "",
                emailid: "",
                mobilenumber: ""
    }
    this.setState({person: Freshform})
    }

    EditUser=(usr ,i)=>{
        this.setState({person : usr , editindex : i})
    }


    updateUser=()=>{
        var number=this.state.editindex+1
    
        axios({
            method:'put',
            url:'http://localhost:3002/user/'+number,

            data:this.state.person,
        
        })
        var latestUpdates =[...this.state.eachuser];
        latestUpdates[this.state.editindex] = this.state.person;
        this.setState({eachuser:latestUpdates , editindex:null})
        this.ClearForm()
    }

    deleteUser=(usr,id)=>{
        console.log(usr,id)
     var  number=id+1;
       axios.delete("http://localhost:3002/user/" + number).then((res)=>
       this.componentDidMount()
       )
    }
    render() {
        return (
            <div id="userDetails">
                <div className="container">
                    <fieldset>
                        <form>
                            <h1>HTML Form</h1>
                            <div className="Fname">
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" name="firstname" id="fname" value={this.state.person.firstname} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="Lname">
                                <label htmlFor="lname">Last name:</label>
                                <input type="text" name="lastname" id="lname" value={this.state.person.lastname} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="date">
                                <label htmlFor="date">Date of Birth:</label>
                                <input type="text" name="dateofbirth" id="date" value={this.state.person.dateofbirth} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Email id:</label>
                                <input type="text" name="emailid" id="email" value={this.state.person.emailid} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="mobile">
                                <label htmlFor="mobile">Mobile Number:</label>
                                <input type="text" name="mobilenumber" id="mobile"  value={this.state.person.mobilenumber} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br /><br />
                            </div>

                            {this.state.editindex !== null ? <button type="button" className="swap" onClick={this.updateUser}>UPDATE</button> : <button type="button" onClick={this.submit}>SUBMIT</button>}
                        </form>
                    </fieldset>
                </div><br /><br /><br />


                <div id="userTable">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last name</th>
                                <th>Date of Birth</th>
                                <th>Email id</th>
                                <th>Mobile Number</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.eachuser.map((usr , i)=>
                               <tr key={i}>
                                <td>{usr.firstname}</td>
                                <td>{usr.lastname}</td>
                                <td>{usr.dateofbirth}</td>
                                <td>{usr.emailid}</td>
                                <td>{usr.mobilenumber}</td>
                                <td><button type="button" className="btn1" onClick={()=>{this.EditUser(usr , i)}}>EDIT</button></td>
                                <td><button type="button" className="btn2" onClick={()=>{this.deleteUser(usr , i)}}>DELETE</button></td>
                               </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    async componentDidMount(){
        let mydata=await axios.get("http://localhost:3002/user")
        console.log(mydata)
        this.setState({eachuser:mydata.data})
    }

}