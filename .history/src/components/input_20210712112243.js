import React, { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Input = styled.input`
  width: 45vw;
  height: 25px;
  border-radius: 2px;
  color: Black;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #fff;
  @media(max-width: 800px) {
    width: 45vw;
  }
`;
const InputCut = styled.input`
  width: 5vw;
  height: 25px;
  border-radius: 2px;
  color: Black;
  margin-left:5px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #fff;
  @media(max-width: 800px) {
    width: 10vw;
  }
`;
const InputSubmit = styled.input`
  width: 10vw;
  height: 47px;
  border-radius: 2px;
  color: black;
  font-weight: bolder;
  padding: 10px;
  background: #BAEBDD;
  margin-left: 10px;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  @media(max-width: 800px) {
    width: 20vw;
    height: 8vh;
  }
  &:hover{
    background:#8be37f;
  }
`;
function InputPlayer() {
  const { player, setPlayer, setCutPlayers, cutPlayers} = usePlayer();
  const [cut , setCut] = useState();
   const inputNameText = useRef(null);
   setCutPlayers(cut);
  
  
  const handlePlayer = (e: FormEvent) => {
    e.preventDefault();
    const name = inputNameText.current.value;
    if (name !== "") {
      setPlayer([
        ...player,
        {
          id: player.length,
          value: name,
          order: 0,
        },
      ]);
    }
    e.target.reset();
  };

  return (
    <Container>
      <Form onSubmit={handlePlayer}>
        <Input placeholder="insira um nome" ref={inputNameText} />
        <InputCut placeholder="Equipes" type="Number"  onChange={(e) => setCut(e.target.value)}/>
        <InputSubmit type="submit" value="Adicionar" className="Button"/>
      </Form>
    </Container>
  );
}

export default InputPlayer;
