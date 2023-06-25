import './App.css';
import Jokes from './components/Jokes';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <h1>useAxios hook</h1>
      <Jokes />
      <Posts />
    </div>
  );
}

export default App;
