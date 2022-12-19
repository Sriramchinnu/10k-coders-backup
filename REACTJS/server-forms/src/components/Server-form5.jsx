import React, { Component } from 'react';
// import Users from './users';
import axios from 'axios'

export default class Form5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                id: "",
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: "",
            },
            everyuser: [],

            editIndex: null,
        }
    }

    CheckingInput=(e)=>{
        console.log(e.target)
        var neweveryuser = {...this.state.person};
        neweveryuser[e.target.name] = e.target.value;
        this.setState({ person: neweveryuser });
    }

    createuser=()=>{
        axios({
            method: 'post',
            url: 'http://localhost:3004/user5/',
            data: this.state.person,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        var newcreateuser = [...this.state.everyuser];
        newcreateuser.push(this.state.person);
        this.setState({ everyuser: newcreateuser });
        this.clearform();
    }

    clearform =()=> {
        var freshform = {
            id: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: "",
        }
        this.setState({person : freshform})
    }
 
    editUser=(usr,i)=>{
        this.setState({person :usr , editIndex :i})
    }

    deleteuser=(usr ,id)=>{       
        var number= id + 1
        console.log(usr ,id);
        axios.delete("http://localhost:3004/user5/"+number).then((res)=>{
            this.componentDidMount()
        })
        // fetch('http://localhost:3002/form1/' , {method: 'DELETE'}).then((res)=>this.setState({person :everyuser}))
    }

    updateUser=()=>{
        var number = this.state.editIndex+1;
        axios({
            method:'put',
            url:'http://localhost:3004/user5/'+number,
            data: this.state.person
        })

        var newupdateuser = [...this.state.everyuser];
        newupdateuser[this.state.editIndex] = this.state.person;
        this.setState({everyuser: newupdateuser , editIndex:null});
        this.clearform();
    }

    render() {
        return (
            <div className='container'>
                <h4>Bootstrap Form Validation </h4><hr />
                <div className='ID'>
                    <label >ID</label><br />
                    <input type="number" class="form-control" name='id'  placeholder='id' disabled value={this.state.person.id} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Name'>
                    <label >Name</label><br />
                    <input type="text" class="form-control" name='name'  placeholder='Name' value={this.state.person.name} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Username'>
                    <label >Username</label><br />
                    <input type="text" class="form-control" name='username'  placeholder='Username' value={this.state.person.username} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Email'>
                    <label >Email</label><br />
                    <input type="text" class="form-control" name='email'  placeholder='Email' value={this.state.person.email} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Password'>
                    <label >Password</label><br />
                    <input type="password" class="form-control" name='password'  placeholder='Password' value={this.state.person.password} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Confirmpassword'>
                    <label >Confirm Password</label><br />
                    <input type="password" class="form-control" name='confirmpassword'  placeholder='Confirm Password' value={this.state.person.confirmpassword} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Message'>
                    <label >Message</label><br />
                    <textarea type="text" class="form-control" name="message"  placeholder='Message' cols="24" rows="3" value={this.state.person.message} onChange={(e)=>{this.CheckingInput(e)}}></textarea><br /><br />
                </div>
                {this.state.editIndex!==null ? <button type='button' className='btn btn-dark' onClick={this.updateUser}>UPDATE</button> :<button type='button' className='btn btn-primary' onClick={this.createuser}>SUBMIT</button>}

                <br /><br /><div className='container-fluid'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Confirmpassword</th>
                                <th>Message</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr, i) =>
                                <tr key={i}>
                                    <td>{usr.id}</td>
                                    <td>{usr.name}</td>
                                    <td>{usr.username}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.password}</td>
                                    <td>{usr.confirmpassword}</td>
                                    <td>{usr.message}</td>
                                    <td><button type='button' onClick={()=>{this.editUser(usr , i)}}>EDIT</button></td>
                                    <td><button type='button' onClick={()=>{this.deleteuser(usr, i)}}>DELETE</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        var serverdata = await axios.get("http://localhost:3004/user5/")
        // console.log(serverdata);
        this.setState({ everyuser: serverdata.data })
    }
}