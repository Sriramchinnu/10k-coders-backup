import React from 'react';

const UserForm = ({user,handleChange,handleSubmit,btnText}) => {
    return (
        <div>
             <form >
                 <label >ID:</label>
                    <input type="text" name="id" value={user.id} disabled  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >Name:</label>
                    <input type="text" name="name" value={user.name}  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >User Name:</label>
                    <input type="text" name="username" value={user.username} onChange={(e)=>handleChange(e)} />
                    <br /><br />
                    <label >Email:</label>
                    <input type="email" name="email" value={user.email}  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >Password:</label>
                    <input type="password" name="password"  value={user.password} onChange={(e)=>handleChange(e)} />
                    <br /><br />
                    <label >Confirm Password:</label>
                    <input type="password" name="confirmpassword"  value={user.confirmpassword} onChange={(e)=>handleChange(e)} />
                    <br /><br />
                    <label >Message:</label>
                    <textarea name="message" cols="20" rows="2" value={user.message} onChange={(e)=>handleChange(e)}></textarea>
                    <br /><br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit} >{btnText}</button>              
                      </form>
        </div>
    );
}

export default UserForm;