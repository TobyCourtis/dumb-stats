import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import {counterInputVars} from './counter-logic/counter-logic'

function App() {

  var counterInput = counterInputVars()

  return (
    <div className="App">
      <header className="App-header">
        <CountUp
          className="counter"
          start={counterInput.start}
          end={counterInput.end}
          duration={3}
          separator=","
          decimal="."
          suffix=""
          onEnd={() => console.log('Ended! 👏')}
          onStart={() => console.log('Started! 💨')}
        >
        </CountUp>
        <p className="counterParagraph">
            People are shagging right now
        </p>
      </header>
    </div>
  );
}

export default App;
