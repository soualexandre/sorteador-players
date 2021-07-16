import React, { FormEvent, useRef, useState} from "react";
import styled from "styled-components";
import { usePlayer } from "../provider/playerProvider";
import FloatButton from "../components/FloatButton";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  width: 40vw;
  height: 25px;
  border-radius: 2px;
  color: Black;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #fff;
  @media(max-width: 800px) {
    width: 45vw;
  }
`;
const InputCut = styled.input`
  width: 5vw;
  height: 25px;
  border-radius: 2px;
  color: Black;
  margin-left:10px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid #fff;
  @media(max-width: 800px) {
    width: 10vw;
  }
`;

const InputSubmit = styled.input`
  width: 10vw;
  height: 47px;
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
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 49px;
  }
  &:hover{
    background:#8be37f;
  }
`;
function InputPlayer(props) {
  const { player, setPlayer} = usePlayer();
  const history = useHistory();

   const inputNameText = useRef(null);
  const [cut, setCut] = useState();

  localStorage.setItem('cut', cut);


  const handlePlayer = (e: FormEvent) => {
    e.preventDefault();
    const name = inputNameText.current.value;
    if (name !== "") {
      setPlayer([
        ...player,
        {
          id: player.length,
          value: name,
          order: 0,
        },
      ]);
    }
    e.target.reset();
  };

  function handleSorteio() {
    player.forEach(players => {
      const valueOne = Math.random() * 100;
      const valueTwo = Math.random() * 100;
      const valueRandom = ((valueOne + valueTwo)/2)
      players.order = valueRandom;
    });
    handleOrder();
  }

  function handleOrder() {
   player.sort(function (a, b) {
      if (a.order < b.order) {
        return -1;
      } else {
        return true;
      }     
    });

   handleToasts();
  }


const getCut = localStorage.getItem('cut');

  function handleToasts(){
    if (player.length > 1 && getCut !==  "undefined") {
    history.push('/result')
      toast.success("Os participantes foram sorteado com sucesso")
    }
    else {
      toast.error("Insira mais participantes para poder sortear")
    }
  }




  return (
    <Container>
      <Form onSubmit={handlePlayer}>
        <Input placeholder="insira um nome" ref={inputNameText} />
        <InputSubmit type="submit" value="Adicionar" className="Button"/>
      </Form>
      <Form onSubmit={handleSorteio}>
      <InputCut placeholder="Numero de participantes" required type="Number" onChange={(e) => setCut(e.target.value) } />
      <FloatButton value="SORTEAR"/>
      </Form>
    </Container>
  );
}

export default InputPlayer;
