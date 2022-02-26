import './App.css';
// import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import CatList from './components/CatList'
import Favorites from './components/Favorites'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Cats App </h1>
      <NavBar />
      </header>
      
        <div className='Body'>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/">
              <CatList />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
