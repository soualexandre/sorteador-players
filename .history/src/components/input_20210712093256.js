import React, { FormEvent, useRef } from "react";
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
  height: 30px;
  border-radius: 2px;
  color: Black;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #fff;
  @media(max-width: 800px) {
    width: 60vw;
  }
`;
const InputSubmit = styled.input`
  width: 10vw;
  height: 60px;
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
    width: 25vw;
    height: 8vh;
  }
  &:hover{
    background:#8be37f;
  }
`;
function InputPlayer() {
  const { player, setPlayer } = usePlayer();
   const inputNameText = useRef(null);
   const inputCut = useRef(null);

  
  
  const handlePlayer = (e: FormEvent) => {
    e.preventDefault();
    const name = inputNameText.current.value;
    const cut = inputCut.current.value;

    if (name !== "") {
      setPlayer([
        ...player,
        {
          id: player.length,
          value: name,
          cut: cut,
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
        <Input placeholder="cut" ref={inputCut} />
        <InputSubmit type="submit" value="Adicionar" className="Button" />
      </Form>
    </Container>
  );
}

export default InputPlayer;
