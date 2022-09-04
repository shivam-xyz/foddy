import { Button, Fab } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import NavigationIcon from '@mui/icons-material/Navigation'
import {context} from '../reducer_sec/ContextApi'
import ForwardIcon from '@mui/icons-material/Forward';

const useStyles = makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(9)
  },
  fab:{
    position:'fixed',
    bottom:40,
    right:30
  }
}))

const MenuPage = () => {
  const classes = useStyles()
  const param = useParams()
  const {cart,setCart} = useContext(context)
  const navigate = useNavigate()
  // console.log(param)
  return (
    <div className={classes.mainDiv}>
      <ItemCard param={param}/>
      <div className={classes.fab} >
        <Button onClick={()=>{navigate('/cart')}} disabled={cart.length==0?true:false} variant='contained' size='large' endIcon={<ForwardIcon/>} color="secondary" >Proceed</Button>
      </div>
    </div>
  )
}

export default MenuPage