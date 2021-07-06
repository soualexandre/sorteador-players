
import styled from "styled-components";

const Div = styled.div`
position: relative;
`;
const Box = styled.div`
position: fixed;
right: 0;
top: 60vh;
 width: 100px;
 height: 100px;
 border-radius: 100%;
 background: #8BE37F;
`;

function FloatButton() {
  return (
    <Div>
        <Box>

        </Box>
    </Div>
  );
}

export default FloatButton;
