
import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Div = styled.div`
 list-style: none;
 padding-top: 40px;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
  width: 80vw;
  height: 60px;
  border: 1px solid white;
  padding: 20px;
  border-radius: 2px;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content:Center;
  margin-bottom: 15px;
  color: white;
`;
function Player() {
  const { player } = usePlayer();
  return (
    <Div>
      {player.map((player) => (
        <li key={player.id}>
          <Card>
            <p ml="10" mb="0" as="h4" size="md">
            <span>{player.id+1} - </span>  {player.value}
            </p>
          </Card>
        </li>
      ))}

    </Div>
  );
}

export default Player;
