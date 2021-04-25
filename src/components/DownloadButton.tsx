import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';

interface DownloadButtonInterface {
  i18nKey: string;
  filePath: string;
  fileName: string;
}

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
  }
});

export const DownloadButton = ({
  i18nKey,
  filePath,
  fileName
}: DownloadButtonInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Button href={filePath} download={fileName} className={classes.button}>
          {t(`${i18nKey}`)}
        </Button>
      </CardContent>
    </Card>
  );
};
