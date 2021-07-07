import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";
import DeleteImage from "../images/delete.svg";

const Div = styled.div`
  list-style: none;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;
const Card = styled.div`
  position: relative;
  width: 60vw;
  height: 30px;
  border: 1px solid gray;
  padding: 20px;
  background: #1C1F23;
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: lighter;
  list-style: none;
  color: white;
  overflow: hidden;

  @media(max-width: 800px) {
    width: 90vw;
  }
  &:hover{
    background:rgba(0, 0, 0, 0.2);
  }

`;
const Image = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
`;
const P = styled.p`
background: #1C1F23 ;
`;
const Span = styled.span`
background: #1C1F23 ;
`;
function Player() {
  const { player, setPlayer } = usePlayer();

  function handleRemovePlayer(idPlayer) {
    const filterPlayer = player.filter((player) => player.id !== idPlayer);
    setPlayer(filterPlayer);
  }

  return (
    <Div>
      {player.map((player) => (
        <li key={player.id}>
          <Card>
            <P ml="10" mb="0" as="h4" size="md">
              <Span>{player.id + 1} - </Span> {player.value}{" "}
              <Image
                src={DeleteImage}
                onClick={() => handleRemovePlayer(player.id)}
              />
            </P>
          </Card>
        </li>
      ))}
    </Div>
  );
}

export default Player;
