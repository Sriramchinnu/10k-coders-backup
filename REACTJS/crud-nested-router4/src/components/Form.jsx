import React from 'react';

const Form = ({handleSubmit,handleUser,btnText,user}) => {
    return (
        <div>
             <form >
                     <label >ID</label>
                    <input type="text"  name="id" value={user.id} disabled onChange={(e)=>handleUser(e)}/><br /><br />
                    <label >Street</label>
                    <input type="text"  name="street" value={user.street}  onChange={(e)=>handleUser(e)}/><br /><br />
                    <label >City,State</label>
                    <input type="text"  name="city" value={user.city} onChange={(e)=>handleUser(e)} />&nbsp;
                    <input type="text"  name="state" style={{width:"40px"}} value={user.state}  onChange={(e)=>handleUser(e)}/>
                    <br /><br />
                    <label >Zip Code</label>
                    <input type="text"  name="zipcode" value={user.zipcode} onChange={(e)=>handleUser(e)} />
                    <br /><br />
                    <label >Country</label>
                    <input type="text"  name="country" value={user.country}  onChange={(e)=>handleUser(e)}/>
                    <br /><br />
                    
                    <button type='button' className='btn btn-primary' onClick={handleSubmit}>{btnText}</button>
                </form>
        </div>
    );
}

export default Form;