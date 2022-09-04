import { Box, Button, Container, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect, useState } from 'react'
import item from '../assets/Api/ItemApi'
import {context} from '../reducer_sec/ContextApi'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom'
import vendorApi from '../assets/Api/VendorApi'

const styles = makeStyles(theme=>({
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
    }
}))

const ItemCard = ({param}) => {
    const [product, setProduct]= useState([])
    const [total,setTotal]=useState(0)
    const {cart,setCart} = useContext(context)
    console.log(cart)
    const navigate = useNavigate()
    const classes = styles()
    useEffect(()=>{setProduct(item.filter((f)=>{return f.vendorId==param.vid}))},[item])
    useEffect(()=>{setTotal(cart.reduce((acc,ele)=>{return acc = acc + ele.itemPrice},0))},[cart])
  return (
    <Container>
    {cart.length>0 ? (
        <div className={classes.headShow}>
        <div className={classes.headText}>
            <div>{cart.length} items Added in Cart</div>
            <div>Total {total} Rs.</div>
        </div>
        <div className={classes.headBtns}>
            <div><Button variant='contained'><ArrowBackIcon onClick={()=>{navigate("/foddy")}}/></Button></div>
            <div><Button onClick={()=>{setCart([])}} color="success" startIcon={<DeleteForeverIcon/>} variant='outlined'>Clear Cart</Button></div>
            <div><Button onClick={()=>{navigate('/cart')}} variant='contained'><ArrowForwardIcon/></Button></div>
        </div>
    </div>
    ) : 
    (
        ""
    )
    }
    <div className={classes.paperDiv}>
    {product.map((merchant,ind)=>{return (
        <marquee key={ind} behavior="slide" direction="left" scrollamount="60">
        <Paper elevation={24} className={classes.paperInnerDiv}>
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
    </Container>
  )
}

export default ItemCard