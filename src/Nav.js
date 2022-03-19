// Import tailwind
import './index.css';
// Image imports
import EndercubeLogo from './images/EndercubeLogo.png'


function Nav() {
  return (
    <nav className="bg-zinc-600 border-b-gray-50 border-b pt-2 pb-2 pr-2 flex flex-col ">
      <img src={EndercubeLogo} alt="" className='inline px-1 mt-auto' height={60} width={60} />

      <ul>
        <li className='inline'><a href="#home" className='ml-2 mt-auto px-4 py-1 text-lg font-semibold text-gray-50 bg-gray-500 hover:bg-gray-800'>Home</a></li>
        <li className='inline'><a href="#about" className='ml-2 mt-auto px-4 py-1 text-lg font-semibold text-gray-50 bg-gray-500 hover:bg-gray-800'>About</a></li>
        <li className='inline'><a href="#map" className='ml-2 mt-auto px-4 py-1 text-lg font-semibold text-gray-50 bg-gray-500 hover:bg-gray-800'>Map</a></li>
        <li className='inline'><a href="#documentation" className='ml-2 mt-auto px-4 py-1 text-lg font-semibold text-gray-50 bg-gray-500 hover:bg-gray-800'>Documentation</a></li>
        <li className='inline'><a href="#discord" className='ml-2 mt-auto px-4 py-1 text-lg font-semibold text-gray-50 bg-gray-500 hover:bg-gray-800'>Discord</a></li>
      </ul>
    </nav>
  );
}

export default Nav;