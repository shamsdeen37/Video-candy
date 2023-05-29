import { Box } from '@mui/material'
import React from 'react'
import logo from '../assets/icons.png'

const Loading = () => {
  return (
    <Box className='loading' sx={{color:'black',position:'absolute',top:'45%',left:'50%'}}><img alt='loading' src={logo}/></Box>
  )
}

export default Loading