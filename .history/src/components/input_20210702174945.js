
import { Input, Container,Stack } from "@chakra-ui/react"
function InputPlayer() {
    return (
        <Container>
            <Stack spacing={3} mt={4}>
                <Input placeholder="large size" size="lg" />
            </Stack>
        </Container>
    );
}

export default InputPlayer;
