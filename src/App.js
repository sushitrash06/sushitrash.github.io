import './App.css';
import Navbar from './Components/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Footer from './Components/Footer'
import Gallery from './Components/Pages/Design'
import Project from './Components/Pages/Project'

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/desain' component={Gallery}/>
          <Route path='/Projects' component={Project}/>
        </Switch>
        <Footer/>
      </Router>    
  );
}
export default App;
