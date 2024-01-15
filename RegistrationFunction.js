import React, { useState } from 'react'

export default function Registration()
{
    var arr = {
       Name: '',
       Address: '',
       DOB:'',
       Password:'',
       Email:'' 
        
    }

    const [values, setValue] = useState({arr})

    const handleChange = (event)=>
    {
        const {name, value} = event.target;
        setValue({...values,[name]:value});
    }

    const SubmitDetails=(event)=>{
        event.preventDefault();
        console.log(values);
    }

        return(
        <div class="container">
           
            <form onSubmit={SubmitDetails}>
            <table>
                <tr>
                    <td> <label>Name:</label></td>
                    <td> <input type="text" name="Name" value={values.Name}
                    onChange={handleChange}></input></td>
                </tr>
                
                <tr>
                    <td><label>Address:</label></td>
                    <td><input type="text" name="Address" value={values.Address}
                    onChange={handleChange}></input></td>
                </tr>
              
                <tr>
                    <td><label>DOB:</label></td>
                    <td><input type="date" name="DOB" value={values.DOB}
                    onChange={handleChange}></input></td>
                </tr>
                
                <tr>
                    <td><label> Create Password:</label></td>
                    <td><input type="password" name="Password" value={values.Password}
                    onChange={handleChange}></input></td>
                </tr>
                
                <tr>
                    <td><label>Email:</label></td>
                    <td><input type="email" name="Email" value={values.Email}
                    onChange={handleChange}></input></td>
                </tr>

                
                </table>
                <br/>
                <button type="submit">Register</button>
            </form>
          
            
            </div>
        )
    }

