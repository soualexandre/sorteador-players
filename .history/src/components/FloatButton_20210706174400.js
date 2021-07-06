
import styled from "styled-components";

const Div = styled.div`
position: fixed;
`;
const Box = styled.div`
position: absolute;
left: 45px;
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
