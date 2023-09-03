import logo from './logo.svg';
import './App.css';
import RenderingLists from './components/RenderingLists';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionRenderingFunctional';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';
// import FunctionalGreetingWithProps
//  from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventFunctional from './components/EventFunctional';
// import EventClass from './components/EventClass';
// import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Matt" age="30" /> */}
      {/* <StatefulGreeting greeting="Im a stateful class component" name="Bob" /> */}
      {/* <StatefulGreetingWithCallback greeting="Im a stateful class component" name="Bob" /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventFunctional /> */}
      {/* <EventClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      <RenderingLists />
    </div>
  );
}

export default App;
