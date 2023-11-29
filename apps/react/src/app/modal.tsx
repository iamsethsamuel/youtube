import { Button, Container, Drawer, Grid, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';

export default function Modal() {
  const [open, setOpen] = useState(false),
    [openTailwind, setOpenTailwind] = useState(false);

  return (
    <Container>
      <Typography variant="h4" className='' style={{color: 'red'}} sx={{ py: 5, p:12 }}>
        MUI (React Library) compared to Tailwind (CSS Library){' '}
      </Typography>
      <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
        <Typography>Hi I am a modal</Typography>
      </Drawer>
      <TailwindModal
        isOpen={openTailwind}
        onClose={() => setOpenTailwind(false)}
      >
        <Typography>Hi I am a modal made with tailwind css</Typography>
      </TailwindModal>
      <Grid container gap={1}>
        <Grid item sm={5}>
          <Button variant="contained" onClick={() => setOpen(true)} fullWidth>
            Open MUI Modal{' '}
          </Button>
        </Grid>
        <Grid item sm={5}>
          <Button
            variant="contained"
            onClick={() => setOpenTailwind(true)}
            fullWidth
          >
            Open Tailwind Modal
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

const TailwindModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const overlayClasses = isOpen
    ? 'fixed inset-0 bg-black bg-opacity-50 z-50 flex fixed inset-x-0 bottom-0 items-end min-h-screen '
    : 'hidden';

  const modalClasses = isOpen ? 'bg-white w-100 p-4 rounded-md justify-center w-full max-w-lg p-6 rounded-lg' : 'hidden';

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
