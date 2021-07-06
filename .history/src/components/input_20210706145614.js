import React, { useCallback, FormEvent, useRef } from "react";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
const Container = styled.div`
  display:flex;
  align-items: center;
  justify-Content: center;
  margin-top: 50px;
`;
const Form = styled.form`
 
`;
const Input = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 10px;
  color: black;
  padding: 10px;
  font-size: 20px;
`;
const InputSubmit = styled.input`
  width: 100px;
  height: 55px;
  border-radius: 10px;
  color: white;
  padding: 10px;
  background: green;
  margin-left: 10px;
`;
function InputPlayer() {
  const {player,setPlayer } = usePlayer();
  const inputNameText = useRef(null);

  const handlePlayer = useCallback(( e: FormEvent ) => {
      e.preventDefault();
      const name = inputNameText.current.value;
      setPlayer([...player, {
        id:player.length,
        value: name
      }])
      e.target.reset();
    })
   

  return (
    <Container>
      <Form onSubmit={handlePlayer}> 
        <Input
          placeholder="insira um nome"
          ref={inputNameText}
        />
        <InputSubmit
          type="submit"
          value="Adicionar"
        />
      </Form>
    </Container>
  );
}

export default InputPlayer;
