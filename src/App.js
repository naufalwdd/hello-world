import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
      <Message />
      <Greet name = "Naufal" heroName = "Tamfan">
        <p>This is Children Properties</p>
      </Greet>
      <Welcome name = "Widad" heroName = "Ganteng"></Welcome>
    </div>
  );
}

export default App;
