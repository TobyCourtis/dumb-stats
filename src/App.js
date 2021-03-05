import './App.css';
import SexCounter from './Counters/Sex'
import DrivingCounter from './Counters/Driving'
import EatingCounter from './Counters/Eating'
import FlyingCounter from './Counters/Flying'
import MasturbatingCounter from './Counters/Masturbating'
import PooingCounter from './Counters/Pooing'
import SpaceCounter from './Counters/Space'
import TrafficCounter from './Counters/Traffic'
import TVCounter from './Counters/TV'

function App() {

  return (
    <div className="App">
      <body className="App-body">
        <div className="counterDiv">
          <SexCounter className="counter" />
        </div>
        <div className="counterDiv">
          <DrivingCounter className="counter" />
        </div>
        <div className="counterDiv">
          <EatingCounter className="counter" />
        </div>
        <div className="counterDiv">
          <FlyingCounter className="counter" />
        </div>
        <div className="counterDiv">
          <MasturbatingCounter className="counter" />
        </div>
        <div className="counterDiv">
          <PooingCounter className="counter" />
        </div>
        <div className="counterDiv">
          <SpaceCounter className="counter" />
        </div>
        <div className="counterDiv">
          <TrafficCounter className="counter" />
        </div>
        <div className="counterDiv">
          <TVCounter className="counter" />
        </div>
      </body>
    </div>
  );
}

export default App;
