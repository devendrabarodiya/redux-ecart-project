import {
    Box,
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
  } from "@mui/material";
import { useSelector } from "react-redux";
  
  export default function Checkout() {
    const billingDetails = useSelector((state) => state.checkout.billingDetails);
    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
        </Box>
  
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Box component="form">
              <TextField
                defaultValue={billingDetails?.firstName}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
  
              <TextField
              defaultValue={billingDetails?.address}
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
              />
  
              <TextField
                label="Credit Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 16 }}
              />
  
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 3 }}
              />
  
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Month"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 1, max: 12 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Year"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 2023 }}
                  />
                </Grid>
              </Grid>
  
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Pay Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }


  // import React from 'react';
// import { useSelector } from 'react-redux';
// import BillingForm from './BillingForm';
// import ShippingForm from './ShippingForm';

// function CheckoutPage() {
//   const billingDetails = useSelector((state) => state.checkout.billingDetails);
//   const shippingDetails = useSelector((state) => state.checkout.shippingDetails);

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <div>
//         <h3>Billing Details</h3>
//         <BillingForm />
//       </div>
//       <div>
//         <h3>Shipping Details</h3>
//         <ShippingForm />
//       </div>
//       <div>
//         <h3>Order Summary</h3>
//         {/* Display order summary and total */}
//       </div>
//     </div>
//   );
// }

// export default CheckoutPage;