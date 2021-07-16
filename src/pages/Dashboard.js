import InputPlayer from "../components/input";
import Player from "../components/Player";
import "../global.css";
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
  width: 95%;
  margin-top: 35px;
  font-size: 24px;
  color: white;
`;
function Dashboard() {
  return (
    <>
      <div className="Dashboard">
        <Titulo>Sorteador de participantes</Titulo>
        <InputPlayer />
        <Player />
      </div>
    </>
  );
}

export default Dashboard;
