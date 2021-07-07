import InputPlayer from "../components/input";
import Player from "../components/Player";
import "../global.css";
import styled from "styled-components";
import FloatButton from "../components/FloatButton";

const Titulo = styled.h1`
  display: flex;
  margin-top: 35px;
  justify-content: center;
  color: white;
  text-align: center;
`;
function Dashboard() {
  return (
    <>
        <div className="Dashboard">
          <FloatButton />
          <Titulo>Sorteador de equipes</Titulo>
          <InputPlayer />
          <Player />
        </div>
    </>
  );
}

export default Dashboard;
