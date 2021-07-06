import React, { useCallback, FormEvent, useRef } from "react";
import { set } from "react-hook-form";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
const Input = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  color: black;
  padding: 10px;
`;
const InputSubmit = styled.input`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  color: black;
  padding: 10px;
`;
function InputPlayer() {
  const {setPlayer } = usePlayer();
  const inputNameText = useRef(null);


  const handlePlayer = useCallback(( e: FormEvent ) => {
      e.preventDefault();
      console.log(inputNameText.current.value)
      setPlayer(inputNameText.current.value)
  })

  return (
    <div>
      <form onSubmit={handlePlayer}> 
        <Input
          placeholder="insira um nome"
          name="name"
          ref={inputNameText}
        />
        <InputSubmit
          type="submit"
          value="Adicionar"
        />
      </form>
    </div>
  );
}

export default InputPlayer;
