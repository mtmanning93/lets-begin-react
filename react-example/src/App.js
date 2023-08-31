import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps
 from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Matt" age="30" /> */}
      {/* <StatefulGreeting greeting="Im a stateful class component" name="Bob" /> */}
      {/* <StatefulGreetingWithCallback greeting="Im a stateful class component" name="Bob" /> */}
      <StatefulGreetingWithPrevState greeting="Im a stateful class component" name="Bob" />
    </div>
  );
}

export default App;
