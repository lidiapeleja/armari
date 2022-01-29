import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import ButtonPrimary from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonPrimary></ButtonPrimary>
      </header>
    </div>
  );
}

export default App;
