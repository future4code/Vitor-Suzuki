import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      width: '100%',
      height: 'auto',
    },
  },
}));

const CircularLoading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
}

export default CircularLoading