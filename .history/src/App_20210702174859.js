import InputPlayer from './components/input'
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <ChakraProvider>
      <InputPlayer />
    </ChakraProvider>
  );
}

export default App;
