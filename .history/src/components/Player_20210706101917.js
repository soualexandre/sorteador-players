import { Box, Container, Heading } from "@chakra-ui/react";
import {  useState } from "react";
import { usePlayer } from "../provider/playerProvider";

function Player() {
  const { player} = usePlayer();
  // const [addPlayer, setAddPlayer] = useState({})
  return (
    <div>
    <Container maxW="900px" mt="5">
      <Box
        maxW="900px"
        borderWidth="1px"
        borderRadius="20px"
        justifyContent="center"
        overflow="hidden"
      >
        <Box m="5" as="a">
          <Heading ml="10" mb="0" as="h4" size="md">
            {player}
          </Heading>
        </Box>
      </Box>
    </Container>
    </div>
  );
}

export default Player;
