import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
interface EmptyRowInterface {
  marginFix: number;
  marginReponsive: number;
}

export const EmptyRow = ({ marginFix, marginReponsive }: EmptyRowInterface) => {
  const useStyles = makeStyles({
    emptyRow: {
      marginBottom: `calc(${marginFix}px + ${marginReponsive}vmin)`
    }
  });
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Divider className={classes.emptyRow}></Divider>
    </Grid>
  );
};
