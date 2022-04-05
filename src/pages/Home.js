import '../index.css';
import ECLogoTransparent from '../images/EndercubeLogoTransparent.png'
// import { useEffect, useState } from 'react';





function App() {

  // API calls
  // // var online = fetch('https://api.mcsrvstat.us/2/mc.endercube.net')
  // // .then(response => response.json())
  // // .then(data => console.log(data['players']['online']));
  // const [server, setServer] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://api.mcsrvstat.us/2/mc.endercube.net');
  //     const data = await response.json();
  //     const item = data.results[0];
  //     console.log(item);
  //     setServer(item);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [])

  return (
      <div className='bg-webBg bg-contain bg-no-repeat h-[0px] w-full mt-6 pt-[26.0416%] border-y-2 border-gray-0 flex justify-center items-center'>
        {/* {loading ? <div>Loading...</div> : <div>{server.fetchData.players.online}</div>} */}
        <p>Player count (placeholder for api call)</p>
        <img src={ECLogoTransparent} alt="" width="150" height="150" className='border-4 rounded-[25%] border-gray-0 relative bottom-[calc((100vh*0.260416)/2)]'/>
      </div>
      
  );
}

export default App;