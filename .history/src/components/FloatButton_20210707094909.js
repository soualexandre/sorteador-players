import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
import { toast, ToastContainer } from "react-toastify";
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
    right: 8%;
  
  }
`;
const notifyError = () => toast(
  "Wow so easy!", {
  type: 'error',
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}
)
function FloatButton() {
  const { player, setPlayer } = usePlayer();
  console.log(player)
  const history = useHistory();
  function handleSorteio() {
    const a = player.sort(function (a, b) {
      if (a.order < b.order) {
        return -1;
      } else {
        return true;
      }
    });
    if (player.length > 1) {
      setPlayer(a);
      history.push('/result');

    }
    else {
      notifyError();
    }
  }
  return (

    <Div>
    <ToastContainer autoClose={8000} position="bottom-left"/>
      <Box onClick={handleSorteio}>Sortear</Box>
    </Div>
  );
}

export default FloatButton;
