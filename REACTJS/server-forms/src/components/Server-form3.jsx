import axios from 'axios';
import React, { Component } from 'react';


export default class Form3 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                username: "",
                password: "",
                email: "",
                gender1: "",
                gender2: "",
                dob: "",
                dob2: "",
                dob3: "",
                height: "",
                weight:""
            },
            eachuser: [],

            editindex : null,
        }
    }

    CheckingInput=(e)=>{
        console.log(e.target)
        var newperson = {...this.state.person};
        newperson[e.target.name]=e.target.value;
        this.setState({person : newperson})
    }
    
    submit=()=>{
        axios({
            method:'post',
            url:'http://localhost:3004/User3/',
            data: this.state.person,
            headers:{
                'Content-Type':'application/json'
            }
        })
        var neweachusers = [...this.state.eachuser];
        neweachusers.push(this.state.person);
        this.setState({eachuser : neweachusers})
        this.Clearform()
    }

    Clearform=()=>{
        var freshform = {
                id:"",
                username: "",
                password: "",
                email: "",
                gender1: "",
                gender2: "",
                dob: "",
                dob2: "",
                dob3: "",
                height: "",
                weight:""
        }
        this.setState({person : freshform})
    }

    edituser=(usr , i)=>{
        this.setState({person : usr , editindex:i })
    }

    updateuser=()=>{
        var number = this.state.editindex+1;
        axios({
            method:'put',
            url:'http://localhost:3004/User3/'+number,
            data:this.state.person
        })
        var newupdates = [...this.state.eachuser];
        newupdates[this.state.editindex] = this.state.person;
        this.setState({eachuser : newupdates, editindex:null});
        this.Clearform()
    }

    deleteuser=(user ,id)=>{
        var number = id+1;
        console.log(number);
        console.log(user , id);
        axios.delete("http://localhost:3004/User3/"+number).then((res)=>{
            this.componentDidMount()
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='Username'>
                    <label htmlFor="Username">ID</label><br />
                    <input type="text" id='uname' className='form-control' name='username' disabled placeholder='id' value={this.state.person.id} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                </div>

                <div className='Username'>
                    <label htmlFor="Username">Username</label><br />
                    <input type="text" id='uname' className='form-control' name='username' placeholder='Username' value={this.state.person.username} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                </div>

                <div className='Password'>
                    <label htmlFor="Password">Password</label><br />
                    <input type="password" id='password' className='form-control' name='password' placeholder='Password' value={this.state.person.password} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                </div>

                <div className='Email'>
                    <label htmlFor="Email">Email Address</label><br />
                    <input type="Email" id='email' className='form-control' name='email' placeholder='Email' value={this.state.person.email} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                </div>

                <div className='man'>
                    <select name="gender1" id="man" className='form-control'  value={this.state.person.gender1} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>I am a man</option>
                        <option>I am a women</option>
                        <option>I am a others</option>
                    </select><br />
                </div>

                <div className='women'>
                    <select name="gender2" id="women" className='form-control' value={this.state.person.gender2} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>I want to find women</option>
                        <option>I want to find man</option>
                        <option>I want to find others</option>
                    </select><br />
                </div>

                <div className='dob'>
                    <label htmlFor="">Date of Birth</label><br />
                    <select name="dob" id="year"  value={this.state.person.dob} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>year</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                    </select>
                    <select id="month" name="dob2" value={this.state.person.dob2} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select name="dob3" id="day" value={this.state.person.dob3} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>day</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>

                    </select><br /><br /><br />
                </div>

                <div className='height'>
                    <label htmlFor="hieght">Height / Weight</label><br />
                    <select name="height" id="Height" value={this.state.person.height} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>Height</option>
                        <option>5.1</option>
                        <option>5.2</option>
                        <option>5.3</option>
                        <option>5.4</option>
                        <option>5.5</option>
                        <option>5.6</option>
                        <option>5.9</option>
                        <option>6.0</option>
                        <option>6.2</option>
                    </select>
                    <select name="weight" id="weight" value={this.state.person.weight} onChange={(e)=>{this.CheckingInput(e)}}>
                        <option>Weight</option>
                        <option>70kg</option>
                        <option>75kg</option>
                        <option>80kg</option>
                        <option>85kg</option>
                        <option>90kg</option>
                        <option>95kg</option>
                        <option>100kg</option>
                    </select>
                </div><br /><br /><br />
                {this.state.editindex !== null ? <button type='button' className='btn btn-secondary' onClick={this.updateuser}>UPDATE</button> : <button type='button'  className='btn btn-primary' onClick={this.submit}>SUBMIT</button>}

                <br /><br /><br /><div className='usertable'>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email Address</th>
                                <th>Gender-1</th>
                                <th>Gender-2</th>
                                <th>Date of Birth</th>
                                <th>Height / Weight</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.eachuser.map((usr , i)=>
                               <tr key={i}>
                               <td>{usr.id}</td>
                               <td>{usr.username}</td>
                               <td>{usr.password}</td>
                               <td>{usr.email}</td>
                               <td>{usr.gender1}</td>
                               <td>{usr.gender2}</td>
                               <td>{usr.dob}-{usr.dob2}-{usr.dob3}</td>
                               <td>{usr.height}-{usr.weight}</td>
                               <td>
                                <button type='button' className='btn btn-warning' onClick={()=>{this.edituser(usr , i)}}>EDIT</button>
                               </td>
                               <td>
                                <button type='button' className='btn btn-danger' onClick={()=>{this.deleteuser(usr , i)}}>DELETE</button>
                               </td>
                           </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
    async componentDidMount(){
        let callingusers = await axios.get('http://localhost:3004/User3/')
        this.setState({eachuser : callingusers.data})
    }
}