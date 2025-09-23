import react from 'react';
import Cardcreate from './components/Cardcreate';
import './App.css'
import Carddata from './components/Carddata';

function App() {


  return (
    <>
    <div>
      <Carddata />
    </div>
    </>
  )
}

export default App



















// this command for running the json object
// npx json-server --watch data/Dummydata.json --port 3000 --static ./data