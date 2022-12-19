import axios from "axios";
import { Component } from "react";

export default class Form4 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                university: "",
                institute: "",
                branch: "",
                degree: "",
                status:"",
                // subjects:[],
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
        if(e.target.name == "status"){
            this.setState({status:e.target.value})
        }
    }
        // else{
        //     var Checkboxes = [...this.state.person.subjects];
        //     if(Checkboxes.length == 0){ 
        //         Checkboxes.push(e.target.value)
        //     }else{
        //         let check = Checkboxes.find((cb) => cb == e.target.value);
        //       if(check){
        //         Checkboxes = Checkboxes.filter((cb) => cb != e.taget.value);
        //       }else{
        //         Checkboxes.push(e.target.value)
        //       }    
        //     }
        //     this.setState({ subjects: Checkboxes });
        // }
    // };
    adduser = () => {
        // console.log(this.state.person)
        axios({
            method:'post',
            url:'http://localhost:3004/User4/',
            data: this.state.person,
            headers:{
                'Content-Type':'application/json',
            }
        })
        var neweveryUser = [...this.state.everyuser];
        neweveryUser.push(this.state.person);
        this.setState({ everyuser: neweveryUser });
        this.clearform()
    }

    clearform = () => {
        var freshform = {
            id:"",
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status:"",
            average: "",
            experience: "",
            website: "",
        }
        this.setState({ person: freshform })
    }

    edituser = (usr , i)=>{
        // console.log("editing")
        {this.setState({person : usr , IndexofEdit : i })}
    }

    deleteuser=(user , i)=>{
        var number = i+1;
        console.log(number);
        // console.log(user,id);
        axios.delete(" http://localhost:3004/User4/"+number).then((res)=>{
            this.componentDidMount()
        })
    }

    updateUser = ()=>{
        var number = this.state.IndexofEdit+1;
        axios({
            method:"post",
            url:' http://localhost:3004/User4/'+number,
            data:this.state.person
        })
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
                            <label htmlFor="University">ID :</label>
                            <input type="text" name="id" id="Uname" disabled value={this.state.person.id} onChange={(e) => { this.checkingInput(e) }} /><br /><br />
                        </div>
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

                        <div className="Status">
                            <label htmlFor="Status">Status :</label>
                            <input type="radio" name="status" value={"Pursuing"} checked={this.state.person.status =="Pursuing"} onChange={(e)=>{this.checkingInput(e)}}/>Pursuing
                            <input type="radio" name="status" value={"Completed"} checked={this.state.person.status =="Completed"} onChange={(e)=>{this.checkingInput(e)}}/>Completed
                        </div><br />

                         {/* <div className="Subjects" >
                            <label htmlFor="Subject">Subjects :</label>
                            <input type="checkbox"  value="HTML" onChange={(e)=>{this.checkingInput(e)}} checked={this.state.person.subjects.indexOf("HTML")> -1}/>HTML &nbsp;
                            <input type="checkbox"  value="CSS" onChange={(e)=>{this.checkingInput(e)}} checked={this.state.person.subjects.indexOf("CSS")>-1}/>CSS &nbsp;
                            <input type="checkbox"  value="JAVASCRIPT" onChange={(e)=>{this.checkingInput(e)}} checked={this.state.person.subjects.indexOf("JAVASCRIPT")>-1}/>JAVASCRIPT &nbsp;
                            <input type="checkbox"  value="REACT JS" onChange={(e)=>{this.checkingInput(e)}} checked={this.state.person.subjects.indexOf("REACT JS")>-1}/>REACT JS 
                         </div><br /> */}

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
                                <th>ID</th>
                                <th>University</th>
                                <th>Institute</th>
                                <th>Branch</th>
                                <th>Degree</th>
                                <th>Status</th>
                    
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
                                    <td>{usr.id}</td>
                                    <td>{usr.university}</td>
                                    <td>{usr.institute}</td>
                                    <td>{usr.branch}</td>
                                    <td>{usr.degree}</td>
                                    <td>{usr.status}</td>
                                    {/* <td>{usr.subjects}</td> */}
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

    async componentDidMount(){
        let response = await axios.get(" http://localhost:3004/User4/")
        this.setState({everyuser : response.data})
    }
}