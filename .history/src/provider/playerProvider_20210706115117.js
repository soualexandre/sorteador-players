import React, { useState } from "react";

export const PlayerContext = React.createContext({});

export const PlayerProvider = (props) => {

  const [player, setPlayer] = useState([]);
  
console.log(player);
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
