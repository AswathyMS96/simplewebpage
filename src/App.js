import React from 'react';
// import MyComponent from './components/mycomponents';
import Nautyara from './assets/girl.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import { Route, Routes } from "react-router-dom";
import {useState } from 'react';
function App() {
//properties
const [walletAddress, setWalletAddress] =useState("");
//request access to the user's META MASK WALLET
  async function requestAccount(){
    console.log('Requesting account...');
    if(window.ethereum){
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error){
        console.log('Error Connecting.......')
      }
    }else{
      alert("install metamask extension!!");
    }
  }
	
return (
    <div>
            <Navbar />
            <Routes>
                  <Route path="/" element={<About/>} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Gallery" element={<Gallery />} />
                  <Route path="/FAQs" element={<FAQs/>} />
            </Routes>
          <div>
              <img src={Nautyara} alt="Nautyara" className=' img-fluid center'/>
          </div>
          <div className='App'>
            <header className="App-header center">
                 <button
                 onClick={requestAccount }
                 >Connect Wallet</button>
                 <h3>Wallet Address:{walletAddress}</h3>
            </header>
          </div>
	</div >
    	);
}
 
export default App;
