import './CSS/App.css';
import SexCounter from './counters/Sex'
import DrivingCounter from './counters/Driving'
import EatingCounter from './counters/Eating'
import FlyingCounter from './counters/Flying'
import MasturbatingCounter from './counters/Masturbating'
import PooingCounter from './counters/Pooing'
import SpaceCounter from './counters/Space'
import TrafficCounter from './counters/Traffic'
import TVCounter from './counters/TV'

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
