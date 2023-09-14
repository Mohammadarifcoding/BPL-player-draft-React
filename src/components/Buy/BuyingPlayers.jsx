import BuyingPlayer from "./BuyingPlayer"

const BuyingPlayers = ({add,price})=>{
    return(
        <>

        <div className="bg-gray-300 w-full mt-3  border-2 mx-auto rounded-md border-blue-400 p-3">
           <h1>Total = {price}</h1>
           <h1 className="text-xl text-center text-blue-950 font-semibold">The draft</h1>
            <div>
                {
                    add.map(added => <BuyingPlayer added={added}></BuyingPlayer>)
                }
            </div>
        </div>
          
         
        </>
    )
}

export default BuyingPlayers