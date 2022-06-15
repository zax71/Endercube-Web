import '../index.css';

import ECLogoTransparent from '../images/EndercubeLogoTransparent.png'
import webBg from '../images/webBg.png'
import React, { useState, useEffect} from 'react';
import axios from 'axios';

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
    <div className='pb-10'>

      <div className='border-y-2 border-gray-0 flex justify-center align-middle relative'> {/*Top banner*/}
        <img src={webBg} alt="" className='' />
        <img src={ECLogoTransparent} alt="" width="150" height="150" className='border-4 rounded-[25%] border-gray-0 absolute top-[12%]'/>
        <p className='absolute top-[calc(12%+150px+1%)] text-gray-0 bg-[#3564ab] border-[#265cad] rounded-sm p-1'>MC.Endercube.net {product == null ? "?" : product.players.online}</p>
      </div>
      
      <div className='mr-auto ml-auto w-[80%] mt-3'> {/*Centered container - everything in here*/}

        <div className='text-gray-0 font-openSans pb-2 mb-6 border-b-4 border-b-gray-0'> {/*About us container - full width*/}
          <h2 className='font-oswald text-2xl'>About Us</h2>
          <p className='text-left text-lg'>Welcome to Endercube, a modern Minecraft server that focusses on creating a fresh and unique survival experience for all with a selection of new Minecraft features being used to their full potential and old standards still being conserved to create a familiar experience with a twist, paving the way through to a new era of Minecraft servers.</p>
        </div>

        <div className='grid grid-cols-2 gap-3'> {/*Features grid container*/}
          <div className='text-gray-0 font-openSans'> {/*Enchanting container*/}
            <img className='rendering-pixelated' src="https://github.com/InventivetalentDev/minecraft-assets/raw/1.19/assets/minecraft/textures/item/enchanted_book.png" alt="Enchanted Book" width={64} height={64}/>
            <p className='text-lg'>Enchanting has never been more fun! With our over 200 custom enchantments you'll never run out of ideas.</p>
          </div>

          <div></div><div></div> {/*Spacer*/}

          <div className='text-gray-0 font-openSans'> {/*Economy container*/}
            <img className='rendering-pixelated float-right' src="https://github.com/InventivetalentDev/minecraft-assets/raw/1.19/assets/minecraft/textures/item/gold_ingot.png" alt="Enchanted Book" width={64} height={64}/>
            <p className='text-lg float-left'>We have an entirely player based economy so no more hyper-inflation and easy wins. You've got to work for your money!</p>
          </div>

          <div></div><div></div> {/*Spacer*/}

          <div className='text-gray-0 font-openSans'> {/*Other game modes container*/}
          <img className='rendering-pixelated' src="https://github.com/InventivetalentDev/minecraft-assets/raw/1.19/assets/minecraft/textures/item/golden_boots.png" alt="Enchanted Book" width={64} height={64}/>
            <p className='text-lg'>There are multiple game modes alongside Survival too! Parkour and Creative to develop your builds.</p>
          </div>
        </div>
        

      </div>
      
      
    </div>
      
  );
}

export default App;