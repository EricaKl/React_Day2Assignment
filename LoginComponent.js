import React from 'react';
import  {useRef} from 'react';

import Welcome from './WelcomeComponent'


export const UserNameContext = React.createContext();

/* Using Props*/
// class Login extends React.Component
// {
   
//   render()
//   {
//     return(
//         <div>
//             <Welcome Username = "Erica Attal" />
//         </div>
//     );
//   }
// }


/* Using Context */
// class Login extends React.Component
// {
    
//     render()
//     {
//         return(
//             <UserNameContext.Provider value="Erica Attal">
//                 <Welcome />
//             </UserNameContext.Provider>
//         );
//     }
// }

const Login = ({ setUserData }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    setUserData(userData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" ref={usernameRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;