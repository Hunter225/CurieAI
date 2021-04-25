import React from 'react';
import './Classification.css';
import { Grid } from '@material-ui/core';
import { DownloadButton } from '../../components/DownloadButton';
import { UploadAndTrain } from './UploadAndTrain';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { EmptyRow } from '../../components/EmptyRow';

export const Classification = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='Classification'>
      <Grid id='top-row' container spacing={5}>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <Typography>{t('classification.hints')}</Typography>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>

      <EmptyRow marginFix={0} marginReponsive={5}></EmptyRow>

      <Grid id='second-row' container spacing={5}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <DownloadButton
            i18nKey='general.download-template'
            filePath='/templates/classification/training_data_template.csv'
            fileName='training_data_template.csv'
          ></DownloadButton>
        </Grid>
        <Grid item xs={3}>
          <UploadAndTrain />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
