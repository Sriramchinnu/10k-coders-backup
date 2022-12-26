import React from 'react';

const Form = ({handleSubmit,handleUser,user,btnText}) => {

    return (
        <div>
                <form action="">
                <label htmlFor="">ID:</label>
                    <input type="text" name="id" value={user.id} disabled onChange={(e) => handleUser(e)} />
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="username" value={user.username} onChange={(e) => handleUser(e)} />
                    <br /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={user.password} onChange={(e) => handleUser(e)} />
                    <br /><br />
                    <label htmlFor="">Email Address:</label>
                    <input type="email" name="email" value={user.email} onChange={(e) => handleUser(e)} />
                    <br /><br />
                    <select name="gender" value={user.gender} onChange={(e) => handleUser(e)}>
                        <option >Select</option>
                        <option >I am a Women </option>
                        <option >I am a Man</option>
                    </select>
                    <br /><br />
                    <select name="pickgender" value={user.pickgender} onChange={(e) => handleUser(e)}>
                        <option >Select</option>
                        <option >I want to find Man</option>
                        <option >I want to find Women</option>
                    </select>
                    <br /><br />
                    <label htmlFor="">Date of Birth:</label>
                    <input type="number" name="year" placeholder="year"  max={2022} min={1990}  value={user.year} onChange={(e) => handleUser(e)}/>
                    <input type="number" name="month" placeholder="month" max={12} min={1}  value={user.month} onChange={(e) => handleUser(e)}/>
                    <input type="number" name="date" placeholder="date" max={31} min={1} value={user.date} onChange={(e) => handleUser(e)}/>
                    <br /><br />
                    <label htmlFor="">Height/Weight:</label>
                    <select name="height" value={user.height} onChange={(e) => handleUser(e)}>
                        <option >Height</option>
                        <option >5.3</option>
                        <option >5.4</option>
                        <option >5.6</option>
                        <option >5.7</option>
                        <option >5.8</option>
                    </select>
                    <select name="weight" value={user.weight} onChange={(e) => handleUser(e)}>
                        <option >Weight</option>
                        <option >55</option>
                        <option >56</option>
                        <option >57</option>
                        <option >58</option>
                        <option >59</option>
                    </select>
                    <br /><br />
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>{btnText}</button>
                </form>

        </div>
    );
}

export default Form;