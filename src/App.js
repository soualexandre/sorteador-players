import InputPlayer from './components/input'
import { ChakraProvider } from "@chakra-ui/react"
import Player from './components/Player'


function App() {
  return (
    <ChakraProvider>
      <InputPlayer />
      <Player/>
    </ChakraProvider>
  );
}

export default App;
