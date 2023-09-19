import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

export default function Review() {
    const products = useSelector((state) => state.addProduct.product)
    const totalSum = products.reduce((accumulator, item) => accumulator + item.total, 0);
    const billingDetails = useSelector((state) => state.checkout.billingDetails);
    const payment = useSelector((state) => state.card.cardDetails)

   const cardNumber =  payment?.card_number ? payment?.card_number : '12345678912345'
    const cardLength = cardNumber?.length;

const numAsterisks = cardLength - 4;
const asterisks = "*".repeat(numAsterisks);
const lastFourDigits = cardNumber.slice(-4);
const maskedCardNumber = asterisks + lastFourDigits;
    // console.log('pro',billingDetails)
    // const billingDetails = useSelector((state) => state.checkout.billingDetails);
  return (
    <Box sx={{width: "50%", }}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.quantity ? product.quantity : 1} />
            <Typography variant="body2">{product.total}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalSum}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{billingDetails?.firstName}</Typography>
          <Typography gutterBottom>{billingDetails.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
           
              <React.Fragment key={payment.firstName}>
              <Grid item xs={6}>
                  <Typography gutterBottom>Card holder: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card number </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{maskedCardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom > {payment.exp_month}/{payment.exp_year}</Typography>
                </Grid>
              </React.Fragment>
          
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    </Box>
  );
}