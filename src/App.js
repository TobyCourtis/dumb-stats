import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import {counterInputVars} from './counter-logic/counter-logic'

function App() {

  var counterInput = counterInputVars()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How many people are shagging now:
        </p>
        <CountUp
          start={counterInput.start}
          end={counterInput.end}
          duration={1}
          separator=","
          decimal="."
          suffix=" shaggers"
          onEnd={() => console.log('Ended! 👏')}
          onStart={() => console.log('Started! 💨')}
        >
      </CountUp>
      </header>

    </div>
  );
}

export default App;
