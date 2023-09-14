import './App.css'
import Players from './components/player/Players'

function App() {


  return (
    <>
    <div className='bg-gray-200 pb-20'>
        <h1 className='text-4xl text-center font-medium py-6'>BPL Player Draft</h1>
      <div className='container mx-auto'>
      <Players></Players>
      </div>
        

    </div>
    </>
  )
}

export default App
