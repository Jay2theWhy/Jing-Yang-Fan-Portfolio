import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const SocialMedia = () => {

  return (
    <div className="app__social">
        <a href="https://github.com/Jay2theWhy" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/jingyangfan/" target="_blank">
            <BsLinkedin />
        </a>
        {/* <a>
            <BsTwitter />
        </a> */}
    </div>
  )
}

export default SocialMedia