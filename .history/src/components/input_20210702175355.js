
import { Button,Input, Container,Stack, Flex} from "@chakra-ui/react"
function InputPlayer() {
    return (
        <Container>
            <Stack spacing={3} mt={10}>
                <Input placeholder="large size" size="lg" />
            </Stack>
            <Button colorScheme="blue">Button</Button>
        </Container>
    );
}

export default InputPlayer;
