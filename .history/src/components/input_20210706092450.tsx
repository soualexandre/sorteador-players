import React, { useRef, useCallback , FormEvent} from 'react';
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


function InputPlayer() {
  // const { player, setPlayer } = usePlayer();
  const nameTextInput = useRef<HTMLInputElement>(null);

  const handlePlayer = useCallback((e : FormEvent) =>{
      e.preventDefault();
      console.log(nameTextInput.current.value);
  })


  return (
    <div className="App">
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
