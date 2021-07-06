import React, { useCallback, FormEvent, useRef } from "react";
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
  const {player,setPlayer } = usePlayer();
  const inputNameText = useRef(null);


  const handlePlayer = useCallback(( e: FormEvent ) => {
      e.preventDefault();
      const name = inputNameText.current.value;

      setPlayer([...player, {
        name: player
      }])
    })

  return (
    <div>
      <form onSubmit={handlePlayer}> 
        <Input
          placeholder="insira um nome"
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
