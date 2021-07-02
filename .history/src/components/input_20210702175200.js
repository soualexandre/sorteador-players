
import { Button,Input, Container,Stack } from "@chakra-ui/react"
function InputPlayer() {
    return (
        <Container>
            <Stack spacing={3} mt={10} display="flex">
                <Input placeholder="large size" size="lg" />
            </Stack>
            <Button colorScheme="blue">Button</Button>

        </Container>
    );
}

export default InputPlayer;
