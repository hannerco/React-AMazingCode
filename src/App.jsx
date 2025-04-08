import {useState} from 'react';
import Child from './components/Child';

function App(){
  const [condition, setCondition] = useState(false);


  const handleClick = () => {
    setCondition(!condition);
  }

  return(
    <>
    <button onClick={handleClick}>Cambiar estado</button>
    {condition && <Child></Child>}
    
    </>
  )


}



export default App;