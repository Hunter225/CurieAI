import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import _ from 'lodash';
import papa from 'papaparse';
import { ensemble } from 'machinelearn';
import { arrayToCsvString } from '../../utils/arrayToCsvString';
import { joinSampleAndResult } from '../../utils/joinSampleAndResult';

const useStyles = makeStyles({
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
  input: {
    display: 'none'
  }
});

export const UploadAndTrain = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultFileReady, setIsResultFileReady] = useState(false);
  const [trainingData, setTrainingData] = useState([] as any[]);
  const [dataToBeLabeled, setDataToBeLabeled] = useState([] as any[]);
  // TODO: Let the user choose which column is Y_train
  const [headers, setHeaders] = useState([] as any[]);
  const [resultCsv, setResultCsv] = useState('');
  const cls = new ensemble.RandomForestClassifier();

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
                const toBeLabeledTmp: any[] = [];

                let data = result.data;

                setHeaders(data[0]);
                data = _.slice(data, 1, data.length);

                for (let datum of data) {
                  if (datum[datum.length - 1] === null) {
                    toBeLabeledTmp.push(datum);
                  } else {
                    trainingDataTmp.push(datum);
                  }
                }

                setDataToBeLabeled(toBeLabeledTmp);
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

  const StartToTrain = () => {
    return (
      <div>
        <Button
          className={classes.button}
          component='span'
          onClick={() => {
            setIsLoading(true);

            const X_train = trainingData.map((datum) =>
              _.slice(datum, 0, datum.length - 2)
            );

            const Y_train = trainingData.map(
              (datum) => datum[datum.length - 1]
            );

            const X_predict = dataToBeLabeled.map((datum) =>
              _.slice(datum, 0, datum.length - 1)
            );

            setTimeout(() => {
              cls.fit(X_train, Y_train);
              const Y_predict = cls.predict(X_predict);

              const predictionResult = joinSampleAndResult(
                X_predict,
                Y_predict
              );
              const csv = arrayToCsvString(
                _.concat([headers], predictionResult)
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
        ) : isUploaded ? (
          <StartToTrain />
        ) : (
          <UploadButton />
        )}
      </CardContent>
    </Card>
  );
};
