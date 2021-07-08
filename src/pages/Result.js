import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

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
  height: 20px;
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #1C1F23;
  font-size: 18px;
  list-style: none;
  margin-bottom: 15px;
  color: white;
  overflow: hidden;
  &:hover{
    background:rgba(0, 0, 0, 0.2);
  }
`;
const P = styled.p`
background: #1C1F23 ;
  font-weight: lighter;
`;

function Result() {

  const localPlayers = localStorage.getItem('players')
  const players = JSON.parse(localPlayers)
  return (
    <Div>
      {players.map((players) => (
        <li key={players.order}>
          <Card>
            <P ml="10" mb="0" as="h4" size="md">
              {players.value}
            </P>
          </Card>
        </li>
      ))}
    </Div>
  );
}

export default Result;
