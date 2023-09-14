const Player = ({player,handleAddPlayers})=>{
     const {name,id,age,base_price,picture_url,player_type} = player

    return (
        <>
           <div className="bg-gray-300 w-72  border-2 mx-auto rounded-xl border-blue-400 p-5">
            <figure className="w-40 mx-auto">
            <img src={picture_url} alt="" className=" rounded-full"/>

            </figure>

            <h1 className="text-center text-blue-800 my-2 text-lg font-medium">{name}</h1>
            <h1 className="text-center  my-1 text-lg font-medium">{player_type}</h1>
            <p className="text-center my-1 text-lg font-medium">Age : {age}</p>
            <p className="text-center my-1 text-lg font-medium">Base Price : ${base_price}</p>
            <button onClick={()=>{handleAddPlayers(player)}} className="bg-blue-800 hover:bg-indigo-950 text-white py-2 px-3 flex justify-center rounded-md mx-auto my-3">Add to Team</button>
           </div>
        </>
    )
}

export default Player