import React  from "react";    
 export default class RegistrationClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            Name: '',
            Address: '',
            DOB:'',
            Password:'',
            Email:'' 

        };
    }

         handleChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})
        }


         SubmitDetails =(event)=>{
            event.preventDefault();
          console.log(this.state.Name + "," + this.state.Address 
          + "," + this.state.DOB +"," + this.state.Password +","+ this.state.Email)
        }

        render()
        {
            return(
                <div class="container">
           
                <form onSubmit={this.SubmitDetails}>
                <table>
                    <tr>
                        <td> <label>Name:</label></td>
                        <td> <input type="text" name="Name" value={this.state.Name}
                        onChange={this.handleChange}></input></td>
                    </tr>
                    
                    <tr>
                        <td><label>Address:</label></td>
                        <td><input type="text" name="Address" value={this.state.Address}
                        onChange={this.handleChange}></input></td>
                    </tr>
                  
                    <tr>
                        <td><label>DOB:</label></td>
                        <td><input type="date" name="DOB" value={this.state.DOB}
                        onChange={this.handleChange}></input></td>
                    </tr>
                    
                    <tr>
                        <td><label> Create Password:</label></td>
                        <td><input type="password" name="Password" value={this.state.Password}
                        onChange={this.handleChange}></input></td>
                    </tr>
                    
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input type="email" name="Email" value={this.state.Email}
                        onChange={this.handleChange}></input></td>
                    </tr>
    
                    
                    </table>
                    <br/>
                    <button type="submit">Register</button>
                </form>
              
                
                </div>
            );
        }
    }
