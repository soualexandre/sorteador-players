
import styled from "styled-components";

const Div = styled.div`
position: relative;
`;
const Box = styled.div`
position: fixed;
right: 120px;
top: 80vh;
 width: 100px;
 height: 100px;
 border-radius: 100%;
 background: #8BE37F;
 display: flex;
`;

function FloatButton() {
  return (
    <Div>
        <Box>
            sortear
        </Box>
    </Div>
  );
}

export default FloatButton;
