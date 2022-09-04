import { makeStyles } from '@mui/styles'
import React from 'react'
import MerchantCard from '../components/MerchantCard'
import merchant from '../assets/Api/VendorApi'

const styles = makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(10)
  }
}))

const HomePage = () => {
  const classes = styles()
  return (
    <div className={classes.mainDiv}>
      <MerchantCard/>
    </div>
  )
}

export default HomePage