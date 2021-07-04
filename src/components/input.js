import React, { useSate } from "react";
import { Button, Input, Container, Stack } from "@chakra-ui/react";
function InputPlayer() {

//   const [listName, setListName] = useSate({
//     name: ""
//   });
// console.log(listName.name);

  return (
    <Container maxW="900px">
      <Stack spacing={3} mt={10} direction="row" alignItems="center">
        <Input
          height="55px"
          // onChange={(e) => setListName({name: e.target.value})}
          bg="white"
          type="text"
          placeholder="Player name"
          color="black"
          size="lg"
        />
        <Button bg="#93DAA6" color="black" height="55px" w="100px">
          Adicionar
        </Button>
      </Stack>
    </Container>
  );
}

export default InputPlayer;
