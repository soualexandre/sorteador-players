import InputPlayer from "./components/input";
import Player from "./components/Player";
import './global.css'
function App() {
  return (
    <>
      <div className="app">
        <InputPlayer />
        <Player />
      </div>
    </>
  );
}

export default App;
