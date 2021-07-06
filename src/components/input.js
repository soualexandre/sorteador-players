import React from "react";
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
  const { player, setPlayer } = usePlayer();

  function handlePlayer(e){
    e.preventDefault();
    console.log(e.target);

  }
  function newPlayer(e){
    e.preventDefault();
    setPlayer(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handlePlayer}> 
        <Input
          placeholder="insira um nome"
          name="name"
          onBlur={newPlayer}
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
