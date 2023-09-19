
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { setBillingDetails, setCardDetails } from '../../actions/CartAction';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const addedProduct = useSelector((state) => state.addProduct.product);
  const billingDetails = useSelector((state) => state.checkout.billingDetails);
  const getCardDetails = useSelector((state) => state.card.cardDetails)
  const totalSum = addedProduct.reduce((accumulator, item) => accumulator + item.total, 0);
  const [cardData, setCardData] = useState({ firstName: '', address: '', })

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

    const billingAddress = dispatch(setBillingDetails(billingData));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const billingAddress = dispatch(setBillingDetails(billingData));
    // Get the form data and dispatch the action
    const formData = new FormData(e.target);
    const cardDetails = {
      firstName: formData.get('name'),
      card_number: formData.get('card_number'),
      exp_month: formData.get('exp_month'),
      exp_year: formData.get('exp_year'),
    };

    dispatch(setCardDetails(cardDetails));
    navigate('/thanks')

  };


  const handleCheckboxChange = () => {
    // navigate('/checkout')
    setCardData(billingDetails)
    console.log('billingDetails', billingDetails)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Box component="form" >
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

                    control={<Checkbox
                      onChange={handleCheckboxChange}
                      color="secondary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                  />
                </Grid>


              </Grid>
            </Box>
          </React.Fragment>

          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price&nbsp;($)</TableCell>
                  <TableCell align="right">Total&nbsp;($)</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {addedProduct.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '50px' }}
                  >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="right">{row.quantity ? row.quantity : 1}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ margin: '50px', float: "right" }}>
            <TableRow>
              <TableCell >Iteam {addedProduct.length}</TableCell>
              <TableCell >Subtotal</TableCell>
              <TableCell>{totalSum}</TableCell>
            </TableRow>
          </Box>
        </Box>

        <Box>
          <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" align="center">
                Checkout
              </Typography>
            </Box>

            <Card variant="outlined" sx={{ mt: 2 }}>
              <CardContent>
                <Box component="form" noValidate onSubmit={handleSubmit}>
                  <TextField
                    value={cardData?.firstName}
                    // onChange={handleInputChange}
                    name='name'
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    value={cardData?.address}
                    // onChange={handleInputChange}
                    // defaultValue={cardData?.address}
                    name='address'
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    name='card_number'
                    label="Credit Card Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ maxLength: 16 }}
                  />

                  <TextField
                    name='card_ccv'
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
                        name='exp_month'
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
                        name='exp_year'
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
        </Box>
      </Box>
    </>
  )
}

export default Cart