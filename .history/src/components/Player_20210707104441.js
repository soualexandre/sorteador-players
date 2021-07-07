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
  height: 40px;
  border: 1px solid gray;
  padding: 20px;
  background: #1C1F23;
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 22px;
  list-style: none;
  color: white;
  overflow: hidden;
  @media(max-width: 800px) {
    width: 90vw;
  }

`;
const Svg = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  & path{
    fill: green;
  }
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
    // console.log('O ID do participante é', id);
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
              <Svg>
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.99988H5H21" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>
            </P>
          </Card>
        </li>
      ))}
    </Div>
  );
}

export default Player;
