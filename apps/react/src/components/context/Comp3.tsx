import React, { useContext, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Context } from './Provider';

export default function Comp3() {
  const { numb, randomize } = useContext(Context);

  function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  return (
    <Container>
      <Typography variant="h2">This is component Three</Typography>
      <Typography>
        The fibonacci of the number {numb} is: <strong>{fib(numb)}</strong>
      </Typography>
      <Button variant="contained" fullWidth onClick={randomize}>
        Randomize{' '}
      </Button>
    </Container>
  );
}
