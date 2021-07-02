
import { Button,Input, Container,Stack } from "@chakra-ui/react"
function InputPlayer() {
    return (
        <Container>
            <Stack spacing={3} mt={10}>
                <Input placeholder="large size" size="lg" />
                <Button colorScheme="blue">Button</Button>
            </Stack>
        </Container>
    );
}

export default InputPlayer;
