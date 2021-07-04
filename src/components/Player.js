import { Box, Container, Heading } from "@chakra-ui/react";

function Player() {
  return (
    <Container maxW="900px" mt="5">
      <Box
        maxW="900px"
        borderWidth="1px"
        borderRadius="20px"
        justifyContent="center"
        overflow="hidden"
      >
        <Box m="5" as="a" href="/blog-post-thing">
          <Heading ml="10" mb="0" as="h4" size="md">
            Alexandre Souza dos Santos
          </Heading>
        </Box>
      </Box>
    </Container>
  );
}

export default Player;
