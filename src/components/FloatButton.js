import styled from "styled-components";
const Div = styled.div`
  position: relative;
`;
const Box = styled.button`
  position: fixed;
  right: 12%;
  bottom: 5vh;
  width: 80px;
  border: 0;
  height: 80px;
  border-radius: 100%;
  background: #BAEBDD;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  z-index: 1;
  @media(max-width: 800px) {
    right: 8%;
  }
  &:hover{
    background:#8be37f;
  }
`;
function FloatButton(props) {
  return (
    <Div>
      <Box>{props.value}</Box>
    </Div>
  );
}

export default FloatButton;
