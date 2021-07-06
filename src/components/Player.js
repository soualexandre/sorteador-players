import { Box, Container, Heading } from "@chakra-ui/react";

import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Card = styled.div`
  margin-top: 20px;
  width: 800px;
  height: 60px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  font-size: 40px;
`;
function Player() {
  const { player } = usePlayer();
  return (
    <div>
      <Container maxW="900px" mt="5">
        {player.map((player) => (
          <li key={player.id}>
            <Box
              maxW="900px"
              borderWidth="1px"
              borderRadius="20px"
              justifyContent="center"
              overflow="hidden"
            >
              <Box m="5" as="a">
                <Heading ml="10" mb="0" as="h4" size="md">
                  {player.value}
                </Heading>
              </Box>
            </Box>
          </li>
        ))}
      </Container>
    </div>
  );
}

export default Player;
