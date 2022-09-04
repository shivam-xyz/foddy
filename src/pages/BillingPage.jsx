import { Button, Container, Divider, Fab, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect, useState } from 'react'
import {context} from '../reducer_sec/ContextApi'
import NavigationIcon from '@mui/icons-material/Navigation'
import { useNavigate } from 'react-router-dom'

const useStyles=makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(10),
  },
  paper:{
    // border:'1px solid red',
    // height:'200px'
    padding:'10px'
  },
  strong:{
    textAlign:'center',
    fontSize:'30px',
    marginBottom:'10px'
  },
  subTotal:{
    display:'flex',
    justifyContent:'space-between',
    marginBottom:theme.spacing(1)
  },
  total:{
    display:'flex',
    justifyContent:'space-between',
    fontSize:'20px',
    marginTop:theme.spacing(2),
    color:'green'
  },
  saving:{
    marginTop:theme.spacing(3),
    textAlign:'center',
    fontSize:'17px',
    color:'green'
  },
  placeOrderBtn:{
    position:'fixed',
    zIndex:25,
    bottom:45,
    right:30
  },
  quick:{
    textAlign:'center',
    marginTop:theme.spacing(3)
  },
  paperQuick:{
    // height:'100px'
  },
  quickItem:{
    display:'flex',
    justifyContent:'space-between',
    padding:'10px'
  },
  fab:{
    position:'fixed',
    bottom:0
  }
}))

const BillingPage = () => {
  const {cart,setCart} = useContext(context)
  const [total,setTotal] = useState(0)
  const classes = useStyles()
  const navigate = useNavigate()
  let discount = total*10/100
  let deliveryCharge = 20
  let rainCharge = 15
  let tax = total*5/100
  let surgeCharge = 10
  let payable = total + deliveryCharge + rainCharge + tax + surgeCharge - discount  
  useEffect(()=>{
    setTotal(cart.reduce((acc,ele)=>{return acc = acc +ele.itemPrice},0))
  })
  return (

    <>
    <div className={classes.mainDiv}>
      <div className={classes.strong}><strong>Billing Page</strong></div>
    <Container >

      <Paper elevation={24} className={classes.paper}>
        <div className={classes.subTotal}>
          <div><strong>Sub Total</strong></div>
          <div><strong>Rs. {total}</strong></div>
        </div>
        <Divider/>
        <div className={classes.subTotal}>
          <div><strong>Discount</strong></div>
          <div><strong>Rs. {discount}</strong></div>
        </div>
        <Divider/>
        <div className={classes.subTotal}>
          <div><strong>Delivery Charge</strong></div>
          <div><strong>Rs. {deliveryCharge}</strong></div>
        </div>
        <Divider/>
        <div className={classes.subTotal}>
          <div><strong>Rain Charge</strong></div>
          <div><strong>Rs. {rainCharge}</strong></div>
        </div>
        <Divider/>
        <div className={classes.subTotal}>
          <div><strong>Govt. Tax (5%)</strong></div>
          <div><strong>Rs. {tax}</strong></div>
        </div>
        <Divider/>
        <div className={classes.subTotal}>
          <div><strong>Surge Charge</strong></div>
          <div><strong>Rs. {surgeCharge}</strong></div>
        </div>
        <Divider/>
        <div className={classes.total}>
          <div><strong>Pay</strong></div>
          <div><strong>Rs. {payable}</strong></div>
        </div>
        {/* <Divider/> */}
      </Paper>
      <div className={classes.saving}><strong>You Save {discount} Rs. on this Purchase</strong></div>
      <div className={classes.placeOrderBtn}><Button onClick={()=>{navigate('/success')}} size='large' sx={{borderRadius:'20px'}} variant='contained'>Place Order</Button></div>
    </Container>
    </div>

    <Container>
      <div className={classes.quick}><strong>Quick Summery</strong></div>
      <Paper className={classes.paperQuick} elevation={24}>
        {cart.map((m)=>{return (
          <>
          <div className={classes.quickItem}>
            <div><strong>{m.itemName}</strong></div>
            <div>Qty: 1</div>
            <div>{m.itemPrice} Rs.</div>
            </div>
          <Divider/>
          </>
        )})}
          
      </Paper>
      
    </Container>
    </>
  )
}

export default BillingPage