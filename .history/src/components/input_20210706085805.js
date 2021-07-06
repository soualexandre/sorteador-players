import React, {useRef, useCallback} from "react";
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
  // const { player, setPlayer } = usePlayer();
  const nameInputRef = useRef<HTMLInputElement>(null);

// const handlePlayer = useCallback((e) => {
//     e.preventDefault();
//     console.log(nameInputRef.current?.value); 
// },[])

  return (
    <div>
      <form onSubmit={handlePlayer}> 
        <Input
          placeholder="insira um nome"
          name="name"
          ref={nameInputRef}
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
