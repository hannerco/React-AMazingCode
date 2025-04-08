import {useState} from 'react';
import Child from './components/Child';
import HelloUser from './components/HelloUser';

function App(){
  const [displayName, setDisplayname] = useState("");

  const login = (name) => {
    setDisplayname(name);
  }

  return (
    <div>
      <h1>State Up | Comunicación entre hermanos</h1>

      <h2>Hola {displayName}</h2>

      <HelloUser username={displayName}></HelloUser>

      <Child handleLogin={login} username={displayName}> </Child>
    </div>
  );
}



export default App;