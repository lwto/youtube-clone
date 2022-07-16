import React from 'react'
import './_header.scss'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdApps} from "react-icons/md"
import {IoMdNotificationsOutline} from "react-icons/io"
import Logo from '../../access/logo.svg'

function Header({handleToggleSidebar}) {
  return (
    <div className='header border border-dark'>
      <FaBars 
        className="header_menu" 
        size={26} 
        onClick={() => handleToggleSidebar()}
      />
      <img 
        src={Logo}
        alt="youtube" 
        className='header_logo'
      />
      <form>
        <input type="text" placeholder='Search' />
        <button>
          <AiOutlineSearch size={23}/>
        </button>
      </form>

      <div className="header_icons">
        <IoMdNotificationsOutline size={30} />
        <MdApps size={30} />
        <img 
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png "
          alt="User Avatar"
        />
      </div>
    </div>
  )
}

export default Header