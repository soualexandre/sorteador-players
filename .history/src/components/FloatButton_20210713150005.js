import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
import { toast } from "react-toastify";
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


function FloatButton() {
  const { player} = usePlayer();
  const cut = localStorage.getItem('cut')
  const history = useHistory();

  function handleSorteio() {
    player.forEach(players => {
      const valueOne = Math.random() * 100;
      const valueTwo = Math.random() * 100;
      const valueRandom = ((valueOne + valueTwo)/2)
      players.order = valueRandom;
    });
    handleOrder();
  }

  function handleOrder() {
   player.sort(function (a, b) {
      if (a.order < b.order) {
        return -1;
      } else {
        return true;
      }     
    });

   handleToasts();
  }
  function handleToasts(){
    if (player.length > 1 || cut !== "") {
      history.push('/result')
      toast.success("Os participantes foram sorteado com sucesso")
    }
    else {
      toast.error("Insira mais participantes para poder sortear")
    }
  }

  return (
    <Div>
      <Box onClick={handleSorteio}>Sortear</Box>
    </Div>
  );
}

export default FloatButton;
