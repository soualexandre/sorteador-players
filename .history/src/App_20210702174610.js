import Input from './components/input'
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <ChakraProvider>
      <Input />
    </ChakraProvider>
  );
}

export default App;
