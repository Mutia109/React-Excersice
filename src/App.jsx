import './App.css';
import Home from './pages/Home';

function App() {
  console.log('giphy api', process.env.REACT_APP_GIPHY_KEY);
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;