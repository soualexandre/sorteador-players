import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { usePlayer } from "../provider/playerProvider";
import styled from "styled-components";

const Card = styled.div`
margin-top: 20px;
  width: 800px;
  height: 60px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  font-size: 40px;
`;
function Player() {
  const { player } = usePlayer();
  return (
  <Card>{player}</Card>
  );
}

export default Player;
