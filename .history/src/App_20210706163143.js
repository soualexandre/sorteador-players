import InputPlayer from "./components/input";
import Player from "./components/Player";
import './global.css'
function App() {
  return (
    <>
      <div className="app">
        <h1>
          Organizador de equipes
        </h1>
        <InputPlayer />
        <Player />
      </div>
    </>
  );
}

export default App;
