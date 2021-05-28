import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 350,
    marginBottom: theme.spacing(5)
  },
  actions: {
    padding: 0
  }
}))

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function NewTodo({ callbackSuccess, callbackError }) {
  const classes = useStyles()
  const [title, setTitle] = useState('')

  const onChange = ({target: {value}}) => setTitle(value)
  
  const onSubmit = e => {
    e.preventDefault()
    const success = parseInt(getRandomArbitrary(0, 2))
    if (success) {
      callbackSuccess()
    } else {
      callbackError()
    }
  }
  
  return (
    <form onSubmit={onSubmit}>
      <TextField
        className={classes.textField}
        autoFocus
        label="Titulo de la tarea"
        fullWidth
        onChange={onChange}
        value={title}
        required
      />
      <Divider />
      <DialogActions className={classes.actions}>
        <Button  color="primary">
          Cancelar
        </Button>
        <Button  color="primary" type='submit'>
          Crear
        </Button>
      </DialogActions>
    </form>
  )
}
