import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';

function App() {

  var start = 0
  var end = 0


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How many people are shagging?
        </p>
        <CountUp
          start={start}
          end={end}
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
