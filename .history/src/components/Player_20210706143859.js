
import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  width: 800px;
  height: 60px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  list-style: none;
`;
function Player() {
  const { player } = usePlayer();
  return (
    <div>
      <Container>
        {player.map((player) => (
          <li key={player.id}>
                <p ml="10" mb="0" as="h4" size="md">
                  {player.value}
                </p>
          </li>
        ))}
      </Container>
    </div>
  );
}

export default Player;
