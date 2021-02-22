import './App.css';
import Counter from './Counter'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Counter className="counter" />
        <p className="counterParagraph">
            People are shagging right now
        </p>
      </header>
    </div>
  );
}

export default App;
