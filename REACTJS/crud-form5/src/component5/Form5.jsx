import React, { Component } from 'react';

export default class Form5 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                name: "ss",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: ""
            },
            everyuser : [],

            EditIndex : null
        }
    }
    
        CheckingInput=(e)=>{
            console.log(e.target)
            var newperson = {...this.state.person};
            newperson[e.target.name] = e.target.value;
            this.setState({person : newperson})
        }
    
        submit=()=>{
            var neweachusers = [...this.state.everyuser];
            neweachusers.push(this.state.person);
            this.setState({everyuser : neweachusers})
            this.clearform()
        }

        clearform=()=>{
            var freshform ={
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: ""
            }
            this.setState({person : freshform})
        }

        edituser=(usr , i)=>{
            this.setState({person : usr , editindex: i })
        }

        updateuser=()=>{
            var newupdateones = [...this.state.everyuser];
            newupdateones[this.state.EditIndex] = this.state.person;
            this.setState({everyuser : newupdateones, EditIndex : null});
            this.clearform()
        }

        deleteuser=(usr)=>{
            var deleteones = this.state.everyuser.filter((myuser)=>
               myuser.email!== usr.email
            )
            this.setState({everyuser : deleteones})
        }

    render() {
        return (
            <div className='container'>
                    <h4>Bootstrap Form Validation </h4><hr />
                    <div className='Name'>
                        <label htmlFor="Name">Name</label><br />
                        <input type="text" class="form-control" name='name' id="name" placeholder='Name' value={this.state.person.name} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Username'>
                        <label htmlFor="Username">Username</label><br />
                        <input type="text" class="form-control" name='username' id="username" placeholder='Username' value={this.state.person.username} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Email'>
                        <label htmlFor="Email">Email</label><br />
                        <input type="text" class="form-control" name='email' id="email" placeholder='Email' value={this.state.person.email} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Password'>
                        <label htmlFor="Password">Password</label><br />
                        <input type="password" class="form-control" name='password' id="password" placeholder='Password' value={this.state.person.password} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Confirmpassword'>
                        <label htmlFor="Confirmpassword">Confirm Password</label><br />
                        <input type="password" class="form-control" name='confirmpassword'  id="confirmpassword" placeholder='Confirm Password' value={this.state.person.confirmpassword} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Message'>
                        <label htmlFor="Message">Message</label><br />
                        <textarea type="text" class="form-control" name="message" id="message" placeholder='Message' cols="24" rows="3" value={this.state.person.message} onChange={(e)=>{this.CheckingInput(e)}}></textarea><br /><br />
                    </div>

                    {this.state.EditIndex!== null ? <button type='button' className='btn btn-dark' onClick={this.updateuser}>UPDATE</button> : <button type="button" className='btn btn-primary' onClick={this.submit}>SUBMIT</button>}
                


                <br /><div className='table'>
                     <table border={1}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Confirm Password</th>
                                <th>Message</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr ,i)=>
                               <tr key={i}>
                                   <td>{usr.name}</td>
                                   <td>{usr.username}</td>
                                   <td>{usr.email}</td>
                                   <td>{usr.password}</td>
                                   <td>{usr.confirmpassword}</td>
                                   <td>{usr.message}</td>
                                   <td><button type='button' className='btn btn-success' onClick={()=>{this.edituser(usr , i)}}>EDIT</button></td>
                                   <td><button type="button" className='btn btn-danger' onClick={()=>{this.deleteuser(usr , i)}}>DELETE</button></td>
                               </tr>
                            )}
                        </tbody>
                     </table>
                </div>
            </div>
            

        );
    }
}