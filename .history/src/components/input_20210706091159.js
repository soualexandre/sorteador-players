import React, { useRef, useCallback } from "react";
import styled from "styled-components";
// import { usePlayer } from "../provider/playerProvider";
const Input = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  color: black;
  padding: 10px;
`;
const Button = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  color: black;
  padding: 10px;
`;


function InputPlaye() {
  // const { player, setPlayer } = usePlayer();
  const nameTextInput = useRef<HTMLInputElement>(null);

  function handlePlayer(){

}


  return (
    <div>
      <form onSubmit={handlePlayer}>
        <Input
          placeholder="insira um nome"
          ref={nameTextInput}
        />
        <Button
          type="submit"
          value="Adicionar"
        />
      </form>
    </div>
  );
}

export default InputPlayer;
