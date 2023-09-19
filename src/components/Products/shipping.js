import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBillingDetails } from '../../actions/CartAction';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddressForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [billingData, setBillingData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const billingAddress = dispatch(setBillingDetails(billingData));
        if(billingAddress){
            navigate('/checkout') 
        }
    
    };


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
               
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // onClick={() => { }}
                >
                    Save Shipping Details
                </Button>
                
            </Grid>
            </Box>
        </React.Fragment>
    );
}



// BillingForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setBillingDetails } from '../../actions/CartAction';

// function BillingForm() {
//   const dispatch = useDispatch();
//   const [billingData, setBillingData] = useState({
//     firstName: '',
//     lastName: '',
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBillingData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setBillingDetails(billingData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={billingData.firstName}
//         onChange={handleChange}
//         placeholder="First Name"
//       />
//       {/* Add more input fields for billing details */}
//       <button type="submit">Save Billing Details</button>
//     </form>
//   );
// }

// export default BillingForm;
