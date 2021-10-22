import React,{useState, useEffect } from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@mui/material';
import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles'
import { Link, useHistory } from 'react-router-dom'

const steps = ['Shipping address', 'Payment address'];

const Checkout = ({cart,order,error}) => {

    const classes = useStyles()
    const history = useHistory()
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevStep) => prevStep + 1 )
    const backStep = () => setActiveStep((prevStep) => prevStep - 1 )
    
    useEffect(()=>{
        if (cart.id) {

        }
    },[cart])
    let Confirmation = () =>(order.customer ? (
        <>
        <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider}/>
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} to='/' variant="outlined" type="button">Back to home</Button>
        </>
    ): (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    ))
    if (error){
        Confirmation = () => (
            <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
            </>
        )
    }

    const Form = () => (activeStep === 0
    ? <AddressForm/>
    : <PaymentForm/>);

    return (
        <>
          <CssBaseline />
          <div className={classes.toolbar} />
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant="h4" align="center">checkout</Typography>
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Form />
                {/* {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>} */}
              </Paper>
          </main>
        </>
    )
}

export default Checkout
