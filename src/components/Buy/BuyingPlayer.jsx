const BuyingPlayer = ({added})=>{
    const {player_type,name} = added
    return (

        <>
          <h1 className="flex justify-between font-medium text-blue-950 my-3"><span>{name}</span> <span>{player_type}</span></h1>

        </>
    )
}
export default BuyingPlayer