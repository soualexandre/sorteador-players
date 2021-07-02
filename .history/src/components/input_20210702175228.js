
import { Button,Input, Container,Stack, Flex} from "@chakra-ui/react"
function InputPlayer() {
    return (
        <Container>
            <Flex>
            <Stack spacing={3} mt={10} display="flex">
                <Input placeholder="large size" size="lg" />
            </Stack>
            <Button colorScheme="blue">Button</Button>
            </Flex>
        </Container>
    );
}

export default InputPlayer;
