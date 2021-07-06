
import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content:Center;
`;
const Div2 = styled.div`
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
      <Div2>
        {player.map((player) => (
          <li key={player.id}>
                <p ml="10" mb="0" as="h4" size="md">
                  {player.value}
                </p>
          </li>
        ))}
      </Div2>
    </Div>
  );
}

export default Player;
