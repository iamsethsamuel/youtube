import React, { useContext, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Context } from './Provider';

export default function Comp1() {
  const {numb, randomize} = useContext(Context)

  return (
    <Container>
      <Typography variant="h2">This is component one</Typography>
      <Typography>
        The number {numb} character point is: {" "}
        <strong>{numb.toString().charCodeAt(0)?.toString()}</strong>
      </Typography>
      <Button variant="contained" fullWidth onClick={randomize}>Randomize </Button>
    </Container>
  );
}
