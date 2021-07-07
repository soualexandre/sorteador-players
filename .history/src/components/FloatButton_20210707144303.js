import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
import { toast, ToastContainer } from "react-toastify";
const Div = styled.div`
  position: relative;
`;
const Box = styled.button`
  position: fixed;
  right: 12%;
  bottom: 5vh;
  width: 100px;
  border: 0;
  height: 100px;
  border-radius: 100%;
  background: #8be37f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  z-index: 1;
  @media(max-width: 800px) {
    right: 8%;
  }
`;

function FloatButton() {
  const { player, setPlayer } = usePlayer();
  const history = useHistory();

  function handleSorteio() {
    player.forEach(players => {
      const valueRandom = Math.floor(Math.random() * 100);

      players.order = valueRandom;
      setPlayer(player)

    });

    handleOrder();
  }
function cut (){
  const a = player.slice([1, [2]]);
  console.log("slice ", a);
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
