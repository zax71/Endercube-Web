import '../index.css';
import ECLogoTransparent from '../images/EndercubeLogoTransparent.png'

function App() {
  return (
      <div className='bg-webBg bg-[length:100%] h-[500px] mt-6 border-y-2 border-gray-0 pt-[175px] w-full'>
        <img src={ECLogoTransparent} alt="" width="150" height="150" className='ml-auto mr-auto w-[150px] h-[150px] border-4 rounded-[25%] border-gray-0'/>
      </div>
  );
}

export default App;