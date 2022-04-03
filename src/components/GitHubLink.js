import '../index.css';
import GitHub from '../images/GitHub.js'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function GitHubLink() {
  return (
      <div onClick={() => openInNewTab('https://github.com/zax71/Endercube-Web')} >
        <GitHub className='fixed bottom-0 right-0 w-14 h-14 m-4'/>
      </div>
    
  );
}

export default GitHubLink;