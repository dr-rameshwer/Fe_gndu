import ApiCall from "./components/ApiCall";
import CounterWithState from "./components/CounterWithState";
import CounterWithoutState from "./components/CounterWithoutState";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a paragraph</p>
      <CounterWithoutState />
      <CounterWithState />
      <ApiCall />
    </>
  );
}
export default App;
