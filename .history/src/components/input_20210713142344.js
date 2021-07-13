import React, { FormEvent, useRef, useState} from "react";
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
  width: 50vw;
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
  width: 10vw;
  height: 25px;
  border-radius: 2px;
  color: Black;
  padding: 10px;
  font-size: 18px;
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
  const { player, setPlayer} = usePlayer();
   const inputNameText = useRef(null);
  const [cut, setCut] = useState();
  
  localStorage.setItem('cut', cut);
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
        <InputCut placeholder="insira um nome" onChange={(e) => setCut(e.target.value) } />
        <InputSubmit type="submit" value="Adicionar" className="Button"/>
      </Form>
    </Container>
  );
}

export default InputPlayer;
