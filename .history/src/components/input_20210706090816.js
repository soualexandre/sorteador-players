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


class InputPlayer extends React.Component() {
  // const { player, setPlayer } = usePlayer();
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  return (
    <div>
      <form onSubmit={handlePlayer}>
        <Input
          placeholder="insira um nome"
          ref={this.textInput}
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
