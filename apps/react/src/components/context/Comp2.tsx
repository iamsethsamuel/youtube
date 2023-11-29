import React, { useContext, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Context } from './Provider';

export default function Comp2() {
  const {numb, randomize} = useContext(Context)

  const getNumbName = () => {
    switch (numb) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return 'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      case 10:
        return 'Ten';
      default:
        return 'Unknown Number';
    }
  };

  return (
    <Container>
      <Typography variant="h2">This is component two</Typography>
      <Typography>
        The randomized number is {numb} written as: <strong>{getNumbName()}</strong>
      </Typography>
      <Button variant="contained" fullWidth onClick={randomize}>
        Randomize{' '}
      </Button>
    </Container>
  );
}
