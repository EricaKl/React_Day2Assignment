import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/LoginComponent';
import Formikdemo from './Component/FormikDemo';
import Registration from './Component/RegistrationFunction';
import RegistrationClass from './Component/RegistrationClass';
import EffectUse from './Component/EffectUse';
import Welcome from './Component/WelcomeComponent';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      {/* <Login /> */}
      {/* <Formikdemo /> */}
      {/* <Registration /> */}
      {/* <RegistrationClass /> */}
      {/* <EffectUse /> */}
      {!userData ? (
        <Login setUserData={setUserData} />
      ) : (
        <Welcome userData={userData} />
      )}
     
      </header>
    </div>
  );
}

export default App;
