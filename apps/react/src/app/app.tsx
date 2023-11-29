// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Grid } from '@mui/material';
import Comp1 from '../components/context/Comp1';
import Comp2 from '../components/context/Comp2';
import Comp3 from '../components/context/Comp3';
import { Provider } from '../components/context/Provider';
import { useState } from 'react';

export function App() {
  const [numb, setNumb] = useState(0);

  const handleRandomize = () => {
    setNumb(Number((Math.random() * 10).toPrecision(1)));
  };

  return (
    <Grid container gap={1}>
      <Provider value={{ numb: numb, randomize: handleRandomize }}>
        <Grid item sm={3}>
          <Comp1 />
        </Grid>
        <Grid item sm={3}>
          <Comp2 />
        </Grid>
      </Provider>

      <Grid item sm={3}>
        <Comp3 />
      </Grid>
    </Grid>
  );
}

export default App;
