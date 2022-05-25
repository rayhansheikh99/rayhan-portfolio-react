import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div>
        <div className="header-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
    </div>
  )
}

export default HeaderSocials