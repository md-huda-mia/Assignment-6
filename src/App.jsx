import "./App.css";
import Counter from "./components/TasbiCounter/counter";
import Countries from "./pages/Countries/Countries";
import Posts from "./pages/Post/Posts";

function App() {
  return (
    <>
      <Counter />
      <Posts />
      <Countries />
    </>
  );
}

export default App;
