import React from "react";
import { UserNameContext } from "./LoginComponent";


/* Using Props */
// class Welcome extends React.Component
// {

//  constructor(props)
//  {
//  super()
//  this.props = props;
//  }

//     render()
//     {
//         return(
//             <div>
//                 <h1>Welcome {this.props.Username}</h1>
//             </div>
//         );
//     }
// }


/* Using Context */
// function Welcome()
// {    const value = React.useContext(UserNameContext); 
//     return(
//         <h1>Welcome {value}</h1>
//     );
// }


const Welcome = ({ userData }) => {
    return (
      <div>
        <h2>Welcome, {userData.username}!</h2>
        {/* <p>Password: {userData.password}</p> */}
      </div>
    );
  };
export default Welcome;