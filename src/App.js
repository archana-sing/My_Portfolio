import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Routes from './Routes/Route';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <About/>
      </Routes>
     
    </div>
  );
}

export default App;