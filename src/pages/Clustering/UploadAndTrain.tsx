import React, { useState, createRef } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import _ from 'lodash';
import papa from 'papaparse';
import { cluster } from 'machinelearn';
import { arrayToCsvString } from '../../utils/arrayToCsvString';
import { joinSampleAndResult } from '../../utils/joinSampleAndResult';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: '#34383f',
      color: 'white',
      fontSize: 'calc(8px + 2hmin + 1vmin)'
    },
    cardContent: {
      backgroundColor: '#34383f',
      color: 'white'
    },
    button: {
      backgroundColor: '#34383f',
      color: 'white',
      textDecoration: 'none'
    },
    submitButton: {
      justifyContent: 'center',
      backgroundColor: '#34383f',
      color: 'white',
      textDecoration: 'none'
    },
    input: {
      display: 'none'
    },
    textFieldFontColor: {
      color: 'white',
      '& .MuiFormLabel-root': {
        padding: '0',
        fontSize: '1rem',
        fontFamily: 'Roboto, "Helvetica, Arial, sans-serif',
        fontWeight: '400',
        lineHeight: '1',
        letterSpacing: '0.00938em',
        color: 'white'
      }
    }
  })
);

export const UploadAndTrain = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [isUploaded, setIsUploaded] = useState(false);
  const [numOfCluster, setNumOfCluster] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultFileReady, setIsResultFileReady] = useState(false);
  const [trainingData, setTrainingData] = useState([] as any[]);
  // TODO: Let the user choose which column is Y_train
  const [headers, setHeaders] = useState([] as any[]);
  const [resultCsv, setResultCsv] = useState('');

  const numOfClusterRef = createRef<HTMLInputElement>();

  const UploadButton = () => {
    return (
      <div>
        <input
          accept='.csv'
          className={classes.input}
          id='contained-button-file'
          type='file'
          onChange={(event) => {
            const fileList = event.target.files;
            const csvFile = _.get(fileList, '0');
            papa.parse(csvFile, {
              // header: true,
              dynamicTyping: true,
              complete: (result) => {
                const trainingDataTmp: any[] = [];

                let data = result.data;

                setHeaders(data[0]);
                data = _.slice(data, 1, data.length);

                for (let datum of data) {
                  trainingDataTmp.push(datum);
                }
                setTrainingData(trainingDataTmp);
              }
            });
            setIsUploaded(true);
          }}
        />
        <label htmlFor='contained-button-file'>
          <Button className={classes.button} component='span'>
            {t('general.upload-data')}
          </Button>
        </label>
      </div>
    );
  };

  const InputNumOfClus = () => {
    return (
      <div>
        <form>
          <Typography>{t('clustering.num-of-clus')}</Typography>
          <input type='text' ref={numOfClusterRef} defaultValue='4' />
          <Button
            type='submit'
            className={classes.button}
            onClick={() => {
              setNumOfCluster(Number(numOfClusterRef?.current?.value));
            }}
          >
            {t('general.submit')}
          </Button>
        </form>
      </div>
    );
  };

  const StartToTrain = () => {
    return (
      <div>
        <Button
          className={classes.button}
          component='span'
          onClick={() => {
            setIsLoading(true);
            const cls = new cluster.KMeans({ k: numOfCluster });

            const X_train = trainingData;

            setTimeout(() => {
              cls.fit(X_train);
              const X_cluster = cls.predict(X_train);

              const clusteringResult = joinSampleAndResult(X_train, X_cluster);
              const csv = arrayToCsvString(
                _.concat([_.concat(headers, 'cluster')], clusteringResult)
              );
              setResultCsv(csv);
              setIsResultFileReady(true);
            }, 500);
          }}
        >
          {t('general.start')}
        </Button>
      </div>
    );
  };

  const DownloadResult = () => {
    return (
      <Button
        href={'data:text/csv;charset=utf-8,' + encodeURI(resultCsv)}
        download='result.csv'
        className={classes.button}
      >
        {t('general.download-result')}
      </Button>
    );
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {isResultFileReady ? (
          <DownloadResult />
        ) : isLoading ? (
          <Typography>{t('general.loading')}</Typography>
        ) : isUploaded && numOfCluster > 0 ? (
          <StartToTrain />
        ) : isUploaded && numOfCluster <= 0 ? (
          <InputNumOfClus />
        ) : (
          <UploadButton />
        )}
      </CardContent>
    </Card>
  );
};
