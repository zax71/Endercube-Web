import '../index.css';

import ECLogoTransparent from '../images/EndercubeLogoTransparent.png'
import webBg from '../images/webBg.png'
import React, { useState, useEffect} from 'react';
import axios from 'axios';

// var online = fetch('https://api.mcsrvstat.us/2/mc.endercube.net')
  // .then(response => response.json())
  // .then(data => console.log(data['players']['online']));


function App() {
  const url = 'https://api.mcsrvstat.us/2/mc.endercube.net'
  const [product, setProduct] = useState(null)

  useEffect(() => {

    axios.get(url)
      .then(response => {
        setProduct(response.data)
      })
  
    
  }, [url])
  
  return (
    <div>
      <div className='border-y-2 border-gray-0 flex justify-center align-middle relative'>
        <img src={webBg} alt="" className='' />
        <p className='text-gray-0 font-openSans text-xl absolute top-[15%] left-[20vw]'>Online Players: {product == null ? "Loading" : product.players.online}</p>
        <img src={ECLogoTransparent} alt="" width="150" height="150" className='border-4 rounded-[25%] border-gray-0 absolute top-[15%]'/>
      </div>
      
    </div>
      
  );
}

export default App;