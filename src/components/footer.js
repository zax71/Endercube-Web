import '../index.css';
import GitHubLink from './GitHubLink';
import { ToastContainer } from 'react-toastify';

function footer() {
    return (
        <div >
            <p className='text-gray-0 bg-gray-4 text-sm p-2 font-inter bottom-0 w-[100%]'>Endercube is not affiliated with Minecraft, Mojang AB and/or Microsoft Corporation</p>
            <GitHubLink />
            <ToastContainer/>
            
        </div>
    );
}
    
export default footer;