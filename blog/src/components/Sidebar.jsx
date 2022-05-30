import React from 'react'
import '../styles/sidebar.scss'
import {FacebookOutlined, GitHub, Instagram, LinkedIn} from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <span className="sTitle">
                About Me
            </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAkvW_76XthxFQZTPhntIvQzMCUvTYh8wjIbBOjx_9iz91CQyRbvjqNo4TpJAVGrEh00&usqp=CAU" alt="dddd" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ut sunt blanditiis, labore repellendus.</p>
        </div>
        <div className="sidebar-item">
            <span className="sTitle">Categories</span>
            <ul className="sList">
                <li className="sListItem">Life</li>
                <li className="sListItem">Music</li>
                <li className="sListItem">Sport</li>
                <li className="sListItem">Style</li>
                <li className="sListItem">Technology</li>
                <li className="sListItem">News</li>
            </ul>
        </div>
        <div className="sidebar-item">
          <span className="sTitle">Follow us</span>
          <div className="social-icons">
               <LinkedIn className='social-icon' style={{color:'#0041C2'}}/>
              <GitHub className='social-icon' style={{color:'#222'}}/>
              <FacebookOutlined className='social-icon' style={{color:'#4267b2'}}/>
              <Instagram className='social-icon' style={{color:'#F70D1A'}}/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar