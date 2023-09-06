import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { VscLibrary } from 'react-icons/vsc';
import { BsBarChart } from 'react-icons/bs'

function DropdownMenu() {
  return (
    <div className='dropdown-menu'>
      <ul className="dropdown-list dropdown-list--top">
        <li className="dropdown-item">
            <AiOutlineUser />
            <p>Profile</p>
        </li>
        <li className="dropdown-item">
            <VscLibrary />
            <p>Library</p>
        </li>
        <li className="dropdown-item">
            <BsBarChart />
            <p>Stats</p>
        </li>
      </ul>

      <ul className="dropdown-list dropdown-list--bottom">
        <li className="dropdown-item">
            <p>Settings</p>
        </li>
        <li className="dropdown-item">
            <p>Recommendation</p>
        </li>
        <li className="dropdown-item">
            <p>Publication</p>
        </li>
        <li className="dropdown-item">
            <p>Help Center</p>
        </li>
        <li className="dropdown-item">
            <p>Upgrade</p>
        </li>
      </ul>


    </div>
  )
}

export default DropdownMenu
