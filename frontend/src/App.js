import Header from './components/Header'
import signUp from './components/signup'
import Flightsearch from './components/flightsearch'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className='container'>
      <Login />

    </div>
  );
}

export default App;
