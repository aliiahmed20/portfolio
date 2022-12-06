import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGitSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Socials = () => {
  return (
    <div className="socials">
        <a href='https://www.linkedin.com/in/ali-moustafa-4401551a2/' target="_blank"  ><BsLinkedin/></a>
        <a href='https://github.com/aliiahmed20?tab=repositories' target="_blank" ><FaGitSquare/></a>
        <a href='mailto: aliiahmed.20@hotmail.com' target="_blank" ><MdEmail/></a>
    </div>
  )
}

export default Socials