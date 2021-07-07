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
  const { player, setPlayer } = usePlayer();
  const history = useHistory();

  function handleSorteio() {
    player.forEach(players => {
      const valueRandom = Math.random() * 100;

      players.order = valueRandom;
      setPlayer(player)

    });

    handleOrder();
  }

  function cut() {
  
    for( let i = 0 ; i<= player.length; i++){
      const a = player.slice(0,2);
      console.log(a)
    }

  }

  function handleOrder() {
    cut();

    const a = player.sort(function (a, b) {
      if (a.order < b.order) {
        return -1;
      } else {
        return true;
      }
    });


    if (player.length > 1) {
      setPlayer(a);
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
