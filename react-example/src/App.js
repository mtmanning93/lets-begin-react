import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps
 from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Matt" age="30" />
    </div>
  );
}

export default App;
