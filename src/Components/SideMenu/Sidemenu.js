import React from 'react'
import { RiSettingsLine } from 'react-icons/ri';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdOutlineAccountBalanceWallet, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TbUserSquare, TbHelpHexagon } from 'react-icons/tb';
import { HiCubeTransparent } from 'react-icons/hi';
import { CiDiscount1 } from 'react-icons/ci';


function Sidemenu() {
  return (
    <div className='sidemenu-wrapper'>
      <div className="side-top-menu">
        <div className="sidemenu-head">
          <RiSettingsLine size={25} />
          <p>Dashboard</p>
        </div>
        <div className="sidemenu-links">
          <div className="d-flex active">
            <div className='sidemenu-navlink'>
              <AiOutlineDashboard size={20} />
              <p>Dashboard</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='sidemenu-navlink'>
              <HiCubeTransparent />
              <p>Product</p>
            </div>
            <MdKeyboardArrowRight size={20} />
          </div>
          <div className='d-flex'>
            <div className='sidemenu-navlink'>
              <TbUserSquare size={20} />
              <p>Customers</p>
            </div>
            <MdKeyboardArrowRight size={20} />
          </div>
          <div className='d-flex'>
            <div className='sidemenu-navlink'>
              <MdOutlineAccountBalanceWallet size={20} />
              <p>Income</p>
            </div>
            <MdKeyboardArrowRight size={20} />
          </div>
          <div className='d-flex'>
            <div className='sidemenu-navlink'>
              <CiDiscount1 size={20} />
              <p>Promote</p>
            </div>
            <MdKeyboardArrowRight size={20} />
          </div>
          <div className='d-flex'>
            <div className='sidemenu-navlink'>
              <TbHelpHexagon size={20} />
              <p>Help</p>
            </div>
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>

      <div className="side-bottom-menu active">
        <div className='d-flex' style={{ marginTop: 0 }}>
          <div className='sidemenu-navlink'>
            <img src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' alt='profile' />
            <div style={{display:"flex",flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
              <span style={{fontWeight: "900"}}>Evano</span>
              <span style={{ fontSize: "10px" , color:"#6d7194"}}>project Manager</span>
            </div>
          </div>
          <MdOutlineKeyboardArrowDown size={20} />
        </div>
      </div>
    </div>
  )
}

export default Sidemenu