import { Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import successImage from '../assets/Images/success.gif'

const useStyles = makeStyles(theme=>({
    mainDiv:{
        marginTop:'12vh',
        // border:'1px solid red',
        textAlign:'center'        
    },
    trackBtn:{
        marginTop:theme.spacing(2)
    },
    shopingBtn:{
        marginTop:theme.spacing(4)
    }
}))

const SuccessOrder = () => {
    const classes = useStyles()
    const navigate = useNavigate()
  return (
    <Container >
        <div className={classes.mainDiv}>
            <div>
                <img src={successImage} alt="success" />
            </div>
            <div>
                <strong>
                    Your Order hasbeen Placed Successfully
                </strong>
            </div>
            <div>
                <small>
                    Order ID : 1823:2565:25478:3658
                </small>
            </div>
            <div className={classes.trackBtn}>
                <Button onClick={()=>{navigate('/tracker')}} variant='outlined'  >Track My Order</Button>
            </div>

            <div className={classes.shopingBtn}>
                <Button onClick={()=>{navigate('/')}} variant='contained'  >Continue Shopping</Button>
            </div>
        </div>
    </Container>
  )
}

export default SuccessOrder