import { Box, Button, Container, Divider, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect, useState } from 'react'
import {context} from '../reducer_sec/ContextApi'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import emptyCart from '../assets/Images/cart.webp'
import { useNavigate } from 'react-router-dom';
import ForwardIcon from '@mui/icons-material/Forward';

const useStyles = makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(10)
  },
  paperInnerDiv:{
    // border:'1px solid red',
    // height:'100px',
    display:'flex',
    marginBottom:theme.spacing(2)
},
image:{
    // border:'1px solid green',
    height:'100px',
    width:'25%'
},
info:{
    // border:'1px solid red',
    height:'100px',
    width:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
},
btns:{
    // border:'1px solid blue',
    height:'100px',
    width:'25%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
},
headShow:{
    // border:'1px solid red',
    // height:'50px',
    marginBottom:theme.spacing(1),
    backgroundColor:"black",
    color:'yellow',
    position:'sticky',
    top:70,
    zIndex:1,
    borderRadius:'8px'
},
btnRemove:{
    backgroundColor:'green',
    color:'red'
},
headText:{
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
},
headBtns:{
    display:'flex',
    justifyContent:'space-between',
    marginTop:theme.spacing(1),
    paddingBottom:theme.spacing(1)
},
backBtn:{
    color:'white'
},
amtSec:{
  // height:'100px',
  border:'1px solid red',
  padding:'20px 10px 20px 10px'
},
myCart:{
  textAlign:'center',
  fontSize:'20px',
  fontWeight:'bolder'
},
firstLine:{
  display:'flex',
  justifyContent:'space-between',
},
divider:{
  // paddingBottom:theme.spacing(2)
},
emptyCartDiv:{
  height:'auto',
  width:'auto'
},
emptyCartText:{
  textAlign:'center',
  fontSize:'20px'
},
btnFix:{
  position:'fixed',
  zIndex:10,
  bottom:40,
  right:30
},
continueShoppingButton:{
  textAlign:'center',
  marginTop:theme.spacing(3)
}
}))

const CartPage = () => {
  const classes = useStyles()
  const {cart,setCart} = useContext(context)
  const [total,setTotal]= useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,ele)=>{return acc = acc + ele.itemPrice},0))
  },[cart])
  const navigate = useNavigate()
  console.log(cart)
  return (
    <Container className={classes.mainDiv}>
    {cart.length>0?(
      <>
      <div className={classes.myCart}>
      <strong>My Cart Page</strong>
    </div>
      <Box className={classes.amtSec}>
      <div className={classes.firstLine}>
          <strong>Cart Size :</strong>
          <strong>{cart.length} items</strong>
        </div>
      <Divider sx={{marginBottom:'10px'}} className={classes.divider}/>
        <div className={classes.firstLine}>
          <strong>Cart Total Amount :</strong>
          <strong>{total} Rs.</strong>
        </div>
      </Box>
      <div className={classes.paperDiv}>
    {cart.map((merchant,ind)=>{return (
        <marquee key={ind} behavior="slide" direction="left" scrollamount="60">
        <Paper elevation={10} className={classes.paperInnerDiv}>
        <div className={classes.image}>
            <img src={merchant.image} height="100px" width="100%"  alt={merchant.itemName} />
        </div>
        <div className={classes.info}>
            <div><strong>{merchant.itemName}</strong></div>
            <div><small>{merchant.itemType==='Veg'?<div><Brightness1Icon sx={{color:'green'}}/></div>: <div><Brightness1Icon sx={{color:'red'}}/></div>}</small></div>
            <div><small>{merchant.itemPrice} Rs.</small></div>
        </div>
        <div className={classes.btns}>
            {cart.includes(merchant)?<div><Button color='success' className={classes.btnRemove} onClick={()=>{setCart(cart.filter((f)=>{return f.id!==merchant.id}))}} variant='contained'>Remove</Button></div>:<div><Button onClick={()=>{setCart([...cart,merchant])}} variant='contained'>Add</Button></div>}  
        </div>
    </Paper>
    
    </marquee>
    )})}
    </div>

    <div className={classes.btnFix}><Button endIcon={<ForwardIcon/>} onClick={()=>{navigate('/billing')}} size='large' variant='contained'>Proceed</Button></div>
      </>
    ):(
      <div className={classes.emptyCartDiv}>
        <div><img height='100%' width='100%' src={emptyCart} alt="empty cart"/></div>
        <div className={classes.emptyCartText}><strong>Cart is Empty</strong></div>
        <div className={classes.continueShoppingButton}><Button onClick={()=>{navigate("/")}} size="large" sx={{textTransform:'none'}} variant={"contained"} >Continue Shopping</Button></div>
      </div>
    )}
    
    </Container>
  )
}

export default CartPage