import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button';
import { Form } from '../Input/styles';
import axios from "axios"
import IForm from '../../interfaces/IForm';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '15vw'
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(250, 250, 250)',
      color: '#000000',
    },
    '& .MuiButtonBase-root': {
      height: 55.5,
      width: '7vw',
      fontSize: 25
    }
  }
}))

export const Input: React.FC<IForm> = ({form, onChange, onSubmitForm}) => {
  const classes = useStyles();

  return (
    <Form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
          id="filled-basic"
          label="Name"
          variant="filled"
        />

        <TextField
          name={"last_name"}
          value={form.last_name}
          onChange={onChange}
          required
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />

        <TextField
          name={"participation"}
          value={form.participation}
          onChange={onChange}
          required
          id="filled-basic"
          label="Participation"
          variant="filled"
          type="number"
          InputProps={{ inputProps: { min: 0.00, max: 100.00 } }}
        />

        <Button
          type={"submit"}
          className={classes.root}
          variant="outlined"
          color="secondary">
          SEND
        </Button>

    </Form>
  );
}

export default Input
