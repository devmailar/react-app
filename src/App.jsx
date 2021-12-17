import logo from './logo.svg';
import cat from './assets/cat.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cat} className="Cat-logo" alt="logo" />
        <p>
          Hello and welcome to my website.
        </p>
      </header>
    </div>
  );
}

export default App;
