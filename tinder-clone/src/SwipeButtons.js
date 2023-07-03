import "./SwipeButtons.css"

import React from 'react'

import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BoltIcon from '@mui/icons-material/Bolt';


function SwipeButtons() {
  return (
      <div className="SwipeButtons">
    <IconButton><ReplayCircleFilledIcon fontSize='large' className='sbutton__repeat'/></IconButton>
    <IconButton><CloseIcon fontSize='large' className='sbutton__close'/></IconButton>
    <IconButton><StarPurple500Icon fontSize='large' className='sbutton__star'/></IconButton>
    <IconButton><FavoriteBorderIcon fontSize='large' className='sbutton__fav'/></IconButton>
    <IconButton><BoltIcon fontSize='large' className='sbutton__flash'/></IconButton>
    </div>
  )
}

export default SwipeButtons