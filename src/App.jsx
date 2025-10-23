// import { Suspense,useState } from 'react'
import './index.css'
import './App.css'

import { ToastContainer,} from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers"
import Navbar from './Navbar/Navbar';
import { Suspense,useState } from 'react';
import { data } from 'autoprefixer';
// import Navbar from './Navbar/Navbar'
 import Banner from './components/banner/Banner';
 import Footer from './components/Footer/footer';
const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayers()



function App() {
  const [toggle,setToggle] = useState(true)
  const [availableBalance,setAvailableBalance] = useState(6000000)
  const [purchasedPlayers, setPurchasePlayer] = useState([])
  // console.log(purchasedPlayers);

  // remove data
  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply=> ply.player_id!==p.player_id)
    // console.log(filteredData)
    setPurchasePlayer(filteredData)
    //[setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split("").join(""))) {if availableBalance is string}]
    setAvailableBalance(availableBalance+p.price);
  }

  const handleClick =() =>{
  setToggle(true)
}

  return (
    <>
      
      <Navbar availableBalance={availableBalance}></Navbar>

      <Banner></Banner>

      <div className='max-w-[1050px] mx-auto flex justify-between items-center mt-5   text-2xl font-bold '>
          <h1>{toggle===true?"Available players":`"Selected players(${purchasedPlayers.length}/6)"`}</h1>
          <div>
            <button onClick={handleClick} className={`py-2 px-4 border-1 border-[#99a1af] rounded-l-xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""} font-bold`}>Available</button>
            <button onClick={() =>setToggle(false)} className={`py-2 px-4 border-1 border-[#99a1af] rounded-r-xl border-l-0 font-bold ${toggle===false?"bg-[#E7FE29]":""}`}>selected <span>({purchasedPlayers.length})</span></button>
          </div>
      </div>
      {
        toggle === true?<Suspense fallback={<div className='flex items-center justify-center min-h-screen'>
          <span className="w-12 h-12 border-2 border-solid rounded-full animate-spin border-[#155dfc] border-t-transparent "></span>
        </div>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasePlayer={setPurchasePlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers handleClick={handleClick} purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
      }

      <Footer></Footer>

      <ToastContainer/>

      
    </>
  );
}

export default App
