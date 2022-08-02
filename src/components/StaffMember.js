import '../index.css';

import { MdEmail } from 'react-icons/md';
import { FaDiscord, FaGithub } from 'react-icons/fa';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied " + text + " to the clipboard", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

function Email(props) {
    const email = props.email
    if (email !== undefined) {
        return (
            <MdEmail size={25} className='float-right inline-block m-1' onClick={() => {window.open("mailto:" + email, '_blank').focus()}}/>
        )
    }
}

function Discord(props) {
    const discord = props.discord
    if (discord !== undefined) {
        return (
            <FaDiscord size={25} className='float-right inline-block m-1' onClick={() => {copy(discord)}} />
        )
    }
}

function Github(props) {
    const github = props.github
    if (github !== undefined) {
        return (
            <FaGithub size={25} className='float-right inline-block m-1' onClick={() => {window.open(github, '_blank').focus()}} />
        )
    }
}


function StaffMember(props) {
    const name = props.name
    const discord = props.discord
    const github = props.github
    const email = props.email
    const bio = props.bio

    
    return (
        <div className='bg-gray-4 rounded-lg pb-2'>
            <div className='relative'> {/*Top section*/}
                <div> {/*Contact Links*/}
                    <Email email={email}/>
                    <Discord discord={discord}/>
                    <Github github={github}/>
                </div>
                <img src={"https://mc-heads.net/head/" + name + "/64"} alt={name + "'s head"} className='p-1 inline-block'/>
                <p className='text-gray-0 inline-block absolute bottom-0 p-1 font-inter'>{name}</p>
            </div>
            <div className='bg-gray-3 rounded-sm mt-1'>
                <pre className='text-gray-0 p-1 font-inter whitespace-pre-line'>{bio}</pre>
            </div>
        </div>
    )
}



export default StaffMember