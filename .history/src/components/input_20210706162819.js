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
  display:flex;
  align-items: center;
  justify-Content: center;
`;
const Input = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 2px;
  color: white;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #fff;
`;
const InputSubmit = styled.input`
  width: 100px;
  height: 55px;
  border-radius: 2px;
  color: white;
  padding: 10px;
  background: green;
  margin-left: 10px;
  border: 0;
  &:hover .Button{
    background: #000;
  }
`;
function InputPlayer() {
  const { player, setPlayer } = usePlayer();
  const inputNameText = useRef(null);

  const handlePlayer = useCallback((e: FormEvent) => {
    e.preventDefault();
    const name = inputNameText.current.value;
    if (name != "") {
      setPlayer([...player, {
          id: player.length,
          value: name
        }])
    }
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
          className="Button"
        />
      </Form>
    </Container>
  );
}

export default InputPlayer;
