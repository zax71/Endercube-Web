// Import tailwind
import './index.css';
// Image imports
import EndercubeLogo from './images/EndercubeLogo.png'


function Nav() {
  return (
    <nav className="bg-gray-4 border-b-gray-0 border-b pt-2 pb-2 pr-2 flex flex-col al">

      <ul className='flex'>
        <li className='inline-block'><img src={EndercubeLogo} alt="" className='ml-1 mt-auto items-center' height={50} width={50} /></li>
        <li className='inline self-end'><a href="#home" className=' ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-md shadow-slate-800'>Home</a></li>
        <li className='inline self-end'><a href="#about" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-md shadow-slate-800'>About</a></li>
        <li className='inline self-end'><a href="#map" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-md shadow-slate-800'>Map</a></li>
        <li className='inline self-end'><a href="#documentation" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-md shadow-slate-800'>Documentation</a></li>
        <li className='inline self-end'><a href="#discord" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-md shadow-slate-800'>Discord</a></li>
      </ul>
    </nav>
  );
}

export default Nav;