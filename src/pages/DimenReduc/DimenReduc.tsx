import React from 'react';
import { I18nText } from '../../components/I18nText';
import './DimenReduc.css';
import { Grid } from '@material-ui/core';

export const DimenReduc = () => {
  return (
    <div className='DimenReduc'>
      <Grid id='top-row' container spacing={5}>
        <Grid item xs={12}>
          <I18nText i18nKey='general.under-construction'></I18nText>
        </Grid>
      </Grid>
    </div>
  );
};
