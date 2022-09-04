import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {context} from '../reducer_sec/ContextApi'
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const styles = makeStyles((theme)=>({
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  inputbase: {
    border:'1px solid white',
    display:'flex',
    alignItems:'center',
    borderRadius:'8px',
    [theme.breakpoints.down('sm')]:{
    border:'1px solid white',
    display: 'none',
    alignItems:'center',
    borderRadius:'8px'
    }
  },
  icons:{
    display:'flex',
  },
  searchIcon:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
      display:'block'
    }
  },
  cart:{
    marginLeft:'10px'
  },
  account:{
    marginLeft:'10px'
  }
}))


const Header = () => {
  const {cart,setCart}= useContext(context)
  const classes = styles()
  const navigate = useNavigate()
  return (
    <>
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <div>< DiamondIcon/></div>
                <div className={classes.inputbase}> <InputBase placeholder='Search Your Needs'/> <SearchIcon/></div>
                <div className={classes.icons}>
                  <div onClick={()=>{alert('i m clisked')}} className={classes.searchIcon} ><SearchIcon /></div>
                  <div className={classes.account}><AccountCircleIcon/></div>
                  <div className={classes.account}><LoginIcon/></div>
                  <div onClick={()=>{navigate('/register')}} className={classes.account}><PersonAddIcon/></div>
                  <div onClick={()=>{navigate('/cart')}} className={classes.cart}><Badge badgeContent={cart.length} color='secondary'><ShoppingCartIcon/></Badge></div>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
