import { Accordion, AccordionDetails, AccordionSummary, Container, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import map from '../assets/Images/cooking.gif'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const useStyles = makeStyles(theme=>({
    container:{
        marginTop: theme.spacing(12),
        textAlign:'center'
    },
    lines:{
        display:'flex',
        justifyContent:'space-between',
        padding:'10px'
    }
}))

const OrderTrackingPage = () => {
    const classes = useStyles()
  return (
    <div>
        <Container className={classes.container}>
            <div>
                <div><img src={map} height="300px" width="100%" alt="map" /></div>
            </div>
            <div>
                <strong>1 Active Order  </strong>   
            </div>
            <div>
                <Accordion>
                <AccordionSummary sx={{backgroundColor:'green'}} expandIcon={<ExpandMoreIcon/>}> #1823:2565:25478:3658 - Cooking</AccordionSummary>
                <AccordionDetails>
                    <div className={classes.lines}>
                        <div>Order Status:</div>
                        <div><strong>Cooking</strong></div>
                    </div>
                    <Divider/>
                    <div className={classes.lines}>
                        <div>Order Amount:</div>
                        <div>250 Rs.</div>
                    </div>
                    <Divider/>
                    <div>
                        <small>25 mint Promise Delivery Time</small>
                    </div>
                    
                </AccordionDetails>
                </Accordion>
            </div>
        </Container>
    </div>
  )
}

export default OrderTrackingPage