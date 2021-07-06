
import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Div = styled.div`
 list-style: none;
 margin-top: 50px;
margin: auto;
`;
const Card = styled.div`
  width: 800px;
  height: 60px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  list-style: none;
  display: flex;
  justify-content:Center;
`;
function Player() {
  const { player } = usePlayer();
  return (
    <Div>
      {player.map((player) => (
        <li key={player.id}>
          <Card>
            <p ml="10" mb="0" as="h4" size="md">
              {player.value}
            </p>
          </Card>
        </li>
      ))}

    </Div>
  );
}

export default Player;
