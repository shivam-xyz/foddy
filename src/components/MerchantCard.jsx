import { Box, Container, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import merchant from '../assets/Api/VendorApi'

import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
  container:{
    // border:'1px solid red',
    // backgroundColor:'red',
    // height:'100px',
  },
  paper:{
    // border:'1px solid green',
    // height:"350px",
    marginBottom:theme.spacing(2),
    width:'100%',
    [theme.breakpoints.up('sm')]:{
      width:'300px'
    }
  },
  image:{
    // border:'1px solid black',
    height:'250px',
    borderRadius:'10px'
  },
  info:{
    // border:'1px solid red',
    // height:'70px',
    display:'flex'
  },
  left:{
    // border:'1px solid blue',
    width:'50%',
    // height:'100%',
    padding:'5px 0px 5px 10px'
  },
  right:{
    // border:'1px solid red',
    width:'50%',
    padding:'5px 10px 5px 10px'
  },
  offer:{
    // border:'1px solid green',
    height:'30px',
    textAlign:'center',
    padding:'5px 0px 5px 0px'
  },
  duration:{
    // border:'1px solid red',
    height:'30px',
    padding:'5px 0px 0px 0px',
    color:'green',
    textAlign:'center'
  },
  paperDiv:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  veggieDiv:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  vegnonvegicons:{
    display:'flex'
  }

}))
const MerchantCard = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div>
      <Box>
        <Container maxWidth="xl" className={classes.container}>
        <div className={classes.paperDiv}>
        {merchant.map((data)=>{return(
          <Paper elevation={24} className={classes.paper} onClick={()=>{navigate(`menu/${data.categoryId}`)}}>
            <div className={classes.image}>
              <img width="100%" height="250px" src={data.image} alt="image" />
            </div>
            <div className={classes.info}>
              <div className={classes.left}>
              <marquee behavior="slide" direction="left" scrollamount={30}>
                <div>
                  <strong>{data.name}</strong>
                </div>
                <div>
                  <small>{data.address}</small>
                </div>
                </marquee>
              </div>
              <div className={classes.right}>
              <marquee behavior="slide" direction="left" scrollamount={30}>
                <div>
                  <strong>{data.forMany} Persons</strong>
                </div>
                <div className={classes.veggieDiv}>
                  {data.type==='Veg'?<div><Brightness1Icon sx={{color:'green'}}/></div>: (data.type==="Non Veg"?<div><Brightness1Icon sx={{color:'red'}}/></div>: <div className={classes.vegnonvegicons} > <div><Brightness1Icon sx={{color:'red'}}/></div><div><Brightness1Icon sx={{color:'green'}}/></div></div>) }
                </div>
                </marquee>
              </div>
            </div>
            <div className={classes.offer}>
              <strong>{data.offer}</strong>
            </div>
            <div className={classes.duration}>
              <strong>{data.deliveryDuration}</strong>
            </div>
          </Paper>
        )})}
          
          
          </div>
        </Container>
      </Box>
    </div>
  )
}

export default MerchantCard