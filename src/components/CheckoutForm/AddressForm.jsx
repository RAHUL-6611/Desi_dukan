import React,{useState, useEffect} from 'react'
import { InputLabel, Typography, Select, Grid, Menu, MenuItem, Button} from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { commerce } from '../../lib/commerce'
import FormInput from './CustomTextField'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
  
    const methods = useForm()
    console.log(methods);

    const fetchShippingCountries = async () => {}
    const fetchSubdivisions = async () => {}
    const fetchShippingOptions = async () => {}

    // useEffect(()=>{},[])
    // useEffect(()=>{},[shippingCountry])
    // useEffect(()=>{
    //     if (shippingSubdivision) 
    // },[shippingSubdivision])

    return (
        <>
         <Typography variant="h6" gutterBottom> Shipping Address </Typography>
         <FormProvider {...methods}>
             <form >
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="First name" />
                    <FormInput required name="lastName" label="Last name" />
                    <FormInput required name="address1" label="Address line 1" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="city" label="City" />
                    <FormInput required name="zip" label="Zip / Postal code" />
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        {/* <Select value={} fullWidth onChange={(e) => setShippingCountry(e.target.value)}> */}

                        {/* </Select> */}
                    </Grid>

                </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button component={Link} variant="outlined" to="/cart">Back to cart</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
             </form>
             </FormProvider>   
        </>
    )
}

export default AddressForm
