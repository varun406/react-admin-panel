import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material/';

function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Varun</span>
            </div> 
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Settings/>
                    <span className='topIconBadge'>2</span>
                </div>
                <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_hlf_02_0.jpg' alt='' className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar