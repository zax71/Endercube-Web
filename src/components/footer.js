import '../index.css';
import GitHubLink from './GitHubLink';

function footer() {
    return (
        <div >
            <p className='text-gray-0 bg-gray-4 text-sm p-3'>Endercube is not affiliated with Minecraft, Mojang AB and/or Microsoft Corporation</p>
            <GitHubLink />
            
        </div>
    );
}
    
export default footer;