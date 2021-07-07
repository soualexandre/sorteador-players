import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";

const Div = styled.div`
  position: relative;
`;
const Box = styled.button`
  position: fixed;
  right: 18%;
  bottom: 5vh;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #8be37f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  z-index: 1;
  @media(max-width: 800px) {
    right: 10%;
  
  }
`;

function FloatButton() {
  const { player, setPlayer } = usePlayer();

  function handleSorteio() {
    const a = player.sort(function (a, b) {
      if (a.order < b.order) {
        return -1;
      } else {
        return true;
      }
    });
    setPlayer(a);
    console.log(player);
  }
  return (
    <Div>
      <Link to="/result">
        <Box onClick={handleSorteio}>Sortear</Box>
      </Link>
    </Div>
  );
}

export default FloatButton;
