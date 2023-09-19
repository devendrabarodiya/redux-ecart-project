import React from 'react';
import { useSelector } from 'react-redux';
// React Import
import { useState, useEffect } from "react";
// MUI Import
import {
  Button,
  TextField,
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
//

function ProfilePage() {
  // Get user data from the Redux store
  const users = useSelector((state) => state.registration.users);
  console.log('profi', users)

  return (
    <>
      <Card>
        <CardContent>
          <>
            <Grid
              container
            >
              <Grid item xs={12} sm={12} md={6} lg={6} m={2}>
                <Typography >User Profile</Typography>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={4}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  defaultValue={users[0]?.first_name}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  // {...register("last_name")}
                  defaultValue={users[0]?.last_name}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Email"
                  // {...register("email")}
                  defaultValue={users[0]?.email}
                />

              </Grid>
            </Grid>
          </>
        </CardContent>
      </Card>
    </>
  );
}

export default ProfilePage;
