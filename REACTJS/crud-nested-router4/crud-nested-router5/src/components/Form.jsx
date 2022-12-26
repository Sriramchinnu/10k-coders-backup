import React from 'react';

const Form = ({handleSubmit,handleUser,user,btnText}) => {
    return (
        <div>
             <form action="">
                <label >ID:</label>
                <input type="text" name="id" value={user.id} disabled onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >First Name:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Last Name:</label>
                <input type="text" name="lname" value={user.lname}  onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Date of Birth:</label>
                <input type="date" name="dob" value={user.dob} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Email:</label>
                <input type="email" name="email"  value={user.email} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Mobile:</label>
                <input type="text" name="mobile" value={user.mobile} onChange={(e)=>handleUser(e)} />
                <br /><br />
            
                <button type='button' className='btn btn-primary' onClick={handleSubmit}>{btnText}</button> 
               
            </form>
        </div>
    );
}

export default Form;