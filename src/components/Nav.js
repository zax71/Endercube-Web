// Import tailwind
import '../index.css';
// Image imports
import EndercubeLogo from '../images/EndercubeLogo.png'


function Nav() {
  return (
    <nav className="bg-gray-4 border-b-gray-0 border-b pt-2 pb-2 pr-2">

      <ul className=''>
        <li className='inline-block'><img src={EndercubeLogo} alt="" className='ml-1 mt-auto items-center' height={50} width={50} /></li>
        <li className='inline self-end float-right pt-4 pr-3'><a href="#home" className=' ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-sm shadow-gray-6'>Home</a></li>
        <li className='inline self-end float-right pt-4 pr-3'><a href="#about" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-sm shadow-gray-6'>About</a></li>
        <li className='inline self-end float-right pt-4 pr-3'><a href="#map" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-sm shadow-gray-6'>Map</a></li>
        <li className='inline self-end float-right pt-4 pr-3'><a href="#documentation" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-sm shadow-gray-6'>Documentation</a></li>
        <li className='inline self-end float-right pt-4 pr-3'><a href="#discord" className='ml-2 px-4 py-1 text-lg font-semibold text-gray-0 bg-gray-2 hover:bg-gray-3 rounded-sm shadow-sm shadow-gray-6'>Discord</a></li>
      </ul>
    </nav>
  );
}

export default Nav;