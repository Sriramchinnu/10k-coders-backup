import React from 'react';

const Form = ({handleSubmit,handleChange,user,btnText}) => {
    return (
        
            <div>
              <form action="">
           <label>ID</label>
          <input type="text" name="id" value={user.id} disabled onChange={(e) => handleChange(e)} />
          <label>University</label>
          <input type="text" name="university" value={user.university} onChange={(e) => handleChange(e)} />
          <br /><br />
          <label>Institute</label>
          <input type="text" name="institute" value={user.institute} onChange={(e) => handleChange(e)} />
          <br /><br />
          <label>Branch</label>
          <select name="branch" value={user.branch} onChange={(e) => handleChange(e)} >
            <option >---Select---</option>
            <option >ECE</option>
            <option >CSE</option>
            <option >MECH</option>
            <option >EEE</option>
            <option >IT</option>
          </select>
          <br /><br />
          <label >Degree</label>
          <select name="degree" value={user.degree} onChange={(e) => handleChange(e)}>
            <option >---Select---</option>
            <option >BE</option>
            <option >B.Tech</option>
            <option >Diploma</option>
            <option >Degree</option>
          </select>
          <br /><br />
          <div onChange={(e) => handleChange(e)}>
            <input type="radio" name="status" value="Pursuing" checked={user.status === "Pursuing"} />&nbsp;&nbsp;
            <label >Pursuing</label>&nbsp;&nbsp;
            <input type="radio" name="status" value="Completed" checked={user.status === "Completed"} />&nbsp;&nbsp;
            <label >Completed</label>
          </div>
          
          <br /><br />
          <label>Average CPI</label>
          <input type="number" name="cpi" value={user.cpi} onChange={(e) => handleChange(e)} />
          upto
          <input type="number" name="sem" value={user.sem} onChange={(e) => handleChange(e)} />Th Semister
          <br /><br />
          <label>Experience</label>
          <input type="number" name="exp" value={user.exp} onChange={(e) => handleChange(e)} />
          <br /><br />
          <label>Your Website</label>
          <input type="text" name="web" value={user.web} onChange={(e) => handleChange(e)} />
          <br /><br />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>{btnText}</button>
        </form>
        </div>
    );
}

export default Form;