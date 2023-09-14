import { useState } from "react";
import Player from "./player";
import { useEffect } from "react";
import BuyingPlayers from "../Buy/BuyingPlayers";

const Players = () => {
  const [players, setPlayers] = useState([]);

  const [add, AddPlayers] = useState([]);

  const [price,PlayerPrice ] = useState(0)

  useEffect(() => {
    fetch("./../../../public/Utility.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  let count = 0
  const handleAddPlayers = (player) => {
    count = player.base_price;
    const IsExit = add.find((exit) => exit.id == player.id);
    if (IsExit) {
      alert("You had already added this player in the list");
    } else {
      AddPlayers([...add,player]);
      const newPrice = price + count
      if(newPrice > 2000000){
        alert('You budget have been finished')
      }
      else{
        PlayerPrice(newPrice)
      }
      
    }
    
  };

  return (
    <div className="flex  gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-3 w-[70%]">
        {players.map((player) => (
          <Player
            handleAddPlayers={handleAddPlayers}
            key={player.id}
            player={player}
          ></Player>
        ))}
      </div>
      <div className="w-[30%]">
        
        <BuyingPlayers add={add} price={price}></BuyingPlayers>
      </div>
    </div>
  );
};

export default Players;
