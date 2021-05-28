import React from 'react'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import NewTodo from './NewTodo';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HeaderListTodos() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6">Lista de tareas del usuario</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleClickOpen}
            >
              Agregar nuevo
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nueva tarea</DialogTitle>
        <DialogContent>
          <NewTodo callbackSuccess={handleClose} callbackError={() => alert('Ocurrio un error')} />
        </DialogContent>
      </Dialog>
    </>
  );
}
