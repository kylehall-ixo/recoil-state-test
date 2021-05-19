import logo from './logo.svg';
import './App.css';
import { CharacterCounter } from './CharacterCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CharacterCounter />
      </header>
    </div>
  );
}

export default App;
