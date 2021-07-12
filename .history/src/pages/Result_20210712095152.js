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
  height: 15px;
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
const Group = styled.h1`
color: #fff;
  font-weight: bold;
  text-align:center;
  font-size: 32px
`;

function Result() {
  const { player} = usePlayer();


  function handleShortPlayer(){
    var meuArray = player
    ,novoArray = []
    ,corte = player.cut;
    for (var i = 0; i < meuArray.length; i = i + corte) {
    novoArray.push(meuArray.slice(i, i + corte));
    }
    return novoArray;
  }
const players = handleShortPlayer();

players.map(grupo => (
  grupo.map(player => (
    console.log("dfadsf",player.value)
  ))
))
  
  return (
<Div>
{players.map(grupo => (
  <section key={grupo[0].id}> 
  <Group>Grupo</Group> 
    {grupo.map(player => (
      <li key={player.id}>
        <Card>
      <P>
         {player.value}
      </P>
      </Card>
      </li>
    ))}
  </section>
))}
</Div>
)}
export default Result;
